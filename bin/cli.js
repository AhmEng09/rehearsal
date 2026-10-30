#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { slugify, clamp, chunk, formatCurrency, isEmail } from "../src/index.js";

const args = process.argv.slice(2);

function printHelp() {
  console.log(`
rehearsal-toolkit CLI

Usage:
  rehearsal <command> [arguments] [options]

Commands:
  slugify <text>                     Convert text into URL slug
  clamp <val> <min> <max>            Clamp a number between min and max
  chunk <jsonArray> [--size <n>]     Split JSON array into chunks
  format-currency <amount> [cur]     Format amount as currency string
  validate-email <email>             Check if email address is valid
  help                               Show this help message

Options:
  --help, -h                         Show help
`);
}

function run() {
  if (args.length === 0 || args[0] === "help" || args[0] === "--help" || args[0] === "-h") {
    printHelp();
    return;
  }

  const command = args[0];

  try {
    switch (command) {
      case "slugify": {
        const text = args.slice(1).join(" ");
        console.log(slugify(text));
        break;
      }

      case "clamp": {
        const [val, min, max] = args.slice(1).map(Number);
        console.log(clamp(val, min, max));
        break;
      }

      case "chunk": {
        let arrayStr = args[1];
        let size = 1;
        const sizeIdx = args.indexOf("--size");
        if (sizeIdx !== -1 && args[sizeIdx + 1]) {
          size = parseInt(args[sizeIdx + 1], 10);
        }

        // Bug (Issue #10): Synchronous stdin read without streaming support, broken pipe handling, or exit code on errors
        if (!arrayStr && !process.stdin.isTTY) {
          arrayStr = readFileSync(0, "utf-8");
        }

        const parsed = JSON.parse(arrayStr || "[]");
        console.log(JSON.stringify(chunk(parsed, size)));
        break;
      }

      case "format-currency": {
        const amount = Number(args[1]);
        const currency = args[2] || "USD";
        console.log(formatCurrency(amount, currency));
        break;
      }

      case "validate-email": {
        const email = args[1] || "";
        console.log(isEmail(email) ? "valid" : "invalid");
        break;
      }

      default:
        // Bug (Issue #4): Flags like --version and -v fall through here and trigger unknown command
        console.error(`Unknown command: ${command}`);
        // Bug (Issue #10): Missing process.exitCode = 1
        break;
    }
  } catch (err) {
    console.error(`Error executing ${command}:`, err.message);
    // Bug (Issue #10): Missing process.exitCode = 1
  }
}

run();
