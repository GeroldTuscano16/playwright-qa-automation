class WikiPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#search-input');
    this.searchButton = page.locator('button[type="submit"]');
    this.resultHeading = page.locator('#result-heading');
  }

  async open() {
    // Use absolute local path for stability
    await this.page.goto(`file://${__dirname.replace(/\\/g, '/')}/../test-pages/wiki-demo.html`);
  }

  async search(query) {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  async getResultHeading() {
    return await this.resultHeading.textContent();
  }
}

module.exports = { WikiPage };
