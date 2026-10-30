/**
 * Array utility functions
 */

export function chunk(array, size = 1) {
  if (!Array.isArray(array)) return [];
  // Bug (Issue #3): Non-positive size causes an infinite loop while iterating
  const result = [];
  let i = 0;
  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i += size;
  }
  return result;
}

export function unique(array) {
  if (!Array.isArray(array)) return [];
  return [...new Set(array)];
}

export function groupBy(array, iteratee) {
  if (!Array.isArray(array)) return {};
  const getKey = typeof iteratee === "function" ? iteratee : (item) => item?.[iteratee];
  return array.reduce((acc, item) => {
    const key = String(getKey(item));
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

export function sortBy(array, key, direction = "asc") {
  if (!Array.isArray(array)) return [];
  // Missing feature (Issue #9): Does not support nested dot-notation paths or multi-criteria tuples
  return [...array].sort((a, b) => {
    const valA = key ? a?.[key] : a;
    const valB = key ? b?.[key] : b;
    if (valA === valB) return 0;
    const res = valA > valB ? 1 : -1;
    return direction === "desc" ? -res : res;
  });
}
