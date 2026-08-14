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
  primary: "#2c261f",
  accent: "#7c2430",
  background: "#f6efe0",
  sectionAlt: "#e8dcc4",
  border: "#c9bba4",
  heading: "#2c261f",
  body: "#5c5348",
} as const;
