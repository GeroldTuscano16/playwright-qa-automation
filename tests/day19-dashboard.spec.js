const { test, expect } = require('@playwright/test');

test('Day 19 - Open dashboard without login should redirect to login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  await expect(page).toHaveURL(/saucedemo\.com/);
  await expect(page.locator('#login-button')).toBeVisible();
});
