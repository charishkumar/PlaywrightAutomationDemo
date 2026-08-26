import { test, expect } from '@playwright/test';

test('Test1', async ({ page }) => {

    await page.goto('https://search.yahoo.com/');
    await page.getByRole('combobox', { name: 'Search query' }).click();
    await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
    await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
    await expect(page).toHaveTitle(/playwright by testers talk/)
})

test('Test2', async ({ page }) => {
    expect(true).toBe(true)            //purposefully failing the test to check the rerun functionality
})

test('Test3', async ({ page }) => {
    expect(true).toBe(true)        //purposefully failing the test to check the rerun functionality
})
