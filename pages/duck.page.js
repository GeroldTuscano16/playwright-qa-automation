class DuckPage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('input[name="q"]');
    this.results = page.locator('#links h2.result__title a');
  }

  async open() {
    await this.page.goto('https://duckduckgo.com/');
  }

  async search(text) {
    await this.searchBox.fill(text);
    await this.page.keyboard.press('Enter');

    // ✅ Wait for at least ONE result to exist
    await this.results.first().waitFor({ state: 'attached', timeout: 30000 });
  }

  async getFirstResultText() {
    return await this.results.first().innerText();
  }

  async getFirstResultURL() {
    return await this.results.first().getAttribute('href');
  }
}

module.exports = { DuckPage };
