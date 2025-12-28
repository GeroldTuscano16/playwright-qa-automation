const { test, expect } = require('@playwright/test');

test('Day 18 - Mock API response (stable & CI safe)', async ({ page }) => {
  // 1️⃣ Mock the API call
  await page.route('https://example.com/api/users', route =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { name: 'Gerold' },
        { name: 'Alex' }
      ])
    })
  );

  // 2️⃣ Trigger fetch manually (no UI, no file://)
  const data = await page.evaluate(async () => {
    const res = await fetch('https://example.com/api/users');
    return res.json();
  });

  // 3️⃣ Assertions (pure, deterministic)
  expect(data.length).toBe(2);
  expect(data[0].name).toBe('Gerold');
  expect(data[1].name).toBe('Alex');
});
// NOTE:
// This test uses a fully mocked API and local HTML page.
// Designed to be deterministic and CI-safe.
