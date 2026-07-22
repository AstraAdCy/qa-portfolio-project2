import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';

test('Transfer Funds', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const transferPage = new TransferFundsPage(page);

  await loginPage.goto();
  await loginPage.login('jack_3002', 'Teddy@20');

  await transferPage.transferFunds('10');

console.log(await page.url());
console.log(await page.title());

// await transferPage.verifyTransferSuccess();
});