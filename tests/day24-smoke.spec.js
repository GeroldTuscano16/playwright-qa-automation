const { test, expect } = require('./fixtures/auth.fixture');

test('Day 24 - Access inventory using custom fixture', async ({ loggedInPage }) => {
  await expect(loggedInPage.locator('.inventory_list')).toBeVisible();
});
