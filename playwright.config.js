const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e-tests',
  testMatch: '*.spec.js',
  fullyParallel: true,
  retries: 1,
  workers: 3,
  reporter: 'html',
  use: {
    baseURL: 'https://confomap.com', // Target the live website
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  tsConfig: null,
});