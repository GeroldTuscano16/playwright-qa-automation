const { test, expect } = require('@playwright/test');

test.skip(process.env.CI, 'Skip DuckDuckGo tests in CI');

const { test, expect } = require('@playwright/test');
const { DuckPage } = require('../pages/duck.page');

test('@local Verify first search result text', async ({ page }) => {

  const duck = new DuckPage(page);

  await duck.open();
  await duck.search('Playwright');

  const firstText = await duck.getFirstResultText();
  const firstURL = await duck.getFirstResultURL();

  console.log('First Result Text:', firstText);
  console.log('First Result URL:', firstURL);

  expect(firstText.toLowerCase()).toContain('playwright');
});
