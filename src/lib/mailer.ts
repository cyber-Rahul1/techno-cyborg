import nodemailer from "nodemailer";

interface EmailPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  projectRequirements: string;
  expectedTimeline: string;
  additionalInformation?: string | null;
  enquiryId: string;
}

/**
 * Creates a Nodemailer transport using configured SMTP environment variables.
 * Returns null if SMTP is not configured.
 */
function getEmailTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends both an internal team notification and a client receipt confirmation via Nodemailer.
 */
export async function sendEnquiryEmails(payload: EmailPayload): Promise<{
  success: boolean;
  messageId?: string;
  error?: string;
}> {
  const transporter = getEmailTransporter();

  // If SMTP is not configured, log clearly and return safely without crashing
  if (!transporter) {
    console.log(
      "[NODEMAILER NOTICE] SMTP credentials not set (SMTP_HOST, SMTP_USER, SMTP_PASS). Email sending skipped in development mode for:",
      payload.email
    );
    return {
      success: true,
      error: "SMTP not configured. Logged to server console.",
    };
  }

  const receiverEmail =
    process.env.NOTIFICATION_RECEIVER_EMAIL ||
    process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
    "contact@technocyborg.com";

  const senderEmail =
    process.env.SMTP_FROM ||
    `"Techno Cyborg Inquiries" <${process.env.SMTP_USER}>`;

  // 1. Email to internal consultancy team
  const adminMailOptions = {
    from: senderEmail,
    to: receiverEmail,
    replyTo: payload.email,
    subject: `[New Project Inquiry] ${payload.projectType} — ${payload.companyName} (${payload.enquiryId})`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #080B12; color: #F8FAFC; padding: 32px; border-radius: 12px; max-width: 650px; margin: 0 auto; border: 1px solid #1E293B;">
        <div style="border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="color: #22D3EE; margin: 0 0 6px 0; font-size: 20px;">Techno Cyborg Private Limited</h2>
          <p style="color: #94A3B8; margin: 0; font-size: 13px;">New Client Project Inquiry • Ref: <strong>${payload.enquiryId}</strong></p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #94A3B8; width: 140px;">Client Name:</td>
            <td style="padding: 8px 0; color: #FFFFFF; font-weight: 600;">${payload.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94A3B8;">Company / Org:</td>
            <td style="padding: 8px 0; color: #FFFFFF; font-weight: 600;">${payload.companyName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94A3B8;">Email Address:</td>
            <td style="padding: 8px 0; color: #6366F1;"><a href="mailto:${payload.email}" style="color: #6366F1; text-decoration: none;">${payload.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94A3B8;">Phone Number:</td>
            <td style="padding: 8px 0; color: #FFFFFF;">${payload.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94A3B8;">Project Type:</td>
            <td style="padding: 8px 0; color: #22D3EE; font-weight: 600;">${payload.projectType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94A3B8;">Expected Timeline:</td>
            <td style="padding: 8px 0; color: #FFFFFF;">${payload.expectedTimeline}</td>
          </tr>
        </table>

        <div style="background-color: #101522; border-left: 3px solid #6366F1; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
          <h4 style="margin: 0 0 8px 0; color: #E2E8F0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Project Requirements</h4>
          <p style="margin: 0; color: #CBD5E1; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${payload.projectRequirements}</p>
        </div>

        ${
          payload.additionalInformation
            ? `
        <div style="background-color: #101522; border-left: 3px solid #8B5CF6; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
          <h4 style="margin: 0 0 8px 0; color: #E2E8F0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Additional Architecture / Constraints</h4>
          <p style="margin: 0; color: #CBD5E1; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${payload.additionalInformation}</p>
        </div>
        `
            : ""
        }

        <div style="border-top: 1px solid #1E293B; padding-top: 16px; font-size: 12px; color: #64748B; text-align: center;">
          Techno Cyborg Private Limited — Strategic Technology Consultancy & Onboarding
        </div>
      </div>
    `,
  };

  // 2. Client acknowledgment receipt
  const clientMailOptions = {
    from: senderEmail,
    to: payload.email,
    subject: `We have received your project inquiry — Techno Cyborg Private Limited (${payload.enquiryId})`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #080B12; color: #F8FAFC; padding: 32px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #1E293B;">
        <h2 style="color: #22D3EE; margin: 0 0 8px 0; font-size: 22px;">Techno Cyborg Private Limited</h2>
        <p style="color: #CBD5E1; font-size: 15px; line-height: 1.6;">
          Dear ${payload.fullName},
        </p>
        <p style="color: #94A3B8; font-size: 14px; line-height: 1.6;">
          Thank you for reaching out to <strong>Techno Cyborg Private Limited</strong>. We have successfully logged your project inquiry regarding <strong>${payload.projectType}</strong>.
        </p>
        <div style="background-color: #101522; padding: 16px 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #334155;">
          <p style="margin: 0; font-size: 13px; color: #94A3B8;">Reference Identifier:</p>
          <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 15px; color: #6366F1; font-weight: bold;">${payload.enquiryId}</p>
        </div>
        <p style="color: #94A3B8; font-size: 14px; line-height: 1.6;">
          Our consultancy team is currently reviewing your project parameters and requirements. We will be in touch with you shortly to schedule an initial scoping conversation.
        </p>
        <p style="color: #64748B; font-size: 13px; margin-top: 28px; border-top: 1px solid #1E293B; padding-top: 16px;">
          Best regards,<br />
          <strong>Client Solutions Team</strong><br />
          Techno Cyborg Private Limited
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(adminMailOptions);
    // Send client copy (fire & log)
    transporter.sendMail(clientMailOptions).catch((err) => {
      console.warn("Client confirmation email receipt failed to dispatch:", err);
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Failed to send email via SMTP";
    console.error("Nodemailer error:", errorMsg);
    return {
      success: false,
      error: errorMsg,
    };
  }
}
