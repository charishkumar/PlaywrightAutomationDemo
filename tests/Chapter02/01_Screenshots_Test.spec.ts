import { test, expect } from '@playwright/test';

test('Capturing Screenshots Test Case', async ({ page }) => {

  //Go to URL
  await page.goto('https://www.youtube.com/@testerstalk');

  //Take a screenshot of an Element

  await page.locator("#page-header-container").screenshot({ path: './screenshots/ElementScreenshot.png' });
  
  //Take a screenshot of a page

  await page.screenshot({ path: './screenshots/PageScreenshot.png' });

  //Take a screenshot of an entire page

  await page.screenshot({ path: './screenshots/FullPageScreenshot.png', fullPage: true });

});