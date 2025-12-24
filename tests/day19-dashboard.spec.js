const { test, expect } = require('@playwright/test');

test('Day 19 - Open dashboard without login', async ({ page, context }) => {
  // ✅ Start tracing for this test
  await context.tracing.start({ screenshots: true, snapshots: true, sources: true });

  // Test steps
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();

  // ✅ Stop tracing and save to a file
  await context.tracing.stop({ path: 'trace-day19.zip' });
});

