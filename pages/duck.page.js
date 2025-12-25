class DuckPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[name="q"]');
    this.results = page.locator('article h2 a');
  }

  async open() {
    await this.page.goto('https://duckduckgo.com/');
  }

  async search(query) {
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');

    // Wait for results page navigation
    await this.page.waitForURL(/duckduckgo\.com\/\?q=/);

    // Wait for results to appear
    await this.results.first().waitFor({ state: 'visible' });
  }

  async getFirstResultText() {
    return await this.results.first().innerText();
  }
}

module.exports = { DuckPage };
