const { test, expect } = require('@playwright/test');

test('Day 11 - Stable waits and assertions', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1', {
    waitUntil: 'domcontentloaded'
  });

  await page.locator('button').click();

  const finishText = page.locator('#finish');

  // Explicit wait (professional way)
  await finishText.waitFor({ state: 'visible', timeout: 10000 });

  await expect(finishText).toHaveText('Hello World!');
});
