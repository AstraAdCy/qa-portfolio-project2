import { Page, expect } from '@playwright/test';

export class TransferFundsPage {
  constructor(private page: Page) {}

  async transferFunds(amount: string) {
    await this.page
      .locator('#leftPanel')
      .getByRole('link', { name: 'Transfer Funds' })
      .click();

    await this.page.locator('#amount').fill(amount);

    await this.page.waitForTimeout(1000);

    await this.page.locator('input[value="Transfer"]').click();

    await this.page.waitForTimeout(3000);
  }

  async verifyTransferSuccess() {
    await expect(
      this.page.getByRole('heading', { name: 'Transfer Complete!' })
    ).toBeVisible();
  }
}