import type { FAQ } from "@/lib/schema";

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
};

export const guides: Guide[] = [
  {
    slug: "persecution-grounds-guide",
    title: "Persecution Grounds Guide",
    metaTitle: "Persecution Grounds Guide for Solicitors | UK Asylum Law",
    metaDescription:
      "A solicitor's guide to the five Refugee Convention persecution grounds, Convention nexus, and expert evidence requirements for UK asylum appeals.",
    h1: "Persecution Grounds: A Solicitor's Guide",
    content: [
      "The Refugee Convention 1951 defines a refugee as someone with a well-founded fear of persecution for reasons of race, religion, nationality, membership of a particular social group, or political opinion. Each ground requires a distinct analytical approach and expert evidence strategy.",
      "Political opinion persecution encompasses both actual and imputed opinion. RT (Zimbabwe) [2012] confirmed that imputed opinion is valid even where the appellant holds no genuine political views. Religious persecution covers belief, practice, conversion, and imputed religious identity under Article 9 of the Qualification Directive.",
      "Particular social group is the most complex ground, requiring both a shared protected characteristic and social perception in the country of origin. Persecution experts help solicitors identify the correct ground or grounds and instruct appropriately for tribunal proceedings.",
    ],
    faqs: [
      {
        question: "How do I identify the correct persecution ground?",
        answer:
          "Review the appellant's profile, the nature of the feared harm, and the reason for targeting. Multiple grounds may apply. A persecution expert can advise on which Convention ground or grounds best fit the factual matrix before you draft grounds of appeal.",
      },
      {
        question: "Can multiple Convention grounds apply to one claim?",
        answer:
          "Yes. Ethnic persecution may overlap with political opinion where ethnicity is associated with a political cause. Gender-based claims may engage both PSG and religion grounds. Persecution experts assess all applicable grounds and advise on the strongest nexus.",
      },
    ],
  },
  {
    slug: "hj-iran-lgbtq-asylum-guide",
    title: "HJ (Iran) LGBTQ+ Asylum Guide",
    metaTitle: "HJ (Iran) LGBTQ+ Asylum Guide for Solicitors | UK",
    metaDescription:
      "Solicitor guide to HJ (Iran) [2010] LGBTQ+ asylum standard, the three-part test, discretion argument rejection, and instructing persecution experts.",
    h1: "HJ (Iran) LGBTQ+ Asylum: A Solicitor's Guide",
    content: [
      "HJ (Iran) [2010] UKSC is the leading authority on LGBTQ+ asylum claims. The Court rejected the discretion argument: LGBTQ+ individuals cannot be expected to conceal their identity to avoid persecution on return.",
      "The tribunal must apply a three-part test: (i) is the appellant gay or belongs to the relevant LGBTQ+ group?; (ii) would they be open about their sexuality in the UK?; (iii) if they returned and lived openly, would they face a real risk of persecution?",
      "Persecution experts provide country-specific analysis of conditions for openly LGBTQ+ individuals, including criminalisation, state enforcement, societal attitudes, non-state actor risks, and internal relocation feasibility within the HJ (Iran) framework.",
    ],
    faqs: [
      {
        question: "Is the discretion argument still raised in LGBTQ+ cases?",
        answer:
          "Following HJ (Iran) [2010], the discretion argument is rejected in law. However, Home Office decisions may still implicitly expect discretion. Persecution expert reports should explicitly address the HJ (Iran) standard and assess risk on open living, not concealed living.",
      },
      {
        question: "What evidence should I gather for an LGBTQ+ asylum claim?",
        answer:
          "Evidence of sexual orientation or gender identity, openness in the UK, country conditions for LGBTQ+ individuals, and any past targeting. Persecution experts supplement this with independent country conditions analysis focused on the HJ (Iran) framework.",
      },
    ],
  },
  {
    slug: "state-protection-analysis-guide",
    title: "State Protection Analysis Guide",
    metaTitle: "State Protection Analysis Guide for Solicitors | UK Asylum",
    metaDescription:
      "Guide to state protection analysis in UK asylum law. Three-part test, non-state actor framework, and instructing persecution experts for protection assessments.",
    h1: "State Protection Analysis: A Solicitor's Guide",
    content: [
      "State protection analysis is central to both refugee claims and non-state actor persecution. The three-part test asks: does a protection mechanism exist? Is it effective in practice? Can this specific individual access it?",
      "MOJ (Somalia) [2014] and related authority establish that protection must be effective, not merely theoretical. Persecution experts analyse legal frameworks, documented outcomes, and profile-specific accessibility of protection.",
      "Where non-state actors are the persecutors, the state must be unable or unwilling to provide effective protection. Expert reports address both the severity of non-state conduct and the state's response to similar targeting.",
    ],
    faqs: [
      {
        question: "When is state protection analysis most critical?",
        answer:
          "State protection is central to non-state actor claims, domestic violence cases, and any claim where the Home Office argues that effective protection is available. Persecution experts provide the independent analysis tribunals require.",
      },
      {
        question: "What sources do experts use for state protection analysis?",
        answer:
          "CPINs, UNHCR reports, NGO documentation, human rights reports, tribunal decisions, and field research. Experts assess both the existence of legal protection mechanisms and their effectiveness in practice for the specific appellant profile.",
      },
    ],
  },
  {
    slug: "internal-relocation-guide",
    title: "Internal Relocation Guide",
    metaTitle: "Internal Relocation Guide for Solicitors | UK Asylum Law",
    metaDescription:
      "Solicitor guide to internal relocation analysis in UK asylum claims. Reasonableness, viability, and instructing persecution experts for IFA assessments.",
    h1: "Internal Relocation: A Solicitor's Guide",
    content: [
      "Internal relocation (internal flight alternative) analysis asks whether the appellant could relocate safely within their country of origin. The test has two limbs: is relocation viable (safe from persecution) and is it reasonable (not unduly harsh)?",
      "Persecution experts assess whether the appellant's persecutors could locate them in the proposed area, whether the Convention ground-based risk persists nationwide, and whether societal or state persecution would follow relocation.",
      "For LGBTQ+ claims, gender-based violence, and ethnic persecution, internal relocation analysis requires particular care. Persecution experts provide profile-specific assessment rather than generic country-level conclusions.",
    ],
    faqs: [
      {
        question: "When should I instruct an expert on internal relocation?",
        answer:
          "Instruct when the Home Office raises internal relocation as a reason for refusal, or when the viability or reasonableness of relocation is contested. Persecution experts provide profile-specific analysis that generic CPIN summaries may not address.",
      },
      {
        question: "What makes internal relocation unreasonable?",
        answer:
          "Factors include unduly harsh conditions, lack of support networks, inability to earn a living, and continuation of persecution in the proposed area. Persecution experts assess reasonableness in the context of the appellant's specific profile and the Convention ground.",
      },
    ],
  },
  {
    slug: "non-state-actor-persecution-guide",
    title: "Non-State Actor Persecution Guide",
    metaTitle: "Non-State Actor Persecution Guide for Solicitors | UK Asylum",
    metaDescription:
      "Guide to non-state actor persecution in UK asylum law. Convention reason nexus, state protection failures, and expert evidence for tribunal proceedings.",
    h1: "Non-State Actor Persecution: A Solicitor's Guide",
    content: [
      "Non-state actors including criminal gangs, family members, community groups, and terrorist organisations can be actors of persecution where the state fails to protect. Article 6 of the Qualification Directive defines this framework.",
      "Two requirements must be met: the non-state conduct must reach the persecution threshold, and the persecution must be for a Convention reason. Persecution experts analyse both elements and the state's response to similar targeting.",
      "Family and community persecution, honour-based violence, gang targeting, and vigilante violence are common non-state actor scenarios. Expert reports address state protection sufficiency and the Convention nexus.",
    ],
    faqs: [
      {
        question: "Can family members be actors of persecution?",
        answer:
          "Yes, where family-perpetrated harm reaches the persecution threshold and the state is unable or unwilling to protect. This is common in forced marriage, FGM, and honour-based violence claims. Persecution experts assess both the severity of harm and state protection.",
      },
      {
        question: "How is the Convention reason established for non-state actor claims?",
        answer:
          "The persecution must be connected to race, religion, nationality, PSG, or political opinion. Persecution experts analyse whether the non-state targeting is motivated by a Convention reason or whether the state fails to protect for Convention reasons.",
      },
    ],
  },
  {
    slug: "expert-report-standards-guide",
    title: "Expert Report Standards Guide",
    metaTitle: "Expert Report Standards Guide | Immigration Tribunal 2025",
    metaDescription:
      "Guide to Immigration Tribunal expert report standards. Practice Direction paragraph 10, Adam Pipe October 2025 guide, and instructing persecution experts.",
    h1: "Expert Report Standards: A Solicitor's Guide",
    content: [
      "Expert witnesses in immigration proceedings must maintain impartiality. Their primary duty is to the tribunal, not the instructing party. Reports must comply with Immigration Tribunal Practice Direction paragraph 10 (2023).",
      "The Expert Reports in the Immigration Tribunal guide (October 2025) by Adam Pipe of No.8 Chambers brings together relevant material to assist in preparing high-quality expert evidence. It covers report structure, letters of instruction, and standards for written and oral evidence.",
      "A persecution expert report should contain: qualifications and methodology, sources used, country conditions relevant to the profile, persecution risk analysis, internal relocation analysis, the expert's opinion, and a statement of truth.",
    ],
    faqs: [
      {
        question: "What should a letter of instruction include?",
        answer:
          "The letter should set out the proceedings, the questions for the expert, relevant documents, the persecution ground, the appellant's profile, and any specific issues for analysis. The Adam Pipe October 2025 guide provides a template and best practice guidance.",
      },
      {
        question: "Can the expert go beyond the CPIN?",
        answer:
          "Yes. The expert's role is to provide independent analysis that may go beyond the CPIN, particularly where it does not address the specific profile, conditions have changed, or individual facts require analysis the CPIN cannot provide.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
