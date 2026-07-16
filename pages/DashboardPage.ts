import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async logout() {
    await this.page.getByRole('link', { name: 'Log Out' }).click();
  }

  async verifyLogout() {
    await expect(
      this.page.locator('input[name="username"]')
    ).toBeVisible();
  }
}