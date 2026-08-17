/**
 * One-time setup: write brief-form field names as column headers on row 1.
 *
 * Usage:
 *   npm run sheets:headers
 *
 * Reads .env then .env.local.
 * Requires: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID
 * Optional: GOOGLE_SHEET_TAB_NAME (defaults to Sheet1)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { google } from "googleapis";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/** Must match column order in app/api/submit-lead/route.ts */
const { headers: BRIEF_HEADERS } = JSON.parse(
  fs.readFileSync(path.join(root, "lib/sheet-columns.json"), "utf8")
);

function loadEnvFile(filename) {
  const filePath = path.join(root, filename);
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;

    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing ${name}. Set it in .env or .env.local`);
    process.exit(1);
  }
  return value;
}

function sheetRange(sheetName, a1) {
  const escaped = String(sheetName).replace(/'/g, "''");
  return `'${escaped}'!${a1}`;
}

function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: requireEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL"),
      private_key: requireEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

async function main() {
  loadEnvFile(".env");
  loadEnvFile(".env.local");

  const spreadsheetId = requireEnv("GOOGLE_SHEET_ID");
  const tabName = process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";
  const sheets = getSheetsClient();

  console.log("Writing brief form headers (one-time setup)...\n");
  console.log(`Spreadsheet: ${spreadsheetId}`);
  console.log(`Tab: ${tabName}\n`);

  const info = await sheets.spreadsheets.get({ spreadsheetId });
  const existingTabs =
    info.data.sheets?.map((s) => s.properties?.title).filter(Boolean) || [];

  if (!existingTabs.includes(tabName)) {
    console.error(
      `Tab "${tabName}" was not found. Available: ${existingTabs.join(", ") || "(none)"}`
    );
    process.exit(1);
  }

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: sheetRange(tabName, "A1"),
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [BRIEF_HEADERS],
    },
  });

  console.log(`Wrote ${BRIEF_HEADERS.length} columns to "${tabName}" row 1:`);
  BRIEF_HEADERS.forEach((header, i) => console.log(`  ${i + 1}. ${header}`));
  console.log("\nDone. Brief form submissions append from row 2 onward.");
}

main().catch((err) => {
  console.error("Failed:", err.message || err);
  process.exit(1);
});
