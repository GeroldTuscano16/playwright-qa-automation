const { test, expect } = require('@playwright/test');
const path = require('path');

test('Day 16 - Iframe and nested frames handling', async ({ page }) => {

  // 1️⃣ Build absolute file system path
  const filePath = path.resolve(__dirname, '../test-pages/iframe-demo.html');

  // 2️⃣ Convert to proper file:// URL (Windows-safe)
  const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');

  console.log('Opening:', fileUrl);

  // 3️⃣ Navigate
  await page.goto(fileUrl);

  // 4️⃣ Verify main page
  await expect(page.locator('h1')).toHaveText('Main Page');

  // 5️⃣ Access iframe
  const iframe = page.frameLocator('iframe');

  // 6️⃣ Verify iframe content
  await expect(iframe.locator('h1')).toHaveText('Iframe Header');
  await expect(iframe.locator('p')).toHaveText('This is inside the iframe.');

});
