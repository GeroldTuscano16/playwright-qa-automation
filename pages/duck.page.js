class DuckPage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('input[name="q"]');
    this.results = page.locator('#links h2.result__title a');
  }

  async open() {
    await this.page.goto('https://duckduckgo.com/');
  }

  async search(query) {
  await this.page.goto('https://duckduckgo.com/', { waitUntil: 'domcontentloaded' });

  // Handle cookie popup if present
  const acceptBtn = this.page.locator('button:has-text("Accept")');
  if (await acceptBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await acceptBtn.click();
  }

  await this.searchInput.fill(query);
  await this.searchInput.press('Enter');

  // More reliable wait
  await this.page.waitForLoadState('networkidle');

  await this.results.first().waitFor({
    state: 'visible',
    timeout: 45000,
  });
}


  async getFirstResultText() {
    return await this.results.first().innerText();
  }

  async getFirstResultURL() {
    return await this.results.first().getAttribute('href');
  }
}

module.exports = { DuckPage };
