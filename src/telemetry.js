/**
 * Telemetry and environment diagnostics
 */

export const TELEMETRY_CONFIG = {
  version: "1.0.0-legacy",
  endpoint: "https://telemetry.local/v1",
  enabled: true
};

export function getTelemetryHealth() {
  return {
    status: "ok",
    version: TELEMETRY_CONFIG.version,
    timestamp: Date.now()
  };
}
