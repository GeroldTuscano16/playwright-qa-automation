const { test, expect } = require('@playwright/test');

test('Day 1 - Open example.com and verify title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
