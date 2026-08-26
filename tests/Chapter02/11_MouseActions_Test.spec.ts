import { test, expect } from '@playwright/test';

test('Mouse Actions in Playwright', async ({ page }) => {
    //Go to the URL
    const timestamp = Date.now();
    await page.goto('https://search.yahoo.com/');

    await page.getByRole('combobox', { name: 'Search query' }).click();
    await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')

    //left click
     await page.getByRole('heading', { level: 3, name: /Playwright by Testers Talk/ }).click({ button: 'left' });

    // middle button
     await page.getByRole('heading', { level: 3, name: /Playwright by Testers Talk/ }).click({ button: 'middle' });

    // right click
    await page.getByRole('heading', { level: 3, name: /Playwright by Testers Talk/ }).click({ button: 'right' });

    //mouse hover on any element.
    await page.waitForTimeout(5000);
    await page.getByLabel('Search by voice').first().hover();

    //mouse hover on any element.
    await page.waitForTimeout(5000);
    await page.getByLabel('Search by voice').first().dblclick();


    // const locator = page.getByLabel("Search by voice");
    // console.log(await locator.count());
    // await page.waitForTimeout(2000);

    // for (let i = 0; i < await locator.count(); i++) {
    //     console.log(await locator.nth(i).isVisible());
    //     if (await locator.nth(i).isVisible()) {
    //         await locator.nth(i).hover();
    //     }
    //     await page.waitForTimeout(2000);
    // }




    await page.waitForTimeout(2000);
});