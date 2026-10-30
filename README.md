# Rehearsal Toolkit (`rehearsal`)

[![CI](https://github.com/AhmEng09/rehearsal/actions/workflows/ci.yml/badge.svg)](https://github.com/AhmEng09/rehearsal/actions/workflows/ci.yml)

A simulated **HackDay x Hacktoberfest** rehearsal repository designed for engineering teams to practice open-source collaboration workflows: discovering tasks, claiming issues, branching, fixing bugs, writing native unit tests, navigating real-world codebases, and passing automated CI checks.

---

## Architecture & Stack

- **Runtime:** Node.js 20+ (ES Modules)
- **Core Library (`src/`):** Lightweight, zero-dependency utility functions:
  - `strings.js`: String formatting, slugification, casing, and truncation
  - `numbers.js`: Bounds clamping, currency formatting, summation, and rounding
  - `arrays.js`: Chunking, deduplication, grouping, and multi-criteria sorting
  - `objects.js`: Property picking, omission, and deep merging
  - `validator.js`: Email, URL, and Semantic Versioning validators
  - `telemetry.js`: Health check diagnostics and environment telemetry
- **CLI (`bin/cli.js`):** Command-line executable registered as `rehearsal`
- **Testing:** Node.js native test runner (`node --test`, `node:assert/strict`)
- **Linting:** ESLint 9 Flat Config (`eslint .`)
- **CI/CD:** GitHub Actions (`.github/workflows/ci.yml`)

---

## Quick Start

### Prerequisites
- Node.js 20.0.0 or later
- npm 10+

### Setup & Local Verification
```bash
# Clone the repository
git clone https://github.com/AhmEng09/rehearsal.git
cd rehearsal

# Install dependencies
npm ci

# Run linter
npm run lint

# Run native test suite
npm test
```

### CLI Usage
You can execute CLI utilities directly:
```bash
# Display help and command listing
node bin/cli.js help

# Slugify text
node bin/cli.js slugify "HackDay Rehearsal 2026"

# Clamp a value
node bin/cli.js clamp 42 0 100

# Format currency
node bin/cli.js format-currency 1250.75 EUR

# Validate email address
node bin/cli.js validate-email test@domain.org
```

---

## Hackathon & Hacktoberfest Guidelines

We follow authentic Hacktoberfest and HackDay rules to simulate realistic open-source competition:

1. **AI Tools Allowed:** You are fully permitted and encouraged to use AI assistance (Gemini, Copilot, ChatGPT, Claude, etc.). Make sure you inspect and understand all generated code.
2. **Claim Issues via Comment:** Always post a comment on the target issue stating your intent to work on it before writing code.
3. **One PR Per Issue:** Each pull request must address exactly one issue. Do not bundle multiple bug fixes into a single PR.
4. **Hacktoberfest Anti-Spam Rules Apply:**
   - No junk PRs (whitespace, cosmetic comment churn).
   - No duplicate PRs (check existing pull requests first).
   - No typo-only PRs (PRs must solve actual logic or feature gaps).
   - PRs must include tests and pass `npm run lint` and `npm test`.

### Scoring & Issue Tiers
Issues in this repository are categorized by difficulty and points:
- 🟢 `easy` / `points: 10`: Targeted bug fixes or single-flag additions.
- 🟡 `medium` / `points: 20`: Multi-step algorithmic fixes, security hardening, or bounded edge cases.
- 🔴 `hard` / `points: 30`: Architectural enhancements, streaming pipelines, or deep nested data transformations.

Read our full guide in [CONTRIBUTING.md](CONTRIBUTING.md).
