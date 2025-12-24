const login = async (page, username, password) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');
};

const logout = async (page) => {
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
};

module.exports = {
  login,
  logout
};
