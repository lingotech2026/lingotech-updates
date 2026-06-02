import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'solutionslingotech@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'no-reply@lingotechsolutions.com';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (adminEmailResponse.error) {
      console.error('Resend Admin Email Error:', adminEmailResponse.error);
      return NextResponse.json({ error: adminEmailResponse.error.message || 'Failed to send admin email' }, { status: 500 });
    }

    // 2. Send auto-reply to user
    const userEmailResponse = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting Lingotech Solutions',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out to Lingotech Solutions! We have received your message regarding "<strong>${subject}</strong>".</p>
        <p>Our team will review your inquiry and get back to you as soon as possible, usually within 1-2 business days.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>The Lingotech Solutions Team</strong></p>
        <p><a href="https://www.lingotechsolutions.com/">www.lingotechsolutions.com</a></p>
      `,
    });

    if (userEmailResponse.error) {
      console.error('Resend User Email Error:', userEmailResponse.error);
      return NextResponse.json({ error: userEmailResponse.error.message || 'Failed to send auto-reply' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Catch Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
