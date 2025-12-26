const { test, expect } = require('@playwright/test');

test('Day 18 - Mock API response', async ({ page }) => {
  await page.route('**/users', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { name: 'Gerold' },
        { name: 'Alex' }
      ])
    });
  });

  await page.setContent(`
    <ul id="users"></ul>
    <script>
      fetch('/users')
        .then(res => res.json())
        .then(data => {
          const ul = document.getElementById('users');
          data.forEach(u => {
            const li = document.createElement('li');
            li.textContent = u.name;
            ul.appendChild(li);
          });
        });
    </script>
  `);

  const users = page.locator('#users li');
  await expect(users).toHaveCount(2);
  await expect(users.nth(0)).toHaveText('Gerold');
  await expect(users.nth(1)).toHaveText('Alex');
});
