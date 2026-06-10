import type { FAQ } from "@/lib/schema";

export type Service = {
  id: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    id: "political-persecution-analysis",
    name: "Political Persecution Analysis",
    description:
      "Independent expert analysis of political opinion persecution claims, including actual and imputed opinion, diaspora activity risk, and RT (Zimbabwe) [2012] methodology for UK tribunals.",
    metaTitle: "Political Persecution Analysis Expert Witness UK | Asylum Tribunals",
    metaDescription:
      "Political persecution analysis expert reports for UK immigration tribunals. Actual and imputed political opinion, diaspora activity, and RT (Zimbabwe) [2012] methodology.",
    h1: "Political Persecution Analysis Expert Witness UK",
    content: [
      "Political persecution analysis examines whether an appellant faces a well-founded fear of persecution for reasons of political opinion under the Refugee Convention. This includes both actual political views and imputed political opinion, where a persecutor attributes political views regardless of whether the appellant holds them.",
      "RT (Zimbabwe) [2012] UKSC established that imputed political opinion is a valid Convention ground. Persecution experts assess diaspora political activity in the UK, family associations with political opponents, and whether these create a genuine risk on return from state and non-state actors.",
      "Expert reports address the Convention nexus, persecution threshold, state protection failures, and internal relocation feasibility for political persecution claims in FTT and Upper Tribunal proceedings.",
    ],
    faqs: [
      {
        question: "When should I instruct a political persecution expert?",
        answer:
          "Instruct when the claim turns on actual or imputed political opinion, diaspora activity risk, or whether the appellant's profile creates a political opinion nexus. Early instruction allows 2 to 3 weeks for a standard report.",
      },
      {
        question: "How does RT (Zimbabwe) [2012] apply to current claims?",
        answer:
          "RT (Zimbabwe) [2012] confirmed imputed political opinion as a valid Convention ground. Experts apply this authority to assess whether the appellant's profile, including UK political activity, creates an imputed opinion risk on return.",
      },
    ],
  },
  {
    id: "religious-persecution-reports",
    name: "Religious Persecution Reports",
    description:
      "Expert reports on religious persecution grounds including conversion, apostasy, blasphemy accusations, and minority religion targeting under Article 9 of the Qualification Directive.",
    metaTitle: "Religious Persecution Expert Reports UK | Asylum Tribunal Evidence",
    metaDescription:
      "Religious persecution expert reports for UK asylum tribunals. Conversion, apostasy, blasphemy accusations, and minority religion analysis under Article 9 of the Qualification Directive.",
    h1: "Religious Persecution Expert Reports UK",
    content: [
      "Religious persecution reports analyse whether an appellant faces persecution for reasons of religion under the Refugee Convention and Article 9 of the Qualification Directive. Claims encompass minority religion targeting, conversion, apostasy, blasphemy accusations, and interference with religious practice.",
      "Persecution experts assess the risk to converts and minority believers from a country conditions perspective, whether religious identity would be discovered on return, and state and non-state actor responses including mob violence irrespective of court outcomes.",
      "Reports comply with Immigration Tribunal Practice Direction paragraph 10 and provide independent analysis that may go beyond CPIN summaries where the specific religious profile requires it.",
    ],
    faqs: [
      {
        question: "Does religious conversion support an asylum claim?",
        answer:
          "Yes, where genuine conversion would place the appellant at risk in their country of origin. Experts assess authenticity from a country conditions perspective, not theological judgment, and the likelihood of discovery on return.",
      },
      {
        question: "How are blasphemy accusations analysed in expert reports?",
        answer:
          "Experts analyse the specific accusation, legal framework, whether acquittal provides genuine protection, and non-state actor risks including mob violence irrespective of any court outcome.",
      },
    ],
  },
  {
    id: "lgbtq-asylum-expert-reports",
    name: "LGBTQ+ Asylum Expert Reports",
    description:
      "Thematic LGBTQ+ persecution analysis applying the HJ (Iran) [2010] standard across all countries, including criminalisation, enforcement, and internal relocation assessment.",
    metaTitle: "LGBTQ+ Asylum Expert Reports UK | HJ (Iran) Persecution Analysis",
    metaDescription:
      "LGBTQ+ asylum expert reports applying HJ (Iran) [2010] across all countries. Criminalisation, enforcement, non-state actor risks, and internal relocation for UK tribunals.",
    h1: "LGBTQ+ Asylum Expert Reports UK",
    content: [
      "LGBTQ+ asylum expert reports apply the HJ (Iran) [2010] UKSC standard, which rejected the discretion argument. LGBTQ+ individuals cannot be expected to live discreetly to avoid persecution. Experts assess risk on open living, not concealed living.",
      "Reports cover criminalisation statutes, state enforcement practices, societal attitudes, non-state actor risks, and internal relocation feasibility for openly LGBTQ+ individuals across multiple jurisdictions.",
      "Persecution experts provide thematic analysis complementing country-specific evidence where granular country conditions are also required for the tribunal.",
    ],
    faqs: [
      {
        question: "What is the HJ (Iran) three-part test?",
        answer:
          "The tribunal must assess: (i) is the appellant gay or belongs to the relevant LGBTQ+ group?; (ii) would they be open about their sexuality in the UK?; (iii) if they returned and lived openly, would they face a real risk of persecution?",
      },
      {
        question: "Can one expert cover LGBTQ+ claims from multiple countries?",
        answer:
          "Yes. Persecution experts provide thematic LGBTQ+ analysis across jurisdictions. For highly specific country conditions, a combined persecution and country expert approach may be needed.",
      },
    ],
  },
  {
    id: "gender-based-persecution-analysis",
    name: "Gender-Based Persecution Analysis",
    description:
      "Expert reports on FGM, forced marriage, honour-based violence, domestic violence, and women as PSG claims under UNHCR gender persecution guidelines.",
    metaTitle: "Gender-Based Persecution Expert Reports UK | FGM, HBV, PSG Analysis",
    metaDescription:
      "Gender-based persecution expert reports for UK asylum tribunals. FGM, forced marriage, honour-based violence, domestic violence, and women as PSG under UNHCR guidelines.",
    h1: "Gender-Based Persecution Analysis Expert Witness UK",
    content: [
      "Gender-based persecution analysis covers FGM, forced marriage, honour-based violence, domestic violence with state protection failures, and women as a particular social group under the Refugee Convention and UNHCR gender persecution guidelines.",
      "Experts assess whether the specific claim meets the PSG definition, the Convention nexus, state protection using the three-part test, and internal relocation feasibility from family and community persecutors.",
      "FGM constitutes a serious violation of fundamental rights under Article 9 of the Qualification Directive. Reports address prevalence, state protection, and risk to daughters as well as the appellant.",
    ],
    faqs: [
      {
        question: "Are women a particular social group for asylum purposes?",
        answer:
          "Women from countries where they face systematic gender-based persecution can constitute a PSG where they share an immutable characteristic and are socially distinguished. Experts assess both limbs in the specific country context.",
      },
      {
        question: "How does FGM constitute persecution?",
        answer:
          "FGM is a serious violation of fundamental rights under Article 9 of the Qualification Directive. Experts address prevalence in the community, state protection, internal relocation, and risk to daughters.",
      },
    ],
  },
  {
    id: "psg-identification-analysis",
    name: "PSG Identification and Analysis",
    description:
      "Particular social group definition and social perception analysis for complex PSG claims including trafficking victims, clan membership, and class-based persecution.",
    metaTitle: "PSG Identification & Analysis Expert Witness UK | Asylum Law",
    metaDescription:
      "Particular social group identification and analysis for UK asylum tribunals. Social perception test, trafficking victims, clan membership, and complex PSG claims.",
    h1: "PSG Identification and Analysis Expert Witness UK",
    content: [
      "Particular social group is the most analytically complex Refugee Convention ground. UK law requires both a shared protected characteristic and distinct social perception in the country of origin.",
      "PSG identification reports assess whether the claimed group meets both limbs of the test, covering women facing gender-based persecution, trafficking victims, clan membership, caste and class-based groups, and other socially distinct categories.",
      "Experts analyse country-specific social structures, documented targeting of the group, and the Convention nexus between group membership and the feared harm.",
    ],
    faqs: [
      {
        question: "What is the social perception test for PSG?",
        answer:
          "The group must be recognised as distinct in society, not merely a statistical category. Experts assess whether the claimed PSG meets both the protected characteristic and social perception limbs in the country of origin.",
      },
      {
        question: "Can trafficking victims form a particular social group?",
        answer:
          "Yes, in appropriate country contexts where their status is known and creates a risk of re-trafficking or other harm. Experts assess social perception and risk on return.",
      },
    ],
  },
  {
    id: "non-state-actor-persecution-reports",
    name: "Non-State Actor Persecution Reports",
    description:
      "Analysis of persecution by criminal gangs, family, community groups, and terrorist organisations with state protection sufficiency assessment.",
    metaTitle: "Non-State Actor Persecution Expert Reports UK | Asylum Tribunals",
    metaDescription:
      "Non-state actor persecution expert reports for UK asylum appeals. Criminal gangs, family, community violence, state protection failures, and Convention reason nexus.",
    h1: "Non-State Actor Persecution Expert Reports UK",
    content: [
      "Non-state actor persecution reports analyse harm by criminal gangs, terrorist organisations, family members, and community groups where the state is unable or unwilling to provide effective protection under Article 6 of the Qualification Directive.",
      "Experts assess both whether non-state conduct reaches the persecution threshold and whether the persecution is for a Refugee Convention reason. MOJ (Somalia) [2014] methodology applies to state protection analysis.",
      "Reports address profile-specific risk, documented targeting patterns, and whether state protection mechanisms exist, are adequate, and are accessible to the appellant.",
    ],
    faqs: [
      {
        question: "Can non-state actors constitute persecutors?",
        answer:
          "Yes, where the state is unable or unwilling to provide effective protection. Experts assess severity of harm and genuine state protection failures for the specific appellant profile.",
      },
      {
        question: "What is the Convention reason requirement?",
        answer:
          "Non-state persecution must be connected to race, religion, nationality, PSG, or political opinion. Experts analyse whether the targeting engages a Convention ground.",
      },
    ],
  },
  {
    id: "state-protection-assessment",
    name: "State Protection Assessment",
    description:
      "Three-part state protection analysis: existence, adequacy, and accessibility of protection mechanisms for the specific appellant profile and location.",
    metaTitle: "State Protection Assessment Expert Witness UK | Asylum Law",
    metaDescription:
      "State protection assessment expert reports for UK immigration tribunals. Three-part test: existence, adequacy, and accessibility of protection for the specific appellant profile.",
    h1: "State Protection Assessment Expert Witness UK",
    content: [
      "State protection assessment is central to refugee claims and non-state actor persecution. The three-part test examines whether a protection mechanism exists, whether it is effective in practice, and whether the specific appellant can access it.",
      "Persecution experts analyse legal frameworks, documented outcomes, field research, and profile-specific accessibility. Protection must be effective, not merely theoretical.",
      "Reports draw on CPINs, UNHCR reports, NGO documentation, human rights reports, and tribunal decisions to provide independent analysis for FTT and Upper Tribunal proceedings.",
    ],
    faqs: [
      {
        question: "When is state protection analysis most critical?",
        answer:
          "State protection is central to non-state actor claims, domestic violence cases, and any claim where the Home Office argues effective protection is available. Experts provide the independent analysis tribunals require.",
      },
      {
        question: "What sources do experts use for state protection analysis?",
        answer:
          "CPINs, UNHCR reports, NGO documentation, human rights reports, tribunal decisions, and field research. Experts assess both legal mechanisms and their effectiveness in practice.",
      },
    ],
  },
  {
    id: "internal-relocation-analysis",
    name: "Internal Relocation Analysis",
    description:
      "Assessment of whether internal relocation within the country of origin provides a viable and reasonable alternative to international protection.",
    metaTitle: "Internal Relocation Analysis Expert Witness UK | Asylum IFA",
    metaDescription:
      "Internal relocation expert reports for UK asylum tribunals. Viability and reasonableness analysis for internal flight alternatives across all persecution grounds.",
    h1: "Internal Relocation Analysis Expert Witness UK",
    content: [
      "Internal relocation analysis asks whether the appellant could safely and reasonably relocate within their country of origin. The test has two limbs: viability (no real risk of persecution in the proposed area) and reasonableness (not unduly harsh).",
      "Persecution experts provide profile-specific analysis rather than generic country-level conclusions. For LGBTQ+ claims, gender-based violence, and ethnic persecution, relocation analysis requires particular care.",
      "Reports assess whether persecutors could locate the appellant, whether Convention-based risk persists nationwide, and whether societal persecution would follow relocation.",
    ],
    faqs: [
      {
        question: "When should I instruct an expert on internal relocation?",
        answer:
          "Instruct when the Home Office raises internal relocation as a reason for refusal, or when viability or reasonableness is contested. Experts provide profile-specific analysis beyond generic CPIN summaries.",
      },
      {
        question: "What makes internal relocation unreasonable?",
        answer:
          "Unduly harsh conditions, lack of support networks, inability to earn a living, and continuation of persecution in the proposed area. Experts assess reasonableness for the specific appellant profile.",
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
