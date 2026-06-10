import { persecutionTypes } from "./persecution-types";
import { caseTypes } from "./case-types";
import { guides } from "./guides";
import { services } from "./services";

export type NavLink = { label: string; href: string };

export const persecutionTypesNavLinks: NavLink[] = persecutionTypes.map((p) => ({
  label: p.title,
  href: `/persecution-types/${p.slug}`,
}));

export const caseTypesNavLinks: NavLink[] = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
}));

export const servicesNavLinks: NavLink[] = services.map((s) => ({
  label: s.name,
  href: `/services/${s.id}`,
}));

export const guidesNavLinks: NavLink[] = guides.map((g) => ({
  label: g.title,
  href: `/guides/${g.slug}`,
}));

export const resourcesNavLinks: NavLink[] = [
  { label: "Persecution Grounds", href: "/persecution-grounds" },
  { label: "How Reports Work", href: "/how-reports-work" },
  { label: "Solicitor Guides", href: "/guides" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Country Experts", href: "/country-experts" },
  { label: "Glossary", href: "/glossary" },
];

export const mobileNavGroups = [
  {
    title: "Persecution Types",
    links: [{ label: "All Persecution Types", href: "/persecution-types" }, ...persecutionTypesNavLinks],
  },
  {
    title: "Case Types",
    links: [{ label: "All Case Types", href: "/case-types" }, ...caseTypesNavLinks],
  },
  {
    title: "Services",
    links: [{ label: "All Services", href: "/services" }, ...servicesNavLinks],
  },
  {
    title: "Resources",
    links: [
      { label: "Persecution Grounds", href: "/persecution-grounds" },
      { label: "How Reports Work", href: "/how-reports-work" },
      { label: "How to Instruct", href: "/how-to-instruct" },
      { label: "Qualifications", href: "/qualifications" },
      { label: "Country Experts", href: "/country-experts" },
      { label: "Guides", href: "/guides" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
];
