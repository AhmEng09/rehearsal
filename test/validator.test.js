import test from "node:test";
import assert from "node:assert/strict";
import { isEmail, isURL, isSemver } from "../src/validator.js";

test("isEmail returns true for standard valid email addresses", () => {
  assert.strictEqual(isEmail("user@example.com"), true);
  assert.strictEqual(isEmail("first.last@domain.org"), true);
  assert.strictEqual(isEmail("not-an-email"), false);
});

test("isURL validates http and https URLs", () => {
  assert.strictEqual(isURL("https://github.com"), true);
  assert.strictEqual(isURL("http://localhost:3000"), true);
  assert.strictEqual(isURL("ftp://invalid.scheme"), false);
  assert.strictEqual(isURL("not a url"), false);
});

test("isSemver validates semantic version strings", () => {
  assert.strictEqual(isSemver("1.0.0"), true);
  assert.strictEqual(isSemver("2.1.3-beta.1"), true);
  assert.strictEqual(isSemver("v1.0.0"), false);
  assert.strictEqual(isSemver("1.0"), false);
});
