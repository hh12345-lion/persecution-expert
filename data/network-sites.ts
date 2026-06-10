export type NetworkSite = {
  name: string;
  url: string;
  description: string;
  anchorExamples: string[];
};

export const networkSites: NetworkSite[] = [
  {
    name: "Nigeria Expert",
    url: "https://www.nigeriaexpert.com",
    description:
      "Country-specific expert reports for Nigerian asylum profiles, CPIN analysis, and tribunal evidence for UK immigration proceedings.",
    anchorExamples: ["Nigeria expert reports UK", "Nigeria country expert witness"],
  },
  {
    name: "Pakistan Country Expert",
    url: "https://www.pakistancountryexpert.com",
    description:
      "Pakistan country expert reports for Ahmadis, blasphemy, Shia Muslims, honour-based violence, LGBTQ+, and political persecution claims.",
    anchorExamples: ["Pakistan country expert reports", "Pakistan asylum expert UK"],
  },
  {
    name: "Africa Expert Witness",
    url: "https://www.africaexpertwitness.com",
    description:
      "African country and regional expert witness reports covering asylum, immigration tribunals, and country guidance across the continent.",
    anchorExamples: ["Africa expert witness reports", "African country expert UK"],
  },
  {
    name: "Albania Expert Witness",
    url: "https://www.albaniaexpertwitness.com",
    description:
      "Albania country expert reports for blood feuds, trafficking, LGBTQ+, and political persecution asylum claims in UK tribunals.",
    anchorExamples: ["Albania expert witness reports", "Albania country expert UK"],
  },
];
