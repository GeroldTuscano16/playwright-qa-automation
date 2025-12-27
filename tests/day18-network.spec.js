import { test, expect } from '@playwright/test';

test('Day 18 - Mock API response', async ({ page }) => {
  // 1️⃣ Mock the API
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

  // 2️⃣ Load inline HTML (NO localhost)
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

  // 3️⃣ Assertions
  const users = page.locator('#users li');
  await expect(users).toHaveCount(2);
  await expect(users.nth(0)).toHaveText('Gerold');
  await expect(users.nth(1)).toHaveText('Alex');
});
