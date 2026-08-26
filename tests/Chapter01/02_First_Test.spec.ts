//Import playwright module.
import { firefox } from 'playwright';
import { test, expect } from '@playwright/test'
import { time } from 'node:console';
import { reverse } from 'node:dns';

//Write test case
// Open Google.com and serach for Playwright with Testerstak > On the result page > Click on the Testters talk playwright youtube playlist > validate the Page title.

test('My First Playwright Test', async ({ page }) => {
    
    //Go to the URL
    const timestamp = Date.now();
    await page.goto('https://www.bing.com');
    // await page.screenshot({ path: 'what-playwright-sees.png', fullPage: true });
    await page.screenshot({ path: 'screenshots/what-playwright-sees_' + timestamp + '.png', fullPage: true });
    await page.waitForLoadState('domcontentloaded');
    
    //console.log(await page.content()); // dumps full HTML — search for "accept" or "consent"
    //Search with Keywrods
    await page.waitForTimeout(5000)


        await page.getByRole('combobox', { name: 'Enter your search here -' }).click();
        await page.getByRole('combobox', { name: 'Enter your search here -' }).fill('playwright by testers talk');
        await page.getByRole('combobox', { name: 'Enter your search here -' }).press('Enter')

        //Click on Playlist URL
        await page.getByRole('link', { name: 'Playwright by Testers Talk - YouTube', exact: true }).click()

        //Validate the webpage title
        await expect(page).toHaveTitle('playwright by testers talk - Search')
    });