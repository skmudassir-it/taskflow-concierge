import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: wire to email/SendGrid, CRM webhook, or Slack notification
    console.log("Contact form submission:", body);
    return NextResponse.json({ success: true, message: "Message received" });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
