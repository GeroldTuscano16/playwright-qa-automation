const { test, expect } = require('@playwright/test');
const { DuckPage } = require('../pages/duck.page');

// Skip only in CI
test.skip(process.env.CI, 'Skip DuckDuckGo tests in CI');

test('@local Verify first search result text', async ({ page }) => {
  const duckPage = new DuckPage(page);

  await duckPage.open();
  await duckPage.search('Playwright');

  const firstText = await duckPage.getFirstResultText();
  console.log('First Result:', firstText);

  expect(firstText.toLowerCase()).toContain('playwright');
});
