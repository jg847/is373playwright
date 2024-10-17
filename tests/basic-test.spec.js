const { test, expect } = require('@playwright/test');

test('homepage has correct title', async ({ page }) => {
  // Navigate to the Hexo site
  await page.goto('https://jg847.github.io/is373hexo');

  // Assert the page title
  await expect(page).toHaveTitle(/Student Guide/);
});