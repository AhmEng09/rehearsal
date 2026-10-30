# Contributing to Rehearsal Toolkit

Welcome to the **HackDay x Hacktoberfest** practice rehearsal repository! This codebase is designed for engineers and teams to simulate and master open-source hackathon workflows: finding issues, claiming tasks, creating forks/branches, implementing clean fixes with tests, opening pull requests, and passing automated CI pipelines.

---

## Core Participation Rules

### 1. Claiming Issues via Comments
- Before writing any code, **you must comment on the issue you wish to solve to claim it**.
- Wait for a confirmation or ensure no one else has already claimed or opened a linked PR for that issue.
- Do NOT begin work on issues already claimed by others or issues currently blocked awaiting maintainer design decisions.

### 2. One PR Per Issue
- Each Pull Request must address **strictly one issue**.
- Do not bundle multiple unrelated fixes or features into a single PR. Multi-issue PRs will be closed without review.

### 3. AI Tools Allowed
- **AI coding assistants are 100% allowed and encouraged** (e.g. Gemini, GitHub Copilot, ChatGPT, Claude).
- Contributors are responsible for the code submitted: review, understand, format, and ensure all unit tests pass before opening a PR.

### 4. Hacktoberfest Anti-Spam & Quality Standards
- Submissions must adhere to official Hacktoberfest quality rules.
- **Strictly Disallowed:**
  - Junk PRs (whitespace changes, comment churn, nonsensical edits).
  - Typo-only PRs (modifying a README word or variable spelling without substance).
  - Duplicate PRs (submitting an issue already solved by an existing open PR).
  - Incomplete code or failing CI pipelines without unit tests.
- Low-quality or spam PRs will be labeled `invalid` or `spam` and closed immediately.

---

## Step-by-Step Contribution Workflow

### Step 1: Fork and Clone
1. Fork `https://github.com/AhmEng09/rehearsal` to your personal GitHub account.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/rehearsal.git
   cd rehearsal
   ```
3. Set upstream remote:
   ```bash
   git remote add upstream https://github.com/AhmEng09/rehearsal.git
   ```

### Step 2: Install and Verify
Ensure you have Node.js 20+ installed.
```bash
npm ci
npm run lint
npm test
```
*Tip: Inspect test runner outputs carefully. If an unrelated test failure exists on `main`, investigate and isolate the issue scope!*

### Step 3: Create a Feature Branch
Create a branch named after the issue:
```bash
git checkout -b fix/issue-1-slugify
```

### Step 4: Implement and Test
- Write the fix or feature in `src/` or `bin/`.
- Add comprehensive unit tests in `test/` reproducing the bug and verifying the fix.
- Verify clean linting and testing:
  ```bash
  npm run lint
  npm test
  ```

### Step 5: Commit and Push
Use clear, conventional commit messages:
```bash
git add .
git commit -m "fix(strings): trim trailing hyphens in slugify"
git push origin fix/issue-1-slugify
```

### Step 6: Open Pull Request
- Open a PR against `main` on the upstream repository.
- Use the PR template and reference the issue in the description (`Fixes #<issue-number>`).
- Ensure CI checks pass on GitHub Actions.
