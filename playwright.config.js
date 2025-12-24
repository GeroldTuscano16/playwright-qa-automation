const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});
