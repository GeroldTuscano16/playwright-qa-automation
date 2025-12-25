const { test, expect } = require('@playwright/test');

test('Day 18 - Mock API response', async ({ page }) => {
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

  await page.goto('http://localhost:3000'); // or your test HTML

  // Trigger request
  await page.evaluate(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        const ul = document.createElement('ul');
        ul.id = 'users';
        data.forEach(u => {
          const li = document.createElement('li');
          li.textContent = u.name;
          ul.appendChild(li);
        });
        document.body.appendChild(ul);
      });
  });

  const users = page.locator('#users li');

  await expect(users).toHaveCount(2);
  await expect(users.nth(0)).toHaveText('Gerold');
  await expect(users.nth(1)).toHaveText('Alex');
});
