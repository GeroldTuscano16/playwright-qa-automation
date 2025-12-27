const { test, expect } = require('@playwright/test');
const { WikiPage } = require('../pages/wiki.page');

test('@local Verify Wikipedia search heading (POM)', async ({ page }) => {
  const wiki = new WikiPage(page);

  await wiki.open();
  await wiki.search('Playwright testing');

  await expect(wiki.resultHeading).toHaveText('Playwright testing');
});
