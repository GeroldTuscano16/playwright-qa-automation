// tests/day19-dashboard.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Day 19 - Dashboard Tests', () => {

  test('Open dashboard without login should redirect to login', async ({ page }) => {
    // 1️⃣ Go directly to inventory page without logging in
    await page.goto('https://www.saucedemo.com/inventory.html');

    // 2️⃣ Expect the login button to be visible (redirected to login)
    await expect(page.locator('#login-button')).toBeVisible();

    // Optional: take screenshot for debugging
    await page.screenshot({ path: 'test-results/day19-dashboard-no-login.png' });
  });

  test('Login and access dashboard successfully', async ({ page }) => {
    // 1️⃣ Go to login page
    await page.goto('https://www.saucedemo.com/');

    // 2️⃣ Fill login form
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    // 3️⃣ Click login button
    await page.click('#login-button');

    // 4️⃣ Expect inventory list to be visible
    const inventoryList = page.locator('.inventory_list');
    await expect(inventoryList).toBeVisible();

    // Optional: take screenshot
    await page.screenshot({ path: 'test-results/day19-dashboard-login-success.png' });
  });

});
