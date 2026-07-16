import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';

test('Transfer Funds', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const transferPage = new TransferFundsPage(page);

  await loginPage.goto();
  await loginPage.login('jack_2099', 'Love@Blind20');

  await transferPage.transferFunds('10');

console.log(await page.url());
console.log(await page.title());

// await transferPage.verifyTransferSuccess();
});