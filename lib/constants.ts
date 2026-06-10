export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.persecutionexpert.com";
export const SITE_NAME = "Persecution Expert";
export const SITE_EMAIL = "info@persecutionexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/persecutionexpert";

export const COLORS = {
  primary: "#1A3A5C",
  accent: "#C8922A",
  background: "#FFFFFF",
  sectionAlt: "#F5F8FC",
  border: "#D0DCE8",
  heading: "#1A3A5C",
  body: "#374151",
} as const;
