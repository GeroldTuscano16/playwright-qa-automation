const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Runs before every test
  await page.goto('/');
});

test('Day 20 - Environment config and reusable setup', async ({ page }) => {
  console.log('Running in ENV:', process.env.ENV);
  console.log('Base URL:', process.env.BASE_URL);

  await expect(page).toHaveTitle(/Example/);

  const heading = await page.locator('h1').innerText();
  console.log('Heading:', heading);

  expect(heading).toContain('Example');
});
