const { test, expect } = require('@playwright/test');

test('Day 14 - Multi-page and context exercise', async ({ browser }) => {
  // -------- Step 1: Open first context and first page --------
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto('https://example.com');
  console.log('Page 1 title:', await page1.title());
  await expect(page1).toHaveTitle(/Example Domain/);

  // -------- Step 2: Open a second tab in the same context --------
  const page2 = await context1.newPage();
  await page2.goto('https://playwright.dev');
  console.log('Page 2 title:', await page2.title());
  await expect(page2).toHaveTitle(/Playwright/);

  // -------- Step 3: Handle a popup --------
  const pageWithPopup = await context1.newPage();
  await pageWithPopup.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open');

  // Switch to iframe
  const frame = pageWithPopup.frameLocator('#iframeResult');

  // Wait for popup
  const [popup] = await Promise.all([
    pageWithPopup.waitForEvent('popup'),
    frame.locator('button').click() // click opens popup
  ]);
  console.log('Popup URL:', popup.url());
  await expect(popup).toHaveURL(/w3schools/);

  // Close popup
  await popup.close();

  // -------- Step 4: Open a completely new browser context (isolated session) --------
  const context2 = await browser.newContext();
  const isolatedPage = await context2.newPage();
  await isolatedPage.goto('https://example.com');
  console.log('Isolated page title:', await isolatedPage.title());
  await expect(isolatedPage).toHaveTitle(/Example Domain/);

  // -------- Step 5: Clean up --------
  await page1.close();
  await page2.close();
  await pageWithPopup.close();
  await isolatedPage.close();
});
