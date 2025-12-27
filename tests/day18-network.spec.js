import { test, expect } from '@playwright/test';

test('Day 18 - Mock API response (CI safe)', async ({ page }) => {
  // 1️⃣ Mock API response
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

  // 2️⃣ Load deterministic inline HTML (NO external dependency)
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body>
        <ul id="users"></ul>

        <script>
          fetch('/api/users')
            .then(res => res.json())
            .then(data => {
              const ul = document.getElementById('users');
              data.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                ul.appendChild(li);
              });
            });
        </script>
      </body>
    </html>
  `);

  // 3️⃣ Assert via browser context (CI safe)
  const users = await page.evaluate(() =>
    Array.from(document.querySelectorAll('#users li')).map(li => li.textContent)
  );

  expect(users).toEqual(['Gerold', 'Alex']);
});
