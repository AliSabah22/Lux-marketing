import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = {
    name: String(form.get("name") || ""),
    email: String(form.get("email") || ""),
    company: String(form.get("company") || ""),
    message: String(form.get("message") || ""),
    createdAt: new Date().toISOString(),
  };

  // TODO: Replace with CRM or email provider integration
  console.log("Lead:", payload);
  // Redirect to thank-you page for better UX
  return NextResponse.redirect(new URL("/thank-you", req.url));
}


