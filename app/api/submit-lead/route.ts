import { NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";

const BRAND_NAME = "Persecution Expert";

type LeadBody = {
  fullName?: string;
  organisation?: string;
  email?: string;
  phone?: string;
  persecutionGround?: string;
  countryOfOrigin?: string;
  proceedings?: string;
  funding?: string;
  summary?: string;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function sheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
}

function getWebhookUrl(): string | undefined {
  return process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
}

export async function POST(request: Request) {
  const webhookUrl = getWebhookUrl();

  if (!sheetsConfigured() && !webhookUrl) {
    const missing: string[] = [];
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    if (!process.env.GOOGLE_PRIVATE_KEY) missing.push("GOOGLE_PRIVATE_KEY");
    if (!process.env.GOOGLE_SHEET_ID) missing.push("GOOGLE_SHEET_ID");
    return NextResponse.json(
      {
        error:
          "Lead storage not configured. Add Google Sheets vars and/or Lead_notification_url to .env.local.",
        ...(process.env.NODE_ENV === "development" && { missing }),
      },
      { status: 500 }
    );
  }

  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = sanitize(body.fullName ?? "");
  const email = (body.email ?? "").toLowerCase().trim();
  const phone = sanitize(body.phone ?? "");

  if (!fullName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const row = [
    new Date().toISOString(),
    fullName,
    sanitize(body.organisation ?? ""),
    email,
    phone,
    sanitize(body.persecutionGround ?? ""),
    sanitize(body.countryOfOrigin ?? ""),
    sanitize(body.proceedings ?? ""),
    sanitize(body.funding ?? ""),
    sanitize(body.summary ?? ""),
    BRAND_NAME,
  ];

  if (sheetsConfigured()) {
    try {
      await appendRow(row);
    } catch (error) {
      console.error("Google Sheets write failed:", {
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
    }
  }

  if (webhookUrl) {
    const outbound = {
      "Full Name": fullName,
      Email: email,
      "Phone Number": phone,
      "Brand name": BRAND_NAME,
    };

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
      });

      if (!res.ok) {
        console.error("Lead webhook failed:", res.status);
        if (!sheetsConfigured()) {
          return NextResponse.json({ error: "Webhook failed" }, { status: 502 });
        }
      }
    } catch {
      if (!sheetsConfigured()) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
      }
      console.error("Lead webhook request failed");
    }
  }

  return NextResponse.json({ ok: true });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
  });
}
