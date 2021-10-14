/*
 * Copyright © Reach Digital (https://www.reachdigital.io/)
 * See LICENSE.txt for license details.
 */
import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testMatch: ['**.test.ts'],
  projects: [
    {
      name: 'android',
      use: { browserName: 'chromium', ...devices['Moto G4'] },
    },
    {
      name: 'iphone',
      use: { browserName: 'webkit', ...devices['iPhone 12'] },
    },
    {
      name: 'chrome',
      use: { browserName: 'chromium', viewport: { width: 1280, height: 1280 } },
    },
  ],
}

export default config
