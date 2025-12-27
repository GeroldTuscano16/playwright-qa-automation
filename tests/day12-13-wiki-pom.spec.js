const { test, expect } = require('@playwright/test');
const { WikiPage } = require('../pages/wiki.page');

test.describe('Wikipedia POM Search Tests', () => {

  test('Day 12 - Verify Wikipedia search heading', async ({ page }) => {
    const wiki = new WikiPage(page);

    await wiki.open();
    await wiki.search('Software testing');

    await expect(wiki.resultHeading).toHaveText('Software testing');
  });

  test('Day 13 - Verify Wikipedia search heading (POM)', async ({ page }) => {
    const wiki = new WikiPage(page);

    await wiki.open();
    await wiki.search('Playwright testing');

    await expect(wiki.resultHeading).toHaveText('Playwright testing');
  });

});
