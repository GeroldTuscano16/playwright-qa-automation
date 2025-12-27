import { test, expect } from '@playwright/test';

test('Day 18 - Mock API response (CI safe)', async ({ page }) => {
  // 1️⃣ Mock the API response
  await page.route('**/api/users', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { name: 'Gerold' },
        { name: 'Alex' }
      ])
    });
  });

  // 2️⃣ Call the API directly (NO UI dependency)
  const response = await page.request.get('https://example.com/api/users');

  // 3️⃣ Validate response
  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  expect(data.length).toBe(2);
  expect(data[0].name).toBe('Gerold');
  expect(data[1].name).toBe('Alex');
});
