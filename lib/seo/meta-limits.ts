/** Ahrefs / Google SERP display limits */
export const MAX_TITLE_LENGTH = 60;
export const MAX_DESCRIPTION_LENGTH = 160;

export function normalizeSeoTitle(title: string): string {
  const stripped = title.replace(/\s*\|\s*Persecution Expert\s*$/i, "").trim();
  if (stripped.length <= MAX_TITLE_LENGTH) return stripped;
  return `${stripped.slice(0, MAX_TITLE_LENGTH - 1).trim()}…`;
}

export function normalizeSeoDescription(description: string): string {
  const trimmed = description.trim();
  if (trimmed.length <= MAX_DESCRIPTION_LENGTH) return trimmed;
  return `${trimmed.slice(0, MAX_DESCRIPTION_LENGTH - 1).trim()}…`;
}
