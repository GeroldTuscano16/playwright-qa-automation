const { test, expect } = require('@playwright/test');

test('Day 10 - Mini project', async ({ page }) => {
  await page.goto('https://example.com');
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Example Domain');
  await page.locator('a').click();
  await expect(page).toHaveURL(/iana.org/);
});
