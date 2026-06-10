# Nigeria Expert Report

SEO-optimized lead-generation website for [nigeriaexpert.com](https://www.nigeriaexpert.com).

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS v4
- Contact form leads saved to Google Sheets
- GDPR cookie consent with Google Consent Mode v2
- Netlify deployment with `@netlify/plugin-nextjs`

## Development

```bash
npm install
cp .env.example .env.local   # then fill in Google Sheets credentials
npm run dev
```

Test Google Sheets connection:

```bash
node --env-file=.env.local --import tsx scripts/test-sheets.ts
```

## Environment variables

Set in `.env.local` (never commit this file):

| Variable | Purpose |
|----------|---------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email |
| `GOOGLE_PRIVATE_KEY` | RSA private key (keep `\n` escapes in quotes) |
| `GOOGLE_SHEET_ID` | Spreadsheet ID from the URL |
| `GOOGLE_SHEET_TAB_NAME` | Tab name (e.g. `Sheet26`) |
| `Lead_notification_url` | Optional n8n/webhook URL |

Share the spreadsheet with the service account email as **Editor**.

## SEO files

```bash
npm run seo:generate
npm run seo:verify
```

## Netlify deployment

1. Connect repo to Netlify
2. Build command: `npm run build` (set in `netlify.toml`)
3. Add all Google Sheets env vars in Netlify → Site settings → Environment variables
4. Ensure `@netlify/plugin-nextjs` is installed (Netlify auto-installs from `netlify.toml`)

Do not commit `.next/` or `.env.local`.

## Contact form

Submissions POST to `/api/submit-lead` and append a row to Google Sheets with:

Timestamp, Full Name, Law Firm, Email, Phone, Case Profile, Proceedings, Funding, Deadline, Urgency, Brief Case Description, Brand name

Optional webhook notification if `Lead_notification_url` is set.
