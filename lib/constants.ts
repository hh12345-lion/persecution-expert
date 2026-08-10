export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.persecutionexpert.com";
export const SITE_NAME = "Persecution Expert";
export const SITE_EMAIL = "cases@persecutionexpert.com";

/** Shared copy: UK-only service scope (informational, not a banner). */
export const SITE_UK_SCOPE =
  "Persecution Expert is a United Kingdom service. We connect immigration solicitors, barristers, and Legal Aid practitioners with persecution expert witnesses for First-tier Tribunal and Upper Tribunal proceedings in England, Wales, Scotland, and Northern Ireland. Our content addresses UK asylum law, Home Office decision-making, and Immigration Tribunal practice. We do not provide expert witness matching for courts, tribunals, or immigration systems outside the UK.";
export const LINKEDIN_URL = "https://www.linkedin.com/company/persecutionexpert";

export const COLORS = {
  primary: "#0c1218",
  accent: "#d66a3a",
  background: "#f5f7f9",
  sectionAlt: "#e4e9ef",
  border: "#b7c3cf",
  heading: "#0c1218",
  body: "#3a4550",
} as const;
