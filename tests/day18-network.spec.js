import { test, expect } from '@playwright/test';
import path from 'path';

test('Day 18 - Mock API response (CI-safe)', async ({ page }) => {

  // 1️⃣ Mock the API response
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

  // 2️⃣ Open local static HTML file (NO server needed)
  const filePath = path.resolve(__dirname, '../test-pages/network-demo.html');
  await page.goto(`file://${filePath}`);

  // 3️⃣ Assertions
  const users = page.locator('#users li');
  await expect(users).toHaveCount(2);
  await expect(users.nth(0)).toHaveText('Gerold');
  await expect(users.nth(1)).toHaveText('Alex');
});
