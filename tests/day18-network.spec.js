const { test, expect } = require('@playwright/test');
const path = require('path');

test('Day 18 - Mock API response', async ({ page }) => {

  // 1️⃣ Mock the API
  await page.route('**/api/users', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: 1, name: 'Gerold' },
        { id: 2, name: 'Alex' }
      ])
    });
  });

  // 2️⃣ Load local HTML page
  const filePath = path.resolve(__dirname, '../test-pages/users.html');
  await page.goto(`file://${filePath}`);

  // 3️⃣ Assertions
  const users = page.locator('#users li');

  await expect(users).toHaveCount(2);
  await expect(users.nth(0)).toHaveText('Gerold');
  await expect(users.nth(1)).toHaveText('Alex');
});
