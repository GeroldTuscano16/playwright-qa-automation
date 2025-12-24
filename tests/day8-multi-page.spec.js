const { test, expect } = require('@playwright/test');

test('Day 8 - Multi-page navigation', async ({ page }) => {
  await page.goto('https://example.com');
  await page.locator('a').click();
  await expect(page).toHaveURL(/iana.org/);
});
