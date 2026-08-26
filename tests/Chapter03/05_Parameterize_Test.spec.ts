import { test, expect } from '@playwright/test';
import { time } from 'node:console';

const serarchKeywords = ['Playwright by Testers Talk', 'Cypress by Testers Talk', 'API Testing by Testers talk'];

for (const keyword of serarchKeywords) {

    test(`Parameterize Tests in Playwright1 - ${keyword}`, async ({ page }) => {
        //Navigage to URL
        await page.goto('https://search.yahoo.com/');
        await page.getByRole('combobox', { name: 'Search query' }).click({timeout: 10000});
        await page.getByRole('combobox', { name: 'Search query' }).fill(keyword, {timeout: 10000});
        await page.getByRole('combobox', { name: 'Search query' }).press('Enter', {timeout: 10000});
        //await page.locator(`//h3[@style='display:block']/span[starts-with(text(), '${keyword.toLowerCase()}')]`).click();
        await page.locator(`(//span[contains(text(), '${keyword}')])[1]`).click();
        
        await expect(page).toHaveTitle(new RegExp(keyword))
    })

}