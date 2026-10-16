import { photos, type Photo } from "./photos";

/** Which photograph leads each page, keyed by route path. */
const BY_PATH: Record<string, Photo> = {
  "/persecution-types": photos.borderMinefield,
  "/case-types": photos.supremeCourt,
  "/services": photos.echrStrasbourg,
  "/guides": photos.udhrChildren,
  "/blog": photos.passportStamps,
  "/contact": photos.palaisNations,
  "/country-experts": photos.genevaFlags,
  "/glossary": photos.udhrChildren,
  "/how-reports-work": photos.supremeCourt,
  "/how-to-instruct": photos.homeOffice,
  "/persecution-grounds": photos.palaisNations,
  "/qualifications": photos.echrStrasbourg,
  "/what-is-a-persecution-expert": photos.vigil,
  "/thank-you": photos.genevaFlags,
  "/not-found": photos.passportStamps,

  "/persecution-types/political-opinion-persecution": photos.vigil,
  "/persecution-types/religious-persecution": photos.udhrChildren,
  "/persecution-types/lgbtq-persecution-all-countries": photos.palaisNations,
  "/persecution-types/gender-based-persecution": photos.nzoloCamp,
  "/persecution-types/racial-ethnic-persecution": photos.echrStrasbourg,
  "/persecution-types/particular-social-group": photos.genevaFlags,
  "/persecution-types/non-state-actor-persecution": photos.lesvosBoats,
  "/persecution-types/state-persecution-direct": photos.borderMinefield,

  "/case-types/ftt-asylum-appeal-persecution": photos.supremeCourt,
  "/case-types/upper-tribunal-country-guidance": photos.echrStrasbourg,
  "/case-types/deportation-article-3": photos.homeOffice,
  "/case-types/fresh-claims-persecution": photos.passportStamps,
  "/case-types/lgbtq-asylum-claims": photos.vigil,
  "/case-types/gender-based-violence-claims": photos.nzoloCamp,
  "/case-types/political-persecution-claims": photos.borderMinefield,
  "/case-types/religious-persecution-claims": photos.udhrChildren,

  "/services/political-persecution-analysis": photos.vigil,
  "/services/religious-persecution-reports": photos.udhrChildren,
  "/services/lgbtq-asylum-expert-reports": photos.genevaFlags,
  "/services/gender-based-persecution-analysis": photos.nzoloCamp,
  "/services/psg-identification-analysis": photos.palaisNations,
  "/services/non-state-actor-persecution-reports": photos.lesvosBoats,
  "/services/state-protection-assessment": photos.homeOffice,
  "/services/internal-relocation-analysis": photos.passportStamps,

  "/guides/persecution-grounds-guide": photos.palaisNations,
  "/guides/hj-iran-lgbtq-asylum-guide": photos.supremeCourt,
  "/guides/state-protection-analysis-guide": photos.homeOffice,
  "/guides/internal-relocation-guide": photos.zaatariCamp,
  "/guides/non-state-actor-persecution-guide": photos.nzoloCamp,
  "/guides/expert-report-standards-guide": photos.echrStrasbourg,
};

export const fallbackPhoto: Photo = photos.palaisNations;

export function photoFor(path: string): Photo {
  return BY_PATH[path] ?? fallbackPhoto;
}

/** The photograph for a path when one is assigned, without a fallback. */
export function assignedPhoto(path: string): Photo | undefined {
  return BY_PATH[path];
}
