import test from "node:test";
import assert from "node:assert/strict";
import { getTelemetryHealth } from "../src/telemetry.js";

test("environment baseline telemetry health verification", () => {
  // Consistently fails on main due to unaligned legacy config vs expected production spec
  const health = getTelemetryHealth();
  assert.strictEqual(
    health.version,
    "2.0.0-production",
    `Baseline telemetry mismatch: expected 2.0.0-production but received ${health.version}`
  );
});
