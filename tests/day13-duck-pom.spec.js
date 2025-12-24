const { test, expect } = require('@playwright/test');
const { DuckPage } = require('../pages/duck.page');

test('Day 13 - Verify first DuckDuckGo search result and URL', async ({ page }) => {
  const duck = new DuckPage(page);

  await duck.open();
  await duck.search('Playwright');

  const firstText = await duck.getFirstResultText();
  const firstURL = await duck.getFirstResultURL();

  console.log('First Result Text:', firstText);
  console.log('First Result URL:', firstURL);

  expect(firstText.toLowerCase()).toContain('playwright');
});
