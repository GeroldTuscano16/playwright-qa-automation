const { test, expect } = require('@playwright/test');
const { login, logout } = require('./helpers/commands');

test.beforeEach(async ({ page }) => {
  console.log('🔹 Before Each Test');
  await login(page, 'standard_user', 'secret_sauce');
});

test.afterEach(async ({ page }) => {
  console.log('🔸 After Each Test');
  await logout(page);
});

test('Day 23 - Verify inventory page loads', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});
