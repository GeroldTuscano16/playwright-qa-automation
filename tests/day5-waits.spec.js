const { test, expect } = require('@playwright/test');

test('Day 5 - Proper wait for dynamic content', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  await page.click('button');

  const message = page.locator('#finish');

  // ✅ Explicit wait for text
  await message.waitFor({ state: 'visible', timeout: 10000 });

  await expect(message).toHaveText('Hello World!');
});
