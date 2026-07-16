# Parabank Test Plan

## Smoke Tests

| ID | Test Case | Expected Result |
|----|-----------|-----------------|
| SMK-01 | Login with valid credentials | User is logged in successfully |
| SMK-02 | View Accounts Overview | Account details are displayed |
| SMK-03 | Open Transfer Funds page | Transfer page loads successfully |
| SMK-04 | Transfer funds between accounts | Transfer completes successfully |
| SMK-05 | Logout | User is logged out successfully |

---

## Regression Tests

| ID | Test Case | Expected Result |
|----|-----------|-----------------|
| REG-01 | Register a new user | User account is created |
| REG-02 | Open a new account | New account is created |
| REG-03 | Pay a bill | Bill payment succeeds |
| REG-04 | Update contact information | Details are updated |
| REG-05 | Request a loan | Loan request is submitted |

---

## Edge Cases

| ID | Test Case | Expected Result |
|----|-----------|-----------------|
| EDGE-01 | Login with invalid username | Error message displayed |
| EDGE-02 | Login with invalid password | Error message displayed |
| EDGE-03 | Login with empty username and password | Validation or login error displayed |
| EDGE-04 | Transfer amount greater than balance | Transfer is rejected |
| EDGE-05 | Transfer £0 | Validation message displayed |