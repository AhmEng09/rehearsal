/**
 * Object utility functions
 */

export function pick(obj, keys) {
  if (!obj || typeof obj !== "object" || !Array.isArray(keys)) return {};
  const result = {};
  for (const key of keys) {
    // Bug (Issue #5): Assigns undefined for missing keys instead of omitting them
    result[key] = obj[key];
  }
  return result;
}

export function omit(obj, keys) {
  if (!obj || typeof obj !== "object" || !Array.isArray(keys)) return {};
  const keySet = new Set(keys);
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keySet.has(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

export function deepMerge(target, source) {
  if (!source || typeof source !== "object") return target;
  const output = { ...target };
  for (const key of Object.keys(source)) {
    // Bug (Issue #8): Prototype pollution vulnerability when key is __proto__ or constructor
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      output[key] = deepMerge(output[key] || {}, source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
}
