import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.FullName || !data.Email || !data.Service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: wire this up to real delivery once credentials/an endpoint are available —
  // e.g. an email provider (Resend/SMTP) or the ClickUp form the client already uses
  // for /contact-us (https://forms.clickup.com/9012849900/f/8ckab7c-5032/80PBDE7GWQCQ8LR5EE).
  console.log("Contact form submission:", data);

  return NextResponse.json({ ok: true });
}
