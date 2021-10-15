import { test, errors } from '@playwright/test';

test('basic test', async ({ page }) => {
  try {
    await page.goto('https://12gobiking.nl/racefietsen', {timeout: 100000});
    await page.goto('https://12gobiking.nl/racefietsen', {timeout: 100000});
  } catch (error) {
    if (error instanceof errors.TimeoutError)
      console.log("Timeout!")
  }
});
