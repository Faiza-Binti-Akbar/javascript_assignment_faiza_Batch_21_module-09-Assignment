// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Folder where your test files live
  testDir: './tests',

  // Maximum time one test can run (30 seconds)
  timeout: 30 * 1000,

  // Maximum time expect() waits for a condition
  expect: {
    timeout: 5000,
  },

  // Run test files in parallel
  fullyParallel: true,

  // Retry failed tests (0 = no retries, good for learning)
  retries: 0,

  // Reporter: 'html' creates a report, 'list' prints results in the terminal
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    // Base URL so you can use page.goto('/') in your page objects
    baseURL: 'https://www.saucedemo.com',

    // Run with a visible browser? Set to false to watch tests run
    headless: true,

    // Capture helpful artifacts only when a test fails
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  // Run tests only in Chromium
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});