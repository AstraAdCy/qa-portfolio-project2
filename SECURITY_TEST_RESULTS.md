# Security Test Results

## Project

ParaBank Test Automation Project

## Tools Used

- Playwright
- TypeScript
- OWASP ZAP 2.17

## Security Tests Performed

### Playwright Security Tests

- Invalid login validation
- Authentication boundary testing
- SQL Injection input testing
- Cross-Site Scripting (XSS) input testing
- Input validation testing

### OWASP ZAP Baseline Scan

A passive baseline scan was performed against the ParaBank application.

## Findings

The scan identified several common security observations including:

- Missing Anti-CSRF Tokens
- Content Security Policy (CSP) Header Not Set
- Missing Anti-Clickjacking Header
- Session ID exposed in URL
- Missing Secure Cookie Flag
- Missing SameSite Cookie Attribute
- Missing Strict-Transport-Security Header
- Vulnerable JavaScript Library
- Application Error Disclosure

No active exploitation was performed during testing.

## Summary

The project combines functional UI automation with basic security testing using Playwright and OWASP ZAP to demonstrate secure testing practices aligned with the OWASP Top 10.