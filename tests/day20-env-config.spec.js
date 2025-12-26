const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Day 20 - Environment config and reusable setup', async ({ page }) => {
  await expect(page).toHaveURL(/saucedemo/);
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});
