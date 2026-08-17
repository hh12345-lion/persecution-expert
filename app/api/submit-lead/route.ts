import { NextResponse } from "next/server";
import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import sheetColumns from "@/lib/sheet-columns.json";

const BRAND_NAME = "Persecution Expert";
const LEAD_HEADERS = sheetColumns.headers;

type LeadBody = {
  fullName?: unknown;
  organisation?: unknown;
  email?: unknown;
  summary?: unknown;
  _gotcha?: unknown;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function getWebhookUrl(): string {
  return (process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL || "").trim();
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body._gotcha) {
    return NextResponse.json({ error: "Submission rejected." }, { status: 400 });
  }

  const fullName = sanitize(String(body.fullName ?? ""));
  const organisation = sanitize(String(body.organisation ?? ""));
  const email = String(body.email ?? "").toLowerCase().trim();
  const summary = sanitize(String(body.summary ?? ""));

  if (!fullName || !email || !organisation || !summary) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const sheetsConfigured = isGoogleSheetsConfigured();
  const webhookUrl = getWebhookUrl();

  if (!sheetsConfigured && !webhookUrl) {
    return NextResponse.json(
      {
        error: "Lead storage not configured.",
        message:
          "Set GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID, GOOGLE_SHEET_TAB_NAME and/or Lead_notification_url.",
      },
      { status: 503 }
    );
  }

  const byHeader: Record<string, string> = {
    Timestamp: new Date().toISOString(),
    Name: fullName,
    Firm: organisation,
    Email: email,
    "Case note": summary,
    "Brand name": BRAND_NAME,
  };
  const row = LEAD_HEADERS.map((header) => byHeader[header] ?? "");

  if (sheetsConfigured) {
    try {
      await appendRow(row);
    } catch (error) {
      console.error("Google Sheets write failed:", {
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      });
      if (!webhookUrl) {
        return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
      }
    }
  }

  if (webhookUrl) {
    const outbound = {
      Name: fullName,
      Firm: organisation,
      Email: email,
      "Case note": summary,
      "Brand name": BRAND_NAME,
    };

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
      });

      if (!res.ok && !sheetsConfigured) {
        return NextResponse.json({ error: "Webhook failed" }, { status: 502 });
      }
    } catch {
      if (!sheetsConfigured) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
      }
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
