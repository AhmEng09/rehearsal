import test from "node:test";
import assert from "node:assert/strict";
import { slugify, truncate, camelCase, capitalize } from "../src/strings.js";

test("slugify converts standard strings to lowercase kebab-case", () => {
  assert.strictEqual(slugify("Hello World"), "hello-world");
  assert.strictEqual(slugify("Foo Bar Baz"), "foo-bar-baz");
});

test("truncate shortens strings that exceed max length", () => {
  assert.strictEqual(truncate("Hello World", 8), "Hello...");
  assert.strictEqual(truncate("Short", 10), "Short");
});

test("camelCase converts spaced and dashed strings", () => {
  assert.strictEqual(camelCase("hello-world"), "helloWorld");
  assert.strictEqual(camelCase("foo bar baz"), "fooBarBaz");
});

test("capitalize capitalizes the first letter", () => {
  assert.strictEqual(capitalize("hello"), "Hello");
  assert.strictEqual(capitalize("WORLD"), "World");
});
