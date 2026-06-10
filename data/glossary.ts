export type GlossaryTerm = {
  term: string;
  slug: string;
  definition: string;
  link?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Actor of Persecution",
    slug: "actor-of-persecution",
    definition:
      "Any person or entity whose actions constitute persecution, including state agents and non-state actors where the state fails to protect. Defined in Article 6 of the Qualification Directive.",
  },
  {
    term: "Article 15(c) (Subsidiary Protection)",
    slug: "article-15c-subsidiary-protection",
    definition:
      "Protection for persons who do not qualify as refugees but face a real risk of serious harm including indiscriminate violence in situations of international or internal armed conflict.",
  },
  {
    term: "CPIN",
    slug: "cpin",
    definition:
      "Country Policy and Information Note. Home Office documents providing country conditions information used in asylum decision-making. Experts may go beyond CPIN analysis where the specific profile requires it.",
  },
  {
    term: "Country Guidance Case",
    slug: "country-guidance-case",
    definition:
      "An Upper Tribunal decision designated as country guidance, providing authoritative precedent on country conditions and legal analysis for a specific country or issue.",
  },
  {
    term: "Discretion Argument (LGBTQ+)",
    slug: "discretion-argument-lgbtq",
    definition:
      "The rejected argument that LGBTQ+ asylum seekers should live discreetly to avoid persecution. Rejected by HJ (Iran) [2010] UKSC. Tribunals must assess risk on open living.",
  },
  {
    term: "Exclusion Clauses",
    slug: "exclusion-clauses",
    definition:
      "Refugee Convention Article 1F provisions excluding persons who have committed serious crimes, acts contrary to UN purposes, or crimes against peace from refugee protection.",
  },
  {
    term: "HJ (Iran) [2010]",
    slug: "hj-iran-2010",
    definition:
      "Leading UKSC authority on LGBTQ+ asylum. Established that LGBTQ+ individuals cannot be expected to conceal their identity and set the three-part test for LGBTQ+ persecution claims.",
  },
  {
    term: "Humanitarian Protection",
    slug: "humanitarian-protection",
    definition:
      "Leave granted where a person faces a real risk of serious harm but does not qualify for refugee status under the Refugee Convention grounds.",
  },
  {
    term: "IDP (Internally Displaced Person)",
    slug: "idp-internally-displaced-person",
    definition:
      "A person forced to flee their home but who remains within their country of origin. Relevant to internal relocation and country conditions analysis.",
  },
  {
    term: "Immigration Tribunal Practice Direction",
    slug: "immigration-tribunal-practice-direction",
    definition:
      "Tribunal rules governing procedure including paragraph 10 on expert evidence standards, report format, and the duties of expert witnesses in immigration proceedings.",
  },
  {
    term: "Imputed Political Opinion",
    slug: "imputed-political-opinion",
    definition:
      "Political opinion attributed to an individual by a persecutor regardless of whether they hold that opinion. Valid Convention ground established in RT (Zimbabwe) [2012] UKSC.",
  },
  {
    term: "Internal Flight Alternative",
    slug: "internal-flight-alternative",
    definition:
      "Also called internal relocation. The proposition that an asylum seeker could safely and reasonably relocate within their country of origin rather than requiring international protection.",
  },
  {
    term: "Internal Relocation",
    slug: "internal-relocation",
    definition:
      "Analysis of whether an appellant could relocate safely and reasonably within their country of origin. Requires assessment of viability (safety) and reasonableness (not unduly harsh).",
  },
  {
    term: "MOJ (Somalia) [2014]",
    slug: "moj-somalia-2014",
    definition:
      "Leading authority on persecution methodology and state protection analysis in non-state actor cases. Establishes the framework for assessing effective protection.",
  },
  {
    term: "Non-Refoulement",
    slug: "non-refoulement",
    definition:
      "The principle prohibiting return of a person to a country where they face persecution or serious harm. Core to both Refugee Convention and Article 3 ECHR protection.",
  },
  {
    term: "Non-State Actor",
    slug: "non-state-actor",
    definition:
      "A persecutor who is not a state agent, including criminal gangs, family members, community groups, and terrorist organisations. Can ground asylum where state protection fails.",
  },
  {
    term: "Particular Social Group (PSG)",
    slug: "particular-social-group-psg",
    definition:
      "The fifth Refugee Convention ground. A group sharing a protected characteristic that is socially perceived as distinct in the country of origin. Requires both limbs of the test.",
  },
  {
    term: "Persecution Threshold",
    slug: "persecution-threshold",
    definition:
      "The level of seriousness harm must reach to constitute persecution: a serious violation of fundamental human rights. Cumulative harm may reach the threshold even where individual acts do not.",
  },
  {
    term: "Political Opinion (actual/imputed)",
    slug: "political-opinion-actual-imputed",
    definition:
      "A Refugee Convention ground covering persecution for actual political views held or political views imputed by the persecutor. RT (Zimbabwe) [2012] confirmed imputed opinion as valid.",
  },
  {
    term: "Qualification Directive",
    slug: "qualification-directive",
    definition:
      "EU directive defining standards for refugee and subsidiary protection status, as implemented in UK law. Defines acts of persecution, actors of persecution, and protection grounds.",
  },
  {
    term: "Real Risk",
    slug: "real-risk",
    definition:
      "The standard for assessing future risk of persecution or serious harm. Requires a reasonable degree of likelihood, not certainty, that persecution would occur on return.",
  },
  {
    term: "Refugee Convention 1951",
    slug: "refugee-convention-1951",
    definition:
      "The foundational international instrument defining refugee status. Article 1A(2) defines a refugee as someone with a well-founded fear of persecution for Convention reasons.",
  },
  {
    term: "Religion Ground",
    slug: "religion-ground",
    definition:
      "Persecution for reasons of religion including belief, practice, conversion, apostasy, and imputed religious identity. Article 9 of the Qualification Directive defines acts of religious persecution.",
  },
  {
    term: "RT (Zimbabwe) [2012]",
    slug: "rt-zimbabwe",
    definition:
      "UKSC authority establishing imputed political opinion as a valid Convention ground and addressing diaspora political activity as a risk factor on return.",
  },
  {
    term: "Serious Harm",
    slug: "serious-harm",
    definition:
      "Harm reaching the threshold for subsidiary protection under Article 15 of the Qualification Directive, including death penalty, torture, inhuman treatment, and indiscriminate violence.",
  },
  {
    term: "Social Perception Test",
    slug: "social-perception-test",
    definition:
      "The requirement that a claimed PSG is recognised as a distinct group in society, not merely a statistical category. One of two limbs of the PSG test in UK asylum law.",
  },
  {
    term: "State Persecution",
    slug: "state-persecution",
    definition:
      "Persecution carried out by state agents including military, police, intelligence services, and judicial authorities. Direct state targeting of individuals or groups.",
  },
  {
    term: "State Protection",
    slug: "state-protection",
    definition:
      "Analysis of whether the state is willing and able to protect the appellant from persecution. Three-part test: existence, adequacy, and accessibility of protection mechanisms.",
  },
  {
    term: "Subsidiary Protection",
    slug: "subsidiary-protection",
    definition:
      "Protection status for those facing serious harm who do not qualify as refugees. Includes Article 15(c) protection from indiscriminate violence in conflict situations.",
  },
  {
    term: "UNHCR Guidelines",
    slug: "unhcr-guidelines",
    definition:
      "UNHCR guidance documents on refugee status determination including gender-related persecution, LGBTQ+ claims, and internal relocation. Influential in UK tribunal analysis.",
  },
  {
    term: "Well-Founded Fear",
    slug: "well-founded-fear",
    definition:
      "The subjective fear of persecution combined with objective evidence supporting that fear. The standard for refugee status under Article 1A(2) of the Refugee Convention.",
  },
  {
    term: "Convention Nexus",
    slug: "convention-nexus",
    definition:
      "The connection between the feared persecution and a Refugee Convention reason: race, religion, nationality, PSG, or political opinion. Required for refugee status.",
  },
  {
    term: "Cumulative Persecution",
    slug: "cumulative-persecution",
    definition:
      "Where individually insufficient acts of harm cumulatively reach the persecution threshold through a systematic pattern of discrimination or mistreatment.",
  },
  {
    term: "Letter of Instruction",
    slug: "letter-of-instruction",
    definition:
      "The document sent to an expert setting out the case, questions, and documents. Must comply with Immigration Tribunal Practice Direction and the Adam Pipe October 2025 guide.",
  },
  {
    term: "Statement of Truth",
    slug: "statement-of-truth",
    definition:
      "A formal declaration by the expert confirming the report's contents are true to the best of their knowledge. Required in all expert reports for immigration tribunals.",
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
