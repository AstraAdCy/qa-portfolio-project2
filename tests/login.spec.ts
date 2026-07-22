import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('jack_3002', 'Teddy@20');
  await loginPage.verifyLoginSuccess();
});

test('Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wronguser', 'wrongpassword');
  await loginPage.verifyLoginFailure();
});