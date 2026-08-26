//Import playwright module.
import { firefox } from 'playwright';
import { test, expect } from '@playwright/test'
import { time } from 'node:console';
import { reverse } from 'node:dns';

//Write test case
// Open Search.yahoo.com and serach for Playwright with Testerstak > On the result page > Click on the Testters talk playwright youtube playlist > validate the Page title.

test('Record At Cursor Test', async ({ page }) => {

    await test.step('Navigating to the Application', async () => {
        //Go to the URL
        const timestamp = Date.now();
        await page.goto('https://search.yahoo.com/');
        // await page.screenshot({ path: 'what-playwright-sees.png', fullPage: true });
        await page.screenshot({ path: 'screenshots/what-playwright-sees_' + timestamp + '.png', fullPage: true });
        await page.waitForLoadState('domcontentloaded');
        //console.log(await page.content()); // dumps full HTML — search for "accept" or "consent"
    });

    await test.step('Searching for Playwright by Testers Talk', async () => {

        //Search with Keywrods

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
        await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
    });

    await test.step('Validating the Search Result', async () => {
        //Click on Playlist URL
        await page.getByRole('link', { name: 'YouTube https://www.youtube.' }).click()

        //Validate the webpage title
        await expect(page).toHaveTitle('playwright by testers talk - Yahoo Search Results')
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'YouTube https://www.youtube.' }).click();
        const page1 = await page1Promise;

        // const links = await page.getByRole('link').allTextContents();
        // console.log(links);

        await page.waitForLoadState('networkidle');
        await expect(page1.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
        //await expect (page.locator("//span[contains(text(),'Playwright API Testing Tutorial Crash Course 2024')]")).toBeVisible();
        await expect(page1.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();

        await expect(page1.getByLabel('#1 Playwright Tutorial Full Course 2026').first()).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
        await expect(page1.getByLabel('#2 Playwright API Testing Tutorial Crash Course 2024').first()).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
    });

});