const { test, expect } = require('@playwright/test');

test.describe('Day 21 - Hooks and reusable setup', () => {

  test.beforeEach(async ({ page }) => {
    console.log('🔹 Before Each Test');
    await page.goto('https://www.saucedemo.com/');
  });

  test.afterEach(async ({ page }) => {
    console.log('🔸 After Each Test');
  });

  test('Login page should be visible', async ({ page }) => {
    await expect(page.locator('#login-button')).toBeVisible();
  });

  test('Login with valid credentials', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

});
