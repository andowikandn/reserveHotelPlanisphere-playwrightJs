import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';
config();

export default defineConfig({
  testDir: './src/tests',
  testMatch: '**/*.spec.js',
  fullyParallel: true,
  workers: 1,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: true,
    viewport: null,
    launchOptions: {
      args: ['--no-sandbox'],
      trace: 'on-first-retry',
      slowMo: 0,
    }
  },
  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    ...(process.env.CI ? [] : [
      {
        name: 'WebKit',
        use: {
          browserName: 'webkit',
          ...devices['Desktop Safari'],
        },
      },
    ]),
  ],
});