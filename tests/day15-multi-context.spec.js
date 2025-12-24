import { test, expect } from '@playwright/test';

test('Day 15 - Multi-context and iframe exercise', async ({ browser }) => {
  // Create a new browser context (isolated session)
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto('https://example.com');
  console.log('Page 1 title:', await page1.title());

  // Open a popup from page1
  const [popup] = await Promise.all([
    page1.waitForEvent('popup'),
    page1.evaluate(() => window.open('https://www.w3schools.com/'))
  ]);
  console.log('Popup URL:', popup.url());
  console.log('Popup title:', await popup.title());

  // Open a second isolated context
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto('https://playwright.dev');
  console.log('Page 2 title:', await page2.title());

  // Navigate an iframe inside page2
  const frameHandle = page2.frameLocator('iframe#iframe-example'); // Adjust selector if needed
  // Example: log iframe content (if exists)
  // console.log(await frameHandle.locator('body').innerText());

  // Assertions
  await expect(page1).toHaveTitle(/Example Domain/);
  await expect(page2).toHaveTitle(/Playwright/);
});
