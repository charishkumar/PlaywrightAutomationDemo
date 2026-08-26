import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bing.com/?toHttps=1&redig=B7547EC72D87478CAF3CCDBF1509F071');
  await page.getByRole('combobox', { name: 'Enter your search here -' }).click();
  await page.getByRole('combobox', { name: 'Enter your search here -' }).fill('playwright by testers talk');
  await page.goto('https://www.bing.com/search?q=playwright+by+testers+talk&form=QBLH&sp=-1&ghc=1&lq=0&pq=playwright+by+testers+talk&sc=9-26&qs=n&sk=&cvid=F894F4B982C84FA89905C2DE14F39C3F');
});