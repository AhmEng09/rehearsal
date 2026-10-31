/**
 * String utility functions
 */

export function slugify(text) {
  if (typeof text !== "string") return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text, maxLength, options = {}) {
  if (typeof text !== "string") return "";
  if (text.length <= maxLength) return text;
  const ellipsis = options.ellipsis ?? "...";
  // Missing feature (Issue #7): preserveWords option with trade-offs needing maintainer confirmation
  return text.slice(0, maxLength - ellipsis.length) + ellipsis;
}

export function camelCase(text) {
  if (typeof text !== "string") return "";
  return text
    .trim()
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
}

export function capitalize(text) {
  if (typeof text !== "string" || text.length === 0) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
