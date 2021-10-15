import { test } from '@playwright/test';
const playwright = require('playwright');

test('basic test', async ({ page }) => {
  try {
    await page.goto('https://12gobiking.nl/racefietsen', {timeout: 100000});
    await page.goto('https://12gobiking.nl/racefietsen', {timeout: 100000});
  } catch (error) {
    if (error instanceof playwright.errors.TimeoutError)
      console.log("Timeout!")
  }
  await browser.close();
});
