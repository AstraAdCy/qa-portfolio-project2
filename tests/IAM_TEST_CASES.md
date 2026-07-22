# IAM Test Cases

## 1. Role-Based Access Control (RBAC)

Verify that users can only access features assigned to their role.

Expected:
Unauthorised pages are blocked.

---

## 2. Least Privilege

Verify a standard user cannot access administrator functions.

Expected:
Access denied.

---

## 3. Session Timeout

Leave the application idle for 15 minutes.

Expected:
User is automatically logged out.

---

## 4. Session After Logout

Logout and press the browser Back button.

Expected:
Protected pages remain inaccessible.

---

## 5. Invalid Token

Replace the session token with an invalid value.

Expected:
Application redirects to Login.

---

## 6. Expired Token

Use an expired authentication token.

Expected:
User must authenticate again.

---

## 7. MFA Validation

Enter correct username/password but incorrect MFA code.

Expected:
Login fails.

---

## 8. MFA Bypass Attempt

Attempt to skip the MFA step by navigating directly to the application.

Expected:
Access denied.

---

## 9. Password Reset

Verify password reset requires proper user verification.

Expected:
Password changes only after successful verification.

---

## 10. Account Lockout

Enter an incorrect password multiple times.

Expected:
Account becomes temporarily locked.