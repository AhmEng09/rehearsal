import test from "node:test";
import assert from "node:assert/strict";
import { clamp, formatCurrency, sum, average, roundTo } from "../src/numbers.js";

test("clamp keeps value within standard bounds", () => {
  assert.strictEqual(clamp(5, 0, 10), 5);
  assert.strictEqual(clamp(-5, 0, 10), 0);
  assert.strictEqual(clamp(15, 0, 10), 10);
});

test("formatCurrency formats valid number into USD currency string", () => {
  const result = formatCurrency(1234.56, "USD");
  assert.ok(result.includes("1,234.56"));
});

test("sum calculates total of number array", () => {
  assert.strictEqual(sum([1, 2, 3, 4]), 10);
  assert.strictEqual(sum([]), 0);
});

test("average calculates mean of number array", () => {
  assert.strictEqual(average([2, 4, 6]), 4);
  assert.strictEqual(average([]), 0);
});

test("roundTo rounds numbers to precision", () => {
  assert.strictEqual(roundTo(3.14159, 2), 3.14);
  assert.strictEqual(roundTo(10.5, 0), 11);
});
