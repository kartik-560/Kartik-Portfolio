import nodemailer from "nodemailer";
export const dynamic = "force-dynamic";
export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // app password, NOT your real password
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email, // IMPORTANT: so you can reply directly
      to: process.env.EMAIL_USER,
      subject: `New Message: ${subject}`,
      html: `
  <div style="background:#f3f4f6;padding:40px 0;font-family:Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      
      <!-- Header -->
      <div style="background:linear-gradient(90deg,#06b6d4,#8b5cf6);padding:20px 30px;color:white;">
        <h2 style="margin:0;font-size:20px;">📩 New Contact Message</h2>
        <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">
          From your portfolio website
        </p>
      </div>

      <!-- Body -->
      <div style="padding:30px;">
        
        <!-- Info Table -->
        <table width="100%" style="border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:8px 0;color:#6b7280;"><strong>Name</strong></td>
            <td style="padding:8px 0;color:#111827;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280;"><strong>Email</strong></td>
            <td style="padding:8px 0;">
              <a href="mailto:${email}" style="color:#06b6d4;text-decoration:none;">
                ${email}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280;"><strong>Subject</strong></td>
            <td style="padding:8px 0;color:#111827;">${subject}</td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="margin-top:25px;">
          <p style="margin-bottom:8px;color:#6b7280;font-weight:bold;">Message</p>
          <div style="
            background:#f9fafb;
            border:1px solid #e5e7eb;
            padding:15px;
            border-radius:8px;
            color:#111827;
            white-space:pre-line;
          ">
            ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
          </div>
        </div>

        <!-- CTA -->
        <div style="margin-top:30px;text-align:center;">
          <a href="mailto:${email}" style="
            display:inline-block;
            padding:12px 20px;
            background:#06b6d4;
            color:white;
            text-decoration:none;
            border-radius:6px;
            font-size:14px;
          ">
            Reply to ${name}
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="padding:15px 30px;background:#f9fafb;font-size:12px;color:#6b7280;text-align:center;">
        This message was sent from your portfolio contact form
      </div>

    </div>
  </div>
`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
