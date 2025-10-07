import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, organization, subject, inquiry, email } = body;

  try {
    const htmlContent = `
      <h2>New Inquiry Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${inquiry.replace(/\n/g, "<br/>")}</p>
    `;

    await resend.emails.send({
      from: "Contact Form <info@internationaldisciples.com>",
      to: ["info@internationaldisciples.com"],
      subject: `Inquiry: ${subject}`,
      html: htmlContent,
    });

    return NextResponse.json({ status: "OK" });
  } catch (error) {
    console.error("Email error:", error);
    return new NextResponse("Email send failed", { status: 500 });
  }
}
