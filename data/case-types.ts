import type { FAQ } from "@/lib/schema";

export type CaseType = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedPersecutionTypes: string[];
};

export const caseTypes: CaseType[] = [
  {
    slug: "ftt-asylum-appeal-persecution",
    title: "FTT Asylum Appeal",
    metaTitle: "Persecution Expert Report for FTT Asylum Appeals | First-tier Tribunal UK",
    metaDescription:
      "Persecution expert witness reports for First-tier Tribunal asylum appeals. Convention grounds analysis, state protection, non-state actors, and internal relocation for UK immigration proceedings.",
    h1: "Persecution Expert Report for First-tier Tribunal Asylum Appeals",
    content: [
      "First-tier Tribunal (Immigration and Asylum Chamber) appeals are the primary forum for challenging Home Office refusals of asylum claims. Persecution expert reports provide independent analysis of the Convention grounds, actors of persecution, state protection failures, and internal relocation that tribunals require to assess risk on return.",
      "Unlike country-specific expert witnesses who focus on conditions in a single jurisdiction, persecution experts provide the overarching legal and analytical framework applicable across all countries. Reports address whether the appellant faces persecution for a Refugee Convention reason, whether state protection is available, and whether internal relocation provides a viable alternative.",
      "Reports must comply with Immigration Tribunal Practice Direction paragraph 10 (2023) and the Expert Reports in the Immigration Tribunal guide (October 2025) by Adam Pipe. Early instruction allows 2 to 3 weeks for a standard report.",
    ],
    faqs: [
      {
        question: "When should I instruct a persecution expert for an FTT appeal?",
        answer:
          "Instruct as soon as the appeal is lodged and the persecution ground is identified. Allow 2 to 3 weeks for a standard report. Persecution experts should be instructed where the claim turns on Convention ground analysis, state protection, or non-state actor persecution rather than purely country-specific conditions.",
      },
      {
        question: "What should a persecution expert report for the FTT contain?",
        answer:
          "Reports should address the specific persecution ground, actors of persecution, state protection analysis using the three-part test, internal relocation feasibility, and the expert's reasoned opinion on risk on return. Sources should include CPINs, UNHCR reports, NGO reports, tribunal decisions, and field research.",
      },
    ],
    relatedPersecutionTypes: ["political-opinion-persecution", "non-state-actor-persecution", "particular-social-group"],
  },
  {
    slug: "upper-tribunal-country-guidance",
    title: "Upper Tribunal Country Guidance",
    metaTitle: "Persecution Expert for Upper Tribunal Country Guidance | UK",
    metaDescription:
      "Persecution expert witness evidence for Upper Tribunal country guidance cases. Persecution methodology, state protection framework, and oral evidence for UK immigration proceedings.",
    h1: "Persecution Expert for Upper Tribunal Country Guidance Cases",
    content: [
      "Upper Tribunal country guidance cases establish authoritative precedent on persecution analysis methodology, state protection standards, and Convention ground application. Persecution experts provide the analytical framework that country guidance decisions require.",
      "Expert evidence in Upper Tribunal work must meet the highest evidential standards. Reports address persecution threshold analysis, cumulative persecution, non-state actor frameworks, and the application of leading authority including HJ (Iran) [2010], RT (Zimbabwe) [2012], and MOJ (Somalia) [2014].",
      "Oral evidence is frequently directed in country guidance cases. Persecution experts experienced in tribunal attendance can give evidence on persecution methodology, state protection analysis, and the application of Convention grounds under cross-examination.",
    ],
    faqs: [
      {
        question: "When is a persecution expert needed in country guidance cases?",
        answer:
          "Persecution experts are instructed where the country guidance case turns on persecution methodology, state protection standards, or Convention ground application rather than purely factual country conditions. They provide the legal and analytical framework that supplements country-specific expert evidence.",
      },
      {
        question: "Is oral evidence common in Upper Tribunal persecution cases?",
        answer:
          "Yes. Oral evidence is frequently directed in country guidance cases and complex persecution analysis appeals. Experts should be prepared to give evidence on persecution methodology, state protection analysis, and Convention ground application under cross-examination.",
      },
    ],
    relatedPersecutionTypes: ["state-persecution-direct", "non-state-actor-persecution", "particular-social-group"],
  },
  {
    slug: "deportation-article-3",
    title: "Deportation & Article 3",
    metaTitle: "Persecution Expert for Deportation & Article 3 Claims | UK",
    metaDescription:
      "Persecution expert reports for deportation proceedings and Article 3 ECHR claims. Real risk of persecution, serious harm analysis, and non-refoulement for UK immigration tribunals.",
    h1: "Persecution Expert for Deportation and Article 3 Claims",
    content: [
      "Deportation proceedings and Article 3 ECHR claims require analysis of whether removal would expose the individual to a real risk of persecution or serious harm. Persecution experts assess the Convention grounds, persecution threshold, and cumulative harm that may engage Article 3.",
      "Article 3 claims may arise where the appellant does not qualify for refugee status but faces a real risk of torture, inhuman or degrading treatment, or persecution on return. Expert analysis addresses both Refugee Convention grounds and the broader serious harm framework under Article 15(c) of the Qualification Directive.",
      "Reports for deportation cases must address the specific profile of the appellant, documented targeting, state protection availability, and whether internal relocation provides a viable alternative to removal.",
    ],
    faqs: [
      {
        question: "Can a persecution expert report support an Article 3 claim?",
        answer:
          "Yes. Persecution experts assess whether removal would expose the appellant to a real risk of persecution or serious harm. Reports address Convention grounds, the persecution threshold, cumulative harm, and state protection failures that may engage Article 3 ECHR.",
      },
      {
        question: "What is the difference between refugee status and Article 3 protection?",
        answer:
          "Refugee status requires a well-founded fear of persecution for a Convention reason. Article 3 ECHR prohibits removal to a country where there is a real risk of torture or inhuman or degrading treatment regardless of the reason. Persecution experts may address both frameworks in deportation proceedings.",
      },
    ],
    relatedPersecutionTypes: ["state-persecution-direct", "lgbtq-persecution-all-countries", "gender-based-persecution"],
  },
  {
    slug: "fresh-claims-persecution",
    title: "Fresh Claims",
    metaTitle: "Persecution Expert for Fresh Claims | UK Asylum Law",
    metaDescription:
      "Persecution expert reports for fresh asylum claims. New evidence of persecution risk, changed country conditions, and further submissions for UK immigration proceedings.",
    h1: "Persecution Expert for Fresh Claims and Further Submissions",
    content: [
      "Fresh claims arise where new evidence or changed circumstances create a realistic prospect of success that was not previously considered. Persecution experts assess whether new information changes the persecution risk analysis for the appellant's specific profile.",
      "Changed country conditions, new targeting of the appellant's group, or newly documented state protection failures may support a fresh claim. Expert reports must clearly identify what has changed since the previous decision and how this affects the persecution analysis.",
      "Persecution experts can provide updated analysis where the original decision did not adequately address Convention grounds, state protection, or non-state actor persecution, or where subsequent events have altered the risk profile.",
    ],
    faqs: [
      {
        question: "When is expert evidence needed for a fresh claim?",
        answer:
          "Expert evidence supports fresh claims where new country conditions, changed targeting of the appellant's group, or newly available information alters the persecution risk analysis. The expert must clearly identify what has changed and how it affects the Convention ground and state protection analysis.",
      },
      {
        question: "Can a persecution expert challenge a previous tribunal finding?",
        answer:
          "A persecution expert provides independent analysis based on current evidence. Where a previous decision failed to apply persecution methodology correctly or relied on outdated country conditions, updated expert evidence can support a fresh claim or further submission.",
      },
    ],
    relatedPersecutionTypes: ["non-state-actor-persecution", "religious-persecution", "particular-social-group"],
  },
  {
    slug: "lgbtq-asylum-claims",
    title: "LGBTQ+ Asylum Claims",
    metaTitle: "LGBTQ+ Asylum Expert Witness UK | HJ (Iran) Persecution Reports",
    metaDescription:
      "LGBTQ+ persecution expert reports for UK asylum tribunals. HJ (Iran) [2010] standard, discretion argument, criminalisation, and risk on return for openly LGBTQ+ individuals.",
    h1: "LGBTQ+ Asylum Claims: Persecution Expert Reports",
    content: [
      "LGBTQ+ asylum claims are governed by HJ (Iran) [2010] UKSC, which established that LGBTQ+ individuals cannot be expected to conceal their identity to avoid persecution. Persecution experts apply this standard across all countries, assessing criminalisation, enforcement, societal attitudes, and non-state actor risks.",
      "Expert reports address the three-part HJ (Iran) test: the appellant's sexual orientation or gender identity, their likely openness in the UK, and the risk they would face if they returned and lived openly. Country-specific conditions are analysed within this persecution framework.",
      "Internal relocation analysis for LGBTQ+ claims requires assessment of whether relocation within the country of origin would provide meaningful protection for an openly LGBTQ+ individual, considering both state and societal persecution.",
    ],
    faqs: [
      {
        question: "Does a persecution expert or country expert handle LGBTQ+ claims?",
        answer:
          "Persecution experts provide the HJ (Iran) framework and thematic LGBTQ+ persecution analysis across countries. Country experts provide granular conditions in a specific jurisdiction. Many LGBTQ+ claims benefit from a persecution expert report, sometimes supplemented by country-specific evidence.",
      },
      {
        question: "How is the discretion argument addressed in expert reports?",
        answer:
          "Following HJ (Iran) [2010], the discretion argument is rejected. Persecution experts do not assess whether the appellant could live discreetly. Instead, they assess the risk the appellant would face if they returned and lived openly as an LGBTQ+ person.",
      },
    ],
    relatedPersecutionTypes: ["lgbtq-persecution-all-countries", "particular-social-group", "non-state-actor-persecution"],
  },
  {
    slug: "gender-based-violence-claims",
    title: "Gender-Based Violence Claims",
    metaTitle: "Gender-Based Violence Expert Witness UK | Asylum Persecution Reports",
    metaDescription:
      "Gender-based persecution expert reports for UK asylum claims. FGM, forced marriage, domestic violence, honour-based violence, and women as PSG analysis.",
    h1: "Gender-Based Violence Claims: Persecution Expert Reports",
    content: [
      "Gender-based violence claims encompass FGM, forced marriage, domestic violence with state protection failures, honour-based violence, and trafficking-related persecution. Persecution experts apply UNHCR gender guidelines and the PSG framework to assess these claims.",
      "Women facing systematic gender-based persecution may constitute a particular social group. Expert reports assess whether the specific claim meets the PSG definition, the Convention nexus, and whether state protection is available for gender-based harm.",
      "FGM, forced marriage, and honour-based violence claims require analysis of community practices, state enforcement of protective legislation, and whether internal relocation provides meaningful protection from family and community persecutors.",
    ],
    faqs: [
      {
        question: "How do persecution experts assess domestic violence claims?",
        answer:
          "Persecution experts assess whether domestic violence reaches the persecution threshold, whether the state is willing and able to protect, and whether the violence is connected to a Convention reason such as gender-based PSG. State protection failures in domestic violence cases are analysed using the three-part test.",
      },
      {
        question: "Can honour-based violence support an asylum claim?",
        answer:
          "Yes, where honour-based violence is sufficiently serious and connected to a Convention reason, typically gender-based PSG. Persecution experts assess the prevalence of HBV in the specific community, state protection, and the risk to the appellant on return.",
      },
    ],
    relatedPersecutionTypes: ["gender-based-persecution", "particular-social-group", "non-state-actor-persecution"],
  },
  {
    slug: "political-persecution-claims",
    title: "Political Persecution Claims",
    metaTitle: "Political Persecution Expert Witness UK | Asylum Tribunal Reports",
    metaDescription:
      "Political persecution expert reports for UK asylum appeals. Actual and imputed political opinion, RT (Zimbabwe) [2012], diaspora activity, and risk on return analysis.",
    h1: "Political Persecution Claims: Expert Witness Reports",
    content: [
      "Political persecution claims require analysis of both actual and imputed political opinion under the Refugee Convention. RT (Zimbabwe) [2012] UKSC confirmed that imputed opinion is a valid ground even where the appellant holds no genuine political views.",
      "Persecution experts assess the appellant's political profile, diaspora activity in the UK, associations with political movements, and whether these create a risk on return. State and non-state actors may both pose political persecution risks.",
      "Expert reports address the Convention nexus, whether the feared harm reaches the persecution threshold, state protection for those perceived as holding opposing political views, and internal relocation feasibility.",
    ],
    faqs: [
      {
        question: "What evidence supports an imputed political opinion claim?",
        answer:
          "Evidence includes family connections to political opponents, ethnic association with political movements, past targeting despite denial of political activity, and diaspora political engagement visible to home country authorities. Persecution experts assess the overall profile and documented targeting patterns.",
      },
      {
        question: "How does RT (Zimbabwe) [2012] apply to current claims?",
        answer:
          "RT (Zimbabwe) [2012] established that imputed political opinion is a valid Convention ground. Persecution experts apply this authority to assess whether the appellant's profile creates an imputed opinion risk, including through diaspora political activity and family associations.",
      },
    ],
    relatedPersecutionTypes: ["political-opinion-persecution", "state-persecution-direct", "non-state-actor-persecution"],
  },
  {
    slug: "religious-persecution-claims",
    title: "Religious Persecution Claims",
    metaTitle: "Religious Persecution Expert Witness UK | Asylum Tribunal Evidence",
    metaDescription:
      "Religious persecution expert reports for UK asylum claims. Conversion, apostasy, blasphemy, minority religions, and Article 9 Qualification Directive analysis.",
    h1: "Religious Persecution Claims: Expert Witness Reports",
    content: [
      "Religious persecution claims encompass minority religion targeting, conversion and apostasy, blasphemy accusations, and interference with religious practice. Persecution experts assess the Convention religion ground using Article 9 of the Qualification Directive.",
      "Conversion claims require analysis of the risk to converts in the specific country, whether conversion would be discovered on return, and state and non-state actor responses to religious deviation. Experts assess authenticity from a country conditions perspective, not theological judgment.",
      "Blasphemy accusations require analysis of the legal framework, whether acquittal provides genuine protection, and non-state actor risks including mob violence irrespective of court outcomes.",
    ],
    faqs: [
      {
        question: "How do experts assess religious conversion claims?",
        answer:
          "Persecution experts assess whether genuine conversion would place the appellant at risk, whether conversion would be known or discovered on return, and the treatment of converts in the specific country. This is a country conditions analysis, not a theological assessment of sincerity.",
      },
      {
        question: "What role does Article 9 of the Qualification Directive play?",
        answer:
          "Article 9 defines acts of persecution for reasons of religion, including serious interference with religious practice, conversion, apostasy, and imputed religious identity. Persecution experts apply this framework to assess whether the feared harm constitutes persecution.",
      },
    ],
    relatedPersecutionTypes: ["religious-persecution", "non-state-actor-persecution", "particular-social-group"],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return caseTypes.find((c) => c.slug === slug);
}
