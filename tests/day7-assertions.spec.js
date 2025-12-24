const { test, expect } = require('@playwright/test');

test('Day 7 - Assertions and validations', async ({ page }) => {
  await page.goto('https://example.com');
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Example Domain');
});
