const { test, expect } = require('@playwright/test');

test('Day 2 - Open Google and check title', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
