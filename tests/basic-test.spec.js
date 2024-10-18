const { test, expect } = require('@playwright/test');

test('homepage has correct title', async ({ page }) => {
  // Navigate to the Hexo site
  await page.goto('https://jg847.github.io/is373hexo');

  // Assert the page title
  const title= await page.title();
  expect(title).toBe('Student Guide');
});

//Table of Contents
//Testing Title
test('Testing ToC Title', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/README/'); // Replace with your Hexo site's URL
  await expect(page).toHaveTitle('Table of Contents | Student Guide'); // Replace with the actual title
});
//Testing Header
test('Testing Toc Header', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/README/'); // Replace with the actual page URL
  const articleHeading = page.locator('h1', { hasText: 'IS373' }); // More specific locator
  await expect(articleHeading).toHaveText('IS373'); // Check for the correct text in the heading
});

//Kernel
//Testing Title
test('Testing Kernel Title', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/kernel/'); // Replace with your Hexo site's URL
  await expect(page).toHaveTitle('Kernel | Student Guide'); // Replace with the actual title
});

//Testing Header
test('Testing Kernel Header', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/kernel/'); // Replace with the actual page URL
  const articleHeading = page.locator('h1', { hasText: 'What is a Kernel?' }); // More specific locator
  await expect(articleHeading).toHaveText('What is a Kernel?'); // Check for the correct text in the heading
});

//Virtualization
//Testing Title
test('Testing Virtualization Title', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/virtualization/'); // Replace with your Hexo site's URL
  await expect(page).toHaveTitle('Virtualization | Student Guide'); // Replace with the actual title
});

//Testing Header
test('Testing Virtualization Header', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/virtualization/'); // Replace with the actual page URL
  const articleHeading = page.locator('h1', { hasText: 'What is Virtualization?' }); // More specific locator
  await expect(articleHeading).toHaveText('What is Virtualization?'); // Check for the correct text in the heading
});

//WSL2
//Testing Title
test('Testing WSL2 Title', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/wsl2/'); // Replace with your Hexo site's URL
  await expect(page).toHaveTitle('WSL2 | Student Guide'); // Replace with the actual title
});

//Testing Header
test('Testing WSL2 Header', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/wsl2/'); // Replace with the actual page URL
  const articleHeading = page.locator('h1', { hasText: 'What is WSL2?' }); // More specific locator
  await expect(articleHeading).toHaveText('What is WSL2?'); // Check for the correct text in the heading
});

//VirtualBox
//Testing Title
test('Testing VirtualBox Title', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/virtualbox/'); // Replace with your Hexo site's URL
  await expect(page).toHaveTitle('VirtualBox | Student Guide'); // Replace with the actual title
});

//Testing Header
test('Testing VirtualBox Header', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/virtualbox/'); // Replace with the actual page URL
  const articleHeading = page.locator('h1', { hasText: 'What is VirtualBox?' }); // More specific locator
  await expect(articleHeading).toHaveText('What is VirtualBox?'); // Check for the correct text in the heading
});

//VirtualBox vs WSL2
//Testing Title
test('Testing VirtualBox vs WSL2 Title', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/wsl2vsvirtualbox/'); // Replace with your Hexo site's URL
  await expect(page).toHaveTitle('VirtualBox vs WSL2 | Student Guide'); // Replace with the actual title
});

//Testing Header
test('Testing VirtualBox vs WSL2 Header', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/wsl2vsvirtualbox/'); // Replace with the actual page URL
  const articleHeading = page.locator('h1', { hasText: 'Differences' }); // More specific locator
  await expect(articleHeading).toHaveText('Differences'); // Check for the correct text in the heading
});

//Containerization
//Testing Title
test('Testing Containerization Title', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/containerization/'); // Replace with your Hexo site's URL
  await expect(page).toHaveTitle('Containerization | Student Guide'); // Replace with the actual title
});

//Testing Header
test('Testing Containerization Header', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/containerization/'); // Replace with the actual page URL
  const articleHeading = page.locator('h1', { hasText: 'What are Containers?' }); // More specific locator
  await expect(articleHeading).toHaveText('What are Containers?'); // Check for the correct text in the heading
});

//Kuber vs Docker
//Testing Title
test('Testing Kuber vs Docker Title', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/dockervskuber/'); // Replace with your Hexo site's URL
  await expect(page).toHaveTitle('Kubernetes vs Docker | Student Guide'); // Replace with the actual title
});

//Testing Header
test('Testing Kuber vs Docker Header', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/dockervskuber/'); // Replace with the actual page URL
  const articleHeading = page.locator('h1', { hasText: 'Comparing Kubernetes and Docker' }); // More specific locator
  await expect(articleHeading).toHaveText('Comparing Kubernetes and Docker'); // Check for the correct text in the heading
});

//GitHub Actions
//Testing Title
test('Testing GitHub Actions Title', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/githubActions/'); // Replace with your Hexo site's URL
  await expect(page).toHaveTitle('GitHub Actions | Student Guide'); // Replace with the actual title
});

//Testing Header
test('Testing GitHub Actions Header', async ({ page }) => {
  await page.goto('https://jg847.github.io/is373hexo/2024/10/16/githubActions/'); // Replace with the actual page URL
  const articleHeading = page.locator('h1', { hasText: 'What are GitHub Actions?' }); // More specific locator
  await expect(articleHeading).toHaveText('What are GitHub Actions?'); // Check for the correct text in the heading
});