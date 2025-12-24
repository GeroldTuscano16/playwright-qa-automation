const { test, expect } = require('@playwright/test');

test('Day 9 - Form elements (stable)', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit');

  // Switch to iframe
  const frame = page.frameLocator('#iframeResult');

  await frame.locator('input[name="fname"]').fill('John');
  await frame.locator('input[name="lname"]').fill('Doe');

  await frame.locator('input[type="submit"]').click();

  await expect(frame.locator('body')).toContainText('John');
});
