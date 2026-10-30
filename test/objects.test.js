import test from "node:test";
import assert from "node:assert/strict";
import { pick, omit, deepMerge } from "../src/objects.js";

test("pick selects existing properties from object", () => {
  const source = { a: 1, b: 2, c: 3 };
  assert.deepStrictEqual(pick(source, ["a", "c"]), { a: 1, c: 3 });
});

test("omit removes specified keys from object", () => {
  const source = { a: 1, b: 2, c: 3 };
  assert.deepStrictEqual(omit(source, ["b"]), { a: 1, c: 3 });
});

test("deepMerge combines nested properties", () => {
  const target = { a: 1, nested: { x: 10 } };
  const source = { b: 2, nested: { y: 20 } };
  assert.deepStrictEqual(deepMerge(target, source), {
    a: 1,
    b: 2,
    nested: { x: 10, y: 20 }
  });
});
