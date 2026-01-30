import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: integrate Resend or mock; send contract email
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    ok: true,
    message: "Contract send endpoint (mock)",
    ...body,
  });
}
