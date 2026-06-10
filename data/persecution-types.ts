import type { FAQ } from "@/lib/schema";

export type PersecutionType = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedCaseTypes: string[];
};

export const persecutionTypes: PersecutionType[] = [
  {
    slug: "political-opinion-persecution",
    title: "Political Opinion Persecution",
    metaTitle: "Political Opinion Persecution Expert Witness UK | Asylum Tribunal",
    metaDescription:
      "Independent persecution expert reports on political opinion grounds for UK asylum appeals. Actual and imputed political opinion, RT (Zimbabwe) [2012], diaspora activity, and risk on return.",
    h1: "Political Opinion Persecution Expert Witness UK",
    content: [
      "Political opinion is one of the five Refugee Convention grounds under Article 1A(2). Persecution for political opinion includes both actual political views held by the appellant and imputed political opinion, where a persecutor attributes political views to an individual regardless of whether they genuinely hold them.",
      "RT (Zimbabwe) [2012] UKSC established that imputed political opinion is a valid basis for asylum even where the appellant has no genuine political commitment. This extends to family members of political opponents, individuals whose ethnicity is associated with a political movement, and those targeted because of perceived allegiance. Persecution experts analyse whether the appellant's profile creates an imputed opinion risk on return.",
      "UK-based diaspora political activity, including demonstrations, social media, and political organisation, can create or enhance a risk profile for return to certain countries. Persecution experts assess whether the appellant's UK activities have come to the attention of authorities in their home country and whether state and non-state actors pose a genuine risk. Expert analysis addresses the Convention nexus, actors of persecution, state protection failures, and internal relocation feasibility.",
    ],
    faqs: [
      {
        question: "What is imputed political opinion in asylum claims?",
        answer:
          "Imputed political opinion arises where a persecutor attributes a political opinion to an individual regardless of whether they hold that opinion, for example a family member of a political opponent, or someone whose ethnicity is associated with a political movement. RT (Zimbabwe) [2012] UKSC established that imputed political opinion is a valid basis for asylum even where the appellant has no genuine political commitment. Persecution experts analyse whether the appellant's profile creates an imputed opinion risk.",
      },
      {
        question: "How does diaspora political activity affect risk on return?",
        answer:
          "UK-based diaspora political activity, including demonstrations, social media, and political organisation, can create or enhance a risk profile for return to certain countries. Persecution experts assess whether the appellant's UK activities have come to the attention of authorities in their home country and whether this creates a genuine risk on return.",
      },
    ],
    relatedCaseTypes: ["ftt-asylum-appeal-persecution", "political-persecution-claims", "upper-tribunal-country-guidance"],
  },
  {
    slug: "religious-persecution",
    title: "Religious Persecution",
    metaTitle: "Religious Persecution Expert Witness UK | Asylum Tribunal Reports",
    metaDescription:
      "Persecution expert reports on religious grounds for UK immigration tribunals. Conversion, apostasy, blasphemy accusations, minority religions, and Article 9 Qualification Directive analysis.",
    h1: "Religious Persecution Expert Witness UK",
    content: [
      "Religion is a core Refugee Convention ground. Article 9 of the Qualification Directive (as implemented in UK law) defines acts of persecution for reasons of religion, including interference with religious practice, conversion, apostasy, and imputed religious identity.",
      "Religious persecution claims frequently involve minority religions, conversion from one faith to another, apostasy accusations, and blasphemy charges. Persecution experts assess the authenticity of conversion from a country conditions perspective (not theological judgment), the risk to converts and minority believers in the specific country, and whether the appellant's religious identity is likely to be known or discovered on return.",
      "Blasphemy accusations require analysis of the specific accusation, the legal framework, whether acquittal provides genuine protection, and the risk from non-state actors such as mob violence and vigilante groups irrespective of any court outcome. Expert reports address state enforcement, societal discrimination, and protection failures.",
    ],
    faqs: [
      {
        question: "Does religious conversion create an asylum ground?",
        answer:
          "Yes. Genuine religious conversion that would place the appellant at risk in their country of origin can ground an asylum claim. Persecution experts assess the authenticity of conversion from a country conditions perspective, not theological judgment, the risk to converts in the specific country, and whether the appellant's conversion is likely to be known to or discovered by persecutors on return.",
      },
      {
        question: "How are blasphemy accusations assessed in persecution claims?",
        answer:
          "Blasphemy accusations, particularly from Pakistan, Iran, and other countries with blasphemy laws, require analysis of the specific accusation, the legal framework, whether acquittal provides genuine protection, and the risk from non-state actors such as mob violence and vigilante groups irrespective of any court outcome. Persecution experts provide country-specific and accusation-specific analysis.",
      },
    ],
    relatedCaseTypes: ["religious-persecution-claims", "ftt-asylum-appeal-persecution", "fresh-claims-persecution"],
  },
  {
    slug: "lgbtq-persecution-all-countries",
    title: "LGBTQ+ Persecution",
    metaTitle: "LGBTQ+ Persecution Expert Witness UK | All Countries Asylum",
    metaDescription:
      "LGBTQ+ persecution expert witness reports for UK asylum tribunals. HJ (Iran) [2010] standard, discretion argument rejection, state and non-state persecution across all countries.",
    h1: "LGBTQ+ Persecution Expert Witness UK | All Countries",
    content: [
      "LGBTQ+ persecution claims are governed by the landmark HJ (Iran) [2010] UKSC standard, which rejected the discretion argument. LGBTQ+ asylum seekers cannot be expected to live discreetly to avoid persecution. The tribunal must assess whether the appellant is gay (or belongs to the relevant LGBTQ+ group), whether they would be open about their sexuality in the UK, and whether they would face a real risk of persecution if they returned and lived openly.",
      "Persecution experts specialising in LGBTQ+ asylum provide thematic analysis across multiple jurisdictions, covering criminalisation statutes, state enforcement practices, non-state actor risks, and the availability of internal relocation. This thematic approach differs from country-specific expert witnesses who focus on a single jurisdiction in depth.",
      "Expert analysis addresses the persecution threshold, cumulative discrimination, honour-based violence against LGBTQ+ individuals, state complicity in enforcement of anti-LGBTQ+ laws, and whether internal relocation provides meaningful protection for openly LGBTQ+ individuals.",
    ],
    faqs: [
      {
        question: "What is the HJ (Iran) standard for LGBTQ+ asylum?",
        answer:
          "HJ (Iran) [2010] UKSC established that LGBTQ+ asylum seekers cannot be expected to live discreetly to avoid persecution. The tribunal must assess: (i) is the appellant gay?; (ii) would they be open about their sexuality in the UK?; (iii) if they returned and lived openly, would they face a real risk of persecution? Persecution experts provide country-specific analysis of conditions for openly LGBTQ+ individuals.",
      },
      {
        question: "Can a persecution expert cover LGBTQ+ claims from multiple countries?",
        answer:
          "Yes. Persecution experts specialising in LGBTQ+ asylum provide thematic analysis across multiple jurisdictions, covering the legal framework including criminalisation statutes, state enforcement practices, non-state actor risks, and the availability of internal relocation. For highly specific country conditions, a combined persecution expert and country expert may be needed.",
      },
    ],
    relatedCaseTypes: ["lgbtq-asylum-claims", "ftt-asylum-appeal-persecution", "deportation-article-3"],
  },
  {
    slug: "gender-based-persecution",
    title: "Gender-Based Persecution",
    metaTitle: "Gender-Based Persecution Expert Witness UK | FGM, HBV, Domestic Violence",
    metaDescription:
      "Gender-based persecution expert reports for UK asylum tribunals. Women as PSG, FGM, forced marriage, honour-based violence, domestic violence, and UNHCR gender guidelines.",
    h1: "Gender-Based Persecution Expert Witness UK",
    content: [
      "Gender-based persecution encompasses claims where women and girls face harm because of their gender, including FGM, forced marriage, domestic violence with state protection failures, honour-based violence, and trafficking-related persecution. Women from countries where they face systematic gender-based persecution can constitute a particular social group under the Refugee Convention.",
      "FGM constitutes a serious violation of fundamental rights and a form of persecution under Article 9 of the Qualification Directive. Persecution experts address the prevalence of FGM in the specific community, the state's ability and willingness to protect, whether internal relocation provides meaningful protection, and the risk to daughters as well as the appellant.",
      "UNHCR Guidelines on Gender-Related Persecution provide the analytical framework. Expert reports assess whether the specific claim meets the PSG definition, the Convention nexus, state protection analysis, and internal relocation feasibility for gender-based persecution claims.",
    ],
    faqs: [
      {
        question: "Are women a particular social group for asylum purposes?",
        answer:
          "Women from countries where they face systematic gender-based persecution can constitute a particular social group under the Refugee Convention, where they share an immutable characteristic (gender) and are socially distinguished in their society. Persecution experts analyse whether the specific claim meets the PSG definition in the applicable country context.",
      },
      {
        question: "How does FGM constitute persecution under the Refugee Convention?",
        answer:
          "FGM constitutes a serious violation of fundamental rights, a form of persecution under Article 9 of the Qualification Directive. Persecution experts address the prevalence of FGM in the specific community, the state's ability and willingness to protect, whether internal relocation provides meaningful protection, and the risk to daughters as well as the appellant herself.",
      },
    ],
    relatedCaseTypes: ["gender-based-violence-claims", "ftt-asylum-appeal-persecution", "fresh-claims-persecution"],
  },
  {
    slug: "racial-ethnic-persecution",
    title: "Racial & Ethnic Persecution",
    metaTitle: "Racial & Ethnic Persecution Expert Witness UK | Asylum Tribunal",
    metaDescription:
      "Racial and ethnic persecution expert reports for UK immigration tribunals. Refugee Convention race ground, ethnic minority targeting, inter-ethnic violence, and diaspora community risk.",
    h1: "Racial & Ethnic Persecution Expert Witness UK",
    content: [
      "Race and nationality are Refugee Convention grounds covering ethnic, racial, and national identity persecution. Claims may involve ethnic minority targeting, inter-ethnic violence, nationality-based discrimination, and diaspora ethnic communities at risk on return.",
      "Ethnic persecution frequently overlaps with political persecution where ethnicity is associated with a political cause. Persecution experts assess which ground or grounds apply and whether the Convention nexus is established for the specific claim profile.",
      "Where inter-ethnic violence is sufficiently serious and the state is unwilling or unable to protect the targeted group, it can constitute persecution. Expert analysis addresses the severity and systematicity of violence, the state's response, and whether internal relocation would provide genuine safety from ethnically targeted harm.",
    ],
    faqs: [
      {
        question: "How does ethnic persecution differ from political persecution?",
        answer:
          "Ethnic persecution targets an individual for their ethnic or racial identity, not for political opinions they hold. The two grounds frequently overlap where ethnicity is associated with a political cause. Persecution experts assess which ground or grounds apply and whether the Convention nexus is established for the specific claim profile.",
      },
      {
        question: "Can inter-ethnic violence constitute persecution?",
        answer:
          "Yes, where inter-ethnic violence is sufficiently serious and the state is unwilling or unable to protect the targeted group. The expert analyses the severity and systematicity of the violence, the state's response, and whether internal relocation would provide genuine safety from ethnically targeted harm.",
      },
    ],
    relatedCaseTypes: ["ftt-asylum-appeal-persecution", "upper-tribunal-country-guidance", "deportation-article-3"],
  },
  {
    slug: "particular-social-group",
    title: "Particular Social Group",
    metaTitle: "Particular Social Group (PSG) Expert Witness UK | Asylum Law",
    metaDescription:
      "PSG persecution expert reports for UK asylum tribunals. Social perception test, protected characteristics, trafficking victims, clan membership, and caste-based claims.",
    h1: "Particular Social Group (PSG) Expert Witness UK",
    content: [
      "Particular social group is the fifth Refugee Convention ground and the most analytically complex. UK law requires both a shared protected characteristic (immutable or fundamental to identity) and distinct social perception in the country of origin.",
      "PSG claims encompass women facing gender-based persecution, trafficking victims, clan membership, caste and class-based groups, former military or police personnel, and other socially distinct groups. Persecution experts assess whether the claimed PSG meets both limbs of the test in the specific country context.",
      "The social perception test requires that the group is recognised as a distinct group in society, not merely a statistical category. Expert reports address country-specific social structures, documented targeting of the group, and the Convention nexus between group membership and the feared harm.",
    ],
    faqs: [
      {
        question: "What is a particular social group in UK asylum law?",
        answer:
          "A particular social group is a group sharing a protected characteristic, an immutable characteristic or one fundamental to identity, that is socially perceived as a distinct group in the country of origin. UK law requires both the shared protected characteristic and distinct social perception. Persecution experts assess whether the claimed PSG meets both limbs in the specific country context.",
      },
      {
        question: "Can trafficking victims form a particular social group?",
        answer:
          "Yes. Former victims of trafficking can constitute a PSG in appropriate country contexts where their status is known and creates a risk of re-trafficking or other harm. Persecution experts assess the social perception of trafficking victims in the specific country and the risk they face on return.",
      },
    ],
    relatedCaseTypes: ["ftt-asylum-appeal-persecution", "gender-based-violence-claims", "fresh-claims-persecution"],
  },
  {
    slug: "non-state-actor-persecution",
    title: "Non-State Actor Persecution",
    metaTitle: "Non-State Actor Persecution Expert Witness UK | Asylum Tribunal",
    metaDescription:
      "Non-state actor persecution expert reports for UK asylum appeals. Criminal gangs, family, community violence, state protection sufficiency, and Convention reason nexus.",
    h1: "Non-State Actor Persecution Expert Witness UK",
    content: [
      "Persecution by non-state actors, including criminal gangs, terrorist organisations, family members, and community groups, can ground an asylum claim where the state is unable or unwilling to provide effective protection. Article 6 of the Qualification Directive defines actors of persecution to include non-state actors in these circumstances.",
      "Persecution experts assess both whether the non-state actor's conduct reaches the severity threshold for persecution and whether the state has genuinely failed to protect. MOJ (Somalia) [2014] and related authority establishes the methodology for assessing state protection in non-state actor cases.",
      "For non-state actor persecution to ground an asylum claim, the persecution must be for a Refugee Convention reason. The expert analyses whether the non-state persecution is connected to political opinion, religion, race, nationality, or PSG, either as the reason for persecution or through state failure to protect for Convention reasons.",
    ],
    faqs: [
      {
        question: "Can non-state actors constitute persecutors for asylum purposes?",
        answer:
          "Yes. Under Article 6 of the Qualification Directive, actors of persecution include non-state actors where the state is unable or unwilling to provide effective protection. Persecution experts assess both whether the non-state actor's conduct reaches the severity threshold for persecution and whether the state has genuinely failed to protect.",
      },
      {
        question: "What is the Convention reason requirement for non-state actor claims?",
        answer:
          "For non-state actor persecution to ground an asylum claim, the persecution must be for a Refugee Convention reason, even where the persecutor is non-state. The expert analyses whether the non-state persecution is connected to political opinion, religion, race, nationality, or PSG, either as the reason for persecution or through state failure to protect for Convention reasons.",
      },
    ],
    relatedCaseTypes: ["ftt-asylum-appeal-persecution", "fresh-claims-persecution", "deportation-article-3"],
  },
  {
    slug: "state-persecution-direct",
    title: "State Persecution",
    metaTitle: "State Persecution Expert Witness UK | Direct State Targeting",
    metaDescription:
      "State persecution expert reports for UK immigration tribunals. Military, police, intelligence targeting, judicial persecution, and systemic state discrimination analysis.",
    h1: "State Persecution Expert Witness UK",
    content: [
      "Direct state persecution involves harm by state agents including military, police, intelligence services, and judicial authorities. Claims may involve detention, torture, enforced disappearance, discriminatory prosecution, and systemic targeting of particular groups.",
      "Discrimination becomes persecution when it reaches a threshold of seriousness, sufficiently severe to constitute a serious violation of fundamental human rights. A systematic pattern of discrimination that is cumulative can constitute persecution even where individual acts fall short.",
      "Where a state officially denies targeting particular groups while persecution occurs in practice, persecution experts analyse the gap between official position and documented reality, drawing on human rights reports, tribunal decisions, and field research to establish the true pattern of state conduct.",
    ],
    faqs: [
      {
        question: "When does state discrimination constitute persecution?",
        answer:
          "Discrimination becomes persecution when it reaches a threshold of seriousness, sufficiently severe to constitute a serious violation of fundamental human rights. A systematic pattern of discrimination that is cumulative can constitute persecution even where individual acts fall short. Persecution experts assess the severity and systematicity of state discrimination for the specific appellant profile.",
      },
      {
        question: "How is state persecution assessed where the government officially denies targeting?",
        answer:
          "Where a state officially denies targeting particular groups while persecution occurs in practice, the expert analyses the gap between official position and documented reality, drawing on human rights reports, tribunal decisions, and field research to establish the true pattern of state conduct.",
      },
    ],
    relatedCaseTypes: ["political-persecution-claims", "upper-tribunal-country-guidance", "deportation-article-3"],
  },
];

export function getPersecutionType(slug: string): PersecutionType | undefined {
  return persecutionTypes.find((p) => p.slug === slug);
}
