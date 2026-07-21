# QA Portfolio Project 2 – ParaBank Automation

A Playwright automation project built against the ParaBank demo banking application.

The project focuses on writing maintainable UI tests using the Page Object Model (POM), running tests across multiple browsers, and integrating automated execution with GitHub Actions.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git & GitHub
- GitHub Actions
- Appium (learning)

---

## Project Structure

```
qa-portfolio-project2
│
├── pages/
├── tests/
├── fixtures/
├── data/
├── .github/workflows/
├── playwright.config.ts
└── README.md
```

---

## Automated Tests

Current automated scenarios include:

- Valid Login
- Invalid Login
- Logout
- View Account Overview
- Transfer Funds

The project currently contains **5 automated Playwright tests** supported by **15 planned functional test cases** covering smoke, regression, and edge-case scenarios.

---

## Test Design

The framework follows the Page Object Model (POM) to keep page interactions separate from test logic.

Each page contains its own locators and reusable methods, allowing tests to stay clean and easier to maintain.

---

## Running the Project

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a specific browser:

```bash
npx playwright test --project=chromium
```

Open the HTML report:

```bash
npx playwright show-report
```

---

## Continuous Integration

Tests run automatically using GitHub Actions whenever code is pushed to the repository.

This helps catch issues early and keeps the project in a working state.

---

## What I Learned

While building this project I practiced:

- Creating a Playwright framework from scratch
- Using the Page Object Model
- Working with locators and assertions
- Debugging flaky UI tests
- Running cross-browser automation
- Setting up GitHub Actions
- Maintaining a clean project structure

---

## Next Steps

Planned improvements include:

- API testing with Playwright
- Data-driven testing
- Mobile automation with Appium
- Additional banking scenarios
- Better test reporting