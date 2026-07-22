import { expect, test } from '@playwright/test';

test('SQL Injection attempt', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank');

  await page.locator('input[name="username"]').fill("' OR '1'='1");
  await page.locator('input[name="password"]').fill("' OR '1'='1");

  await page.locator('input[value="Log In"]').click();

  await expect(page).not.toHaveURL(/overview/);
});

test('XSS attempt', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank');

  await page.locator('input[name="username"]').fill('<script>alert(1)</script>');
  await page.locator('input[name="password"]').fill('test');

  await page.locator('input[value="Log In"]').click();

  await expect(page).not.toHaveURL(/overview/);
});

test('Empty login fields', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank');

  await page.locator('input[value="Log In"]').click();

  await expect(page).toHaveURL(/login/);
});

test('Long username input', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank');

  const longText = 'A'.repeat(300);

  await page.locator('input[name="username"]').fill(longText);
});

test('Access protected page without login', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/overview.htm');

  await expect(page.locator('input[name="username"]')).toBeVisible();
});

