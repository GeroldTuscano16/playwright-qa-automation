const { test, expect } = require('@playwright/test');

test.skip('Day 18 - Mock API response (CI safe)', async ({ page }) => {
  // 1️⃣ Mock API route (absolute & deterministic)
  await page.route('**/api/users', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { name: 'Gerold' },
        { name: 'Alex' }
      ])
    });
  });

  // 2️⃣ Go to a stable blank page (no external JS)
  await page.goto('about:blank');

  // 3️⃣ Trigger request manually inside browser context
  const response = await page.evaluate(async () => {
    const res = await fetch('/api/users');
    return {
      status: res.status,
      body: await res.json()
    };
  });

  // 4️⃣ Assertions (pure & CI-safe)
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2);
  expect(response.body[0].name).toBe('Gerold');
  expect(response.body[1].name).toBe('Alex');
});
