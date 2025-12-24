const { test, expect } = require('@playwright/test');

test('Day 4 - Typing into input', async ({ page }) => {
  await page.goto('https://duckduckgo.com/'); // simpler search engine
  const searchBox = page.locator('input[name="q"]');
  await searchBox.fill('Playwright automation'); 
  await page.keyboard.press('Enter');
});
