import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('Logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login('jack_2100', 'Luffy@Zoro');

  await dashboardPage.logout();
  await dashboardPage.verifyLogout();
});

test('View Account Overview', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('jack_2100', 'Luffy@Zoro');

  await loginPage.verifyLoginSuccess();
});