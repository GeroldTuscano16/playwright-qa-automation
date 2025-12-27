const { test, expect } = require('@playwright/test');

test('Day 15 - Multi-context and popup exercise', async ({ browser }) => {
  // 1️⃣ Create a new context and page
  const context = await browser.newContext();
  const page1 = await context.newPage();

  // 2️⃣ Open the local stable page
  await page1.goto(`file://${__dirname.replace(/\\/g, '/')}/../test-pages/popup-demo.html`);

  // 3️⃣ Handle popup safely
  const [popup] = await Promise.all([
    page1.waitForEvent('popup'),
    page1.locator('#open-popup').click(),
  ]);

  // 4️⃣ Verify popup title
  await popup.waitForLoadState();
  console.log('Popup title:', await popup.title());
  expect(await popup.title()).toBe('Example Domain');

  // 5️⃣ Optionally, interact with popup
  // e.g., close it
  await popup.close();

  // 6️⃣ Close main page
  await page1.close();
  await context.close();
});
