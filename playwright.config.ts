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
      use: { browserName: 'webkit', viewport: { width: 390, height: 664 }},
    },
    {
      name: 'chrome',
      use: { browserName: 'chromium', viewport: { width: 1280, height: 1280 } },
    },
  ],
  timeout: 120000,
}

export default config
