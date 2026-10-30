import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("cli executes slugify command", () => {
  const output = execFileSync("node", ["bin/cli.js", "slugify", "Hello", "World"], {
    encoding: "utf-8"
  }).trim();
  assert.strictEqual(output, "hello-world");
});

test("cli prints help message", () => {
  const output = execFileSync("node", ["bin/cli.js", "--help"], {
    encoding: "utf-8"
  });
  assert.ok(output.includes("Usage:"));
  assert.ok(output.includes("rehearsal <command>"));
});
