import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const infoEmail = "info@petrelbathfitting.com";
const testEmail = "jainulhasan11@gmail.com";
const recipients = [testEmail];
const rateLimitWindowMs = 60_000;
const rateLimitMaxRequests = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  try {
    const rateLimit = checkRateLimit(getClientIp(request));
    if (!rateLimit.ok) {
      return NextResponse.json({ error: "Unable to send enquiry." }, { status: 429 });
    }

    const payload = await request.json();
    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();
    const phone = String(payload.phone || "").trim();
    const company = String(payload.company || "").trim();
    const message = String(payload.message || "").trim();

    if (!isValidEnquiry({ name, email, phone, company, message })) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const subject = `Petrel website enquiry from ${name}`;
    const text = formatText({ name, email, phone, company, message });
    const html = formatHtml({ name, email, phone, company, message });
    const config = getSmtpConfig();

    if (!config) {
      console.error("Contact enquiry failed: SMTP is not configured.");
      return NextResponse.json({ error: "Unable to send enquiry." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport(config.transport);

    await transporter.sendMail({
      from: config.from,
      to: recipients,
      replyTo: email,
      subject,
      text,
      html
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const mailError = error as { code?: string; command?: string; responseCode?: number };
    console.error("Contact enquiry failed.", {
      code: mailError.code,
      command: mailError.command,
      responseCode: mailError.responseCode
    });
    return NextResponse.json({ error: "Unable to send enquiry." }, { status: 500 });
  }
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const user = process.env.SMTP_USER || infoEmail;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const from = process.env.SMTP_FROM || user;

  if (!pass) return null;

  return {
    from,
    transport: {
      host,
      port,
      secure,
      auth: {
        user,
        pass
      }
    }
  };
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    cleanupRateLimits(now);
    return { ok: true };
  }

  if (current.count >= rateLimitMaxRequests) return { ok: false };

  current.count += 1;
  return { ok: true };
}

function cleanupRateLimits(now: number) {
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) rateLimitStore.delete(key);
  }
}

function isValidEnquiry({
  name,
  email,
  phone,
  company,
  message
}: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    name.length >= 2 &&
    name.length <= 120 &&
    emailPattern.test(email) &&
    email.length <= 160 &&
    phone.length <= 40 &&
    company.length <= 160 &&
    message.length >= 10 &&
    message.length <= 3000
  );
}

function formatText({
  name,
  email,
  phone,
  company,
  message
}: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}) {
  return [
    "New website enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Company: ${company || "-"}`,
    "",
    "Requirement:",
    message,
    "",
    "Source: Petrel Bath Fittings website contact form"
  ].join("\n");
}

function formatHtml({
  name,
  email,
  phone,
  company,
  message
}: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}) {
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "-"],
    ["Company", company || "-"]
  ];

  return `
    <div style="margin:0;background:#f6f7fb;padding:28px;font-family:Arial,sans-serif;color:#111827;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
        <div style="background:#0B1F3A;color:#ffffff;padding:22px 26px;">
          <p style="margin:0 0 6px;color:#D4AF37;font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">Petrel Bath Fittings</p>
          <h1 style="margin:0;font-size:22px;line-height:1.25;">New website enquiry</h1>
        </div>
        <div style="padding:24px 26px;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:22px;">
            <tbody>
              ${rows
                .map(
                  ([label, value]) => `
                    <tr>
                      <td style="width:140px;padding:10px 0;border-bottom:1px solid #eef0f4;color:#6b7280;font-size:13px;font-weight:700;">${escapeHtml(label)}</td>
                      <td style="padding:10px 0;border-bottom:1px solid #eef0f4;color:#111827;font-size:14px;">${escapeHtml(value)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
          <p style="margin:0 0 8px;color:#6b7280;font-size:13px;font-weight:700;">Requirement</p>
          <div style="white-space:pre-wrap;border-radius:12px;background:#f9fafb;border:1px solid #eef0f4;padding:16px;color:#111827;font-size:14px;line-height:1.65;">${escapeHtml(message)}</div>
          <p style="margin:20px 0 0;color:#9ca3af;font-size:12px;">Source: Petrel Bath Fittings website contact form</p>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
