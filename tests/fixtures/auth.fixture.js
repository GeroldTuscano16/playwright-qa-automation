const { test: base } = require('@playwright/test');

exports.test = base.extend({
  loggedInPage: async ({ page }, use) => {
    // Login steps
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Verify login
    await page.waitForSelector('.inventory_list');

    // Provide page to test
    await use(page);
  },
});

exports.expect = base.expect;
