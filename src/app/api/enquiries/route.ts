import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Authentication required" }, { status: 401 });

  const body = await request.json().catch(() => null);
  const listingId = typeof body?.listingId === "string" ? body.listingId : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  if (!listingId || message.length < 10) return NextResponse.json({ error: "Please provide a listing and a message of at least 10 characters." }, { status: 400 });

  const { data, error } = await supabase.rpc("create_enquiry", {
    p_listing_id: listingId,
    p_message: message,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ enquiryId: data }, { status: 201 });
}
