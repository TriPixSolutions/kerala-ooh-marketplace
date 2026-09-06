import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Authentication required" }, { status: 401 });

  const body = await request.json().catch(() => null);
  const listingId = typeof body?.listingId === "string" ? body.listingId : "";
  if (!listingId) return NextResponse.json({ error: "listingId is required" }, { status: 400 });

  const { data: listing } = await supabase.from("ad_listings").select("id,owner_id,status").eq("id", listingId).eq("status", "PUBLISHED").single();
  if (!listing) return NextResponse.json({ error: "Listing is unavailable" }, { status: 404 });
  if (listing.owner_id === user.id) return NextResponse.json({ error: "You cannot start a conversation with yourself" }, { status: 400 });

  const { data: existing } = await supabase
    .from("conversations")
    .select("id")
    .eq("listing_id", listingId)
    .order("created_at", { ascending: true });

  for (const conversation of existing ?? []) {
    const { data: membership } = await supabase.from("conversation_members").select("conversation_id").eq("conversation_id", conversation.id).eq("user_id", user.id).maybeSingle();
    if (membership) return NextResponse.json({ conversationId: conversation.id });
  }

  const { data: conversation, error } = await supabase.from("conversations").insert({ listing_id: listingId }).select("id").single();
  if (error || !conversation) return NextResponse.json({ error: error?.message || "Could not create conversation" }, { status: 400 });

  const { error: membersError } = await supabase.from("conversation_members").insert([
    { conversation_id: conversation.id, user_id: user.id },
    { conversation_id: conversation.id, user_id: listing.owner_id },
  ]);
  if (membersError) {
    await supabase.from("conversations").delete().eq("id", conversation.id);
    return NextResponse.json({ error: membersError.message }, { status: 400 });
  }

  return NextResponse.json({ conversationId: conversation.id }, { status: 201 });
}
