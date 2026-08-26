import { test, expect } from '@playwright/test';

test('Iterating matching Elements in Playwright', async ({ page }) => {
    await page.goto('https://github.com/BakkappaN/');

    const elements = await page.$$('.repo');

    for (const element of elements) {
        console.log(await element.textContent());
    }
    console.log('-------------------------------------');
    for (let i = 0; i < elements.length; i++) {
        console.log(await elements[i].textContent());
    }
    console.log('-------------------------------------');

    const elements1 = await page.locator('.repo');
   for(let i =0; i<await elements1.count(); i++){
    console.log(await elements1.nth(i).textContent());
   }
    
});