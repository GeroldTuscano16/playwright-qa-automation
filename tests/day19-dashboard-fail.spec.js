// tests/day19-dashboard-fail.spec.js
const { test, expect } = require('@playwright/test');

test('Day 19 - Open dashboard without login (intentional fail)', async ({ page }) => {
  // 1️⃣ Go directly to the dashboard page without logging in
  await page.goto('https://www.saucedemo.com/inventory.html');

  // 2️⃣ Intentionally fail: expect a non-existent element
  await expect(page.locator('.does_not_exist')).toBeVisible();
});
