const { test, expect } = require('@playwright/test');

test('Day 19 - Open dashboard without login (intentional fail)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Intentional failure for reporting demo
  await expect(page.locator('.does_not_exist')).toBeVisible();
});
