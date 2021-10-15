import { test, errors } from '@playwright/test';

test('basic test', async ({ page }) => {
  try {
    await page.goto('https://12gobiking.nl/racefietsen');
    await page.goto('https://12gobiking.nl/racefietsen', {timeout: 10000});
  } catch (error) {
    if (error instanceof errors.TimeoutError)
      console.log("Timeout!")
  }
});
