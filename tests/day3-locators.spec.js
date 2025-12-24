const { test, expect } = require('@playwright/test');

test('Day 3 - Locators practice', async ({ page }) => {
  await page.goto('https://example.com');
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Example Domain');
});
