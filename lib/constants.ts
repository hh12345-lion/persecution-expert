export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://persecutionexpert.com";
export const SITE_NAME = "Persecution Expert";
export const SITE_EMAIL = "cases@persecutionexpert.com";

/** Shared copy: UK-only service scope (informational, not a banner). */
export const SITE_UK_SCOPE =
  "Persecution Expert is a United Kingdom service. We connect immigration solicitors, barristers, and Legal Aid practitioners with persecution expert witnesses for First-tier Tribunal and Upper Tribunal proceedings in England, Wales, Scotland, and Northern Ireland. Our content addresses UK asylum law, Home Office decision-making, and Immigration Tribunal practice. We do not provide expert witness matching for courts, tribunals, or immigration systems outside the UK.";
export const LINKEDIN_URL = "https://www.linkedin.com/company/persecutionexpert";

export const COLORS = {
  primary: "#3c3438",
  accent: "#5f1b27",
  background: "#f8f7f7",
  sectionAlt: "#efeced",
  border: "#d7d1d3",
  heading: "#3c3438",
  body: "#4a4246",
} as const;
