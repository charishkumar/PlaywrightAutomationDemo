import { test, expect } from '@playwright/test';

    test('Tags in Playwright1', {tag: ['@SmokeTesting']}, async ({ page }) => {
        //Navigage to URL
        await page.goto('https://search.yahoo.com/');
        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
        await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
        await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
        await expect(page).toHaveTitle(/Playwright by testers talk/)
    })