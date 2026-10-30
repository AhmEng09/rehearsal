/**
 * Number utility functions
 */

export function clamp(val, min, max) {
  // Bug (Issue #2): min > max is not checked, returns invalid bounds instead of throwing RangeError
  return Math.min(Math.max(val, min), max);
}

export function formatCurrency(amount, currency = "USD") {
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    throw new TypeError("Amount must be a valid number");
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount);
}

export function sum(numbers) {
  if (!Array.isArray(numbers)) return 0;
  return numbers.reduce((acc, n) => (typeof n === "number" ? acc + n : acc), 0);
}

export function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

export function roundTo(val, precision = 0) {
  if (typeof val !== "number" || Number.isNaN(val)) return NaN;
  const factor = 10 ** precision;
  return Math.round(val * factor) / factor;
}
