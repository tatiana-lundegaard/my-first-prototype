import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: integrate Resend or mock; send quote email
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    ok: true,
    message: "Quote send endpoint (mock)",
    ...body,
  });
}
