import { test } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://12gobiking.nl/racefietsen');
  await page.goto('https://12gobiking.nl/racefietsen');
});
