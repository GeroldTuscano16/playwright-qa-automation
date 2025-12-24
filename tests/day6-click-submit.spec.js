const { test, expect } = require('@playwright/test');

test('Day 6 - Click button and submit form', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/html_forms.asp'); 
  await page.locator('input[name="firstname"]').fill('John');
  await page.locator('input[name="lastname"]').fill('Doe');
  await page.locator('input[type="submit"]').first().click(); // click first submit button
});
