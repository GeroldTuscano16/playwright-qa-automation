const { test, expect } = require('@playwright/test');

test('Day 15 - Multi-context and iframe exercise', async ({ browser }) => {
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  await page1.goto('https://example.com');
  console.log('Page 1 title:', await page1.title());

  // Proper popup handling
  const [popup] = await Promise.all([
    page1.waitForEvent('popup'),
    page1.evaluate(() => window.open('https://www.w3schools.com'))
  ]);

  // Wait for popup to fully load
  await popup.waitForLoadState('domcontentloaded');

  console.log('Popup URL:', popup.url());
  console.log('Popup title:', await popup.title());

  // Second isolated context
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  await page2.goto('https://example.com');
  console.log('Isolated page title:', await page2.title());
});
