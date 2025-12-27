const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('Day 20 - Environment config and reusable setup', async ({ page }) => {
  await expect(page.locator('#login-button')).toBeVisible();
});
