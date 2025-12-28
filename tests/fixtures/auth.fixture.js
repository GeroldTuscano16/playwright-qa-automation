const base = require('@playwright/test');

exports.test = base.test.extend({
  loggedInPage: async ({ page }, use) => {
    // Go to app
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Ensure login succeeded
    await page.waitForSelector('.inventory_list');

    // Provide the page to the test
    await use(page);
  }
});

exports.expect = base.expect;
