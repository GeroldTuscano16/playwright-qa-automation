const { test, expect } = require('./fixtures/auth.fixture');

test('Day 22 - Access dashboard using fixture', async ({ loggedInPage }) => {
  await expect(loggedInPage.locator('.inventory_list')).toBeVisible();
});
