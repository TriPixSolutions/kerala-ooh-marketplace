import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Authentication required" }, { status: 401 });

  const body = await request.json().catch(() => null);
  const conversationId = typeof body?.conversationId === "string" ? body.conversationId : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  if (!conversationId || message.length < 1 || message.length > 4000) {
    return NextResponse.json({ error: "conversationId and a message are required" }, { status: 400 });
  }

  const { data: membership } = await supabase
    .from("conversation_members")
    .select("conversation_id")
    .eq("conversation_id", conversationId)
    .eq("user_id", user.id)
    .maybeSingle();
  if (!membership) return NextResponse.json({ error: "You are not part of this conversation" }, { status: 403 });

  const { data, error } = await supabase
    .from("messages")
    .insert({ conversation_id: conversationId, sender_id: user.id, body: message })
    .select("id,conversation_id,sender_id,body,created_at,read_at")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  const { data: recipients } = await supabase
    .from("conversation_members")
    .select("user_id")
    .eq("conversation_id", conversationId)
    .neq("user_id", user.id);

  if (recipients?.length) {
    await supabase.from("notifications").insert(
      recipients.map((recipient) => ({
        user_id: recipient.user_id,
        type: "NEW_MESSAGE",
        title: "New message",
        body: "You have a new message about an advertising space.",
      })),
    );
  }

  return NextResponse.json({ message: data }, { status: 201 });
}
