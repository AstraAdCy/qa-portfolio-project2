import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('Logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login('jack_3001', 'Teddy@20');

  await dashboardPage.logout();
  await dashboardPage.verifyLogout();
});

test('View Account Overview', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('jack_3001', 'Teddy@20');

  await loginPage.verifyLoginSuccess();
});