import { test, expect } from '@playwright/test';

test.describe('SmokeTesting', async () => {
    test('Test Reports in Playwright1', async ({ page }) => {
        //Navigage to URL
        await page.goto('https://search.yahoo.com/');
        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
        await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
        await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
        await expect(page).toHaveTitle(/playwright by testers talk/)
    })
})

test.describe('RegressionTesting', async () => {
    test('Test Reports in Playwright2', async ({ page }) => {
        //Navigage to URL
        await page.goto('https://search.yahoo.com/');
        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
        await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
        await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
        await expect(page).toHaveTitle(/playwright by testers talk/)
    })

    test('Test Reports in Playwright3', async ({ page }) => {
        //Navigage to URL
        await page.goto('https://search.yahoo.com/');
        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
        await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
        await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
        await expect(page).toHaveTitle(/playwright by testers talk/)
    })

        test('Test Reports in Playwright4', async ({ page }) => {
        //Navigage to URL
        await page.goto('https://search.yahoo.com/');
        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
        await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
        await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
        await expect(page).toHaveTitle(/playwright testscript by testers talk/)
    })
})


