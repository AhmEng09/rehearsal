import test from "node:test";
import assert from "node:assert/strict";
import { chunk, unique, groupBy, sortBy } from "../src/arrays.js";

test("chunk splits array into fixed chunks for positive sizes", () => {
  assert.deepStrictEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
  assert.deepStrictEqual(chunk([1, 2], 3), [[1, 2]]);
});

test("chunk throws TypeError when size is not a positive integer", () => {
  assert.throws(
    () => chunk([1, 2, 3], 0),
    {
      name: "TypeError",
      message: "Chunk size must be a positive integer greater than 0"
    }
  );
  assert.throws(
    () => chunk([1, 2, 3], -1),
    {
      name: "TypeError",
      message: "Chunk size must be a positive integer greater than 0"
    }
  );
});

test("unique removes duplicates from array", () => {
  assert.deepStrictEqual(unique([1, 2, 2, 3, 1]), [1, 2, 3]);
  assert.deepStrictEqual(unique([]), []);
});

test("groupBy groups elements by key", () => {
  const items = [
    { type: "fruit", name: "apple" },
    { type: "fruit", name: "banana" },
    { type: "vegetable", name: "carrot" }
  ];
  const grouped = groupBy(items, "type");
  assert.strictEqual(grouped.fruit.length, 2);
  assert.strictEqual(grouped.vegetable.length, 1);
});

test("sortBy sorts primitives and single properties", () => {
  assert.deepStrictEqual(sortBy([3, 1, 2]), [1, 2, 3]);
  assert.deepStrictEqual(
    sortBy([{ age: 20 }, { age: 10 }], "age"),
    [{ age: 10 }, { age: 20 }]
  );
});
