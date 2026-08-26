import { test, expect } from '@playwright/test';

test('Keyboard Actions in Playwright', async ({ page }) => {
    //Go to the URL
    const timestamp = Date.now();
    await page.goto('https://search.yahoo.com/');

    //Enter action from keyboard
    await page.getByRole('combobox', { name: 'Search query' }).click();
    await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
    // await page.goBack();

    await page.waitForTimeout(2000);

       //Selecting and Deleting action from keyboard
    await page.getByPlaceholder("Search the web").click();
    await page.getByPlaceholder("Search the web").press('Meta+A');
    await page.getByPlaceholder("Search the web").press('Delete');

    await page.goto('https://search.yahoo.com/');
    await page.getByRole('combobox', { name: 'Search query' }).click();
    await page.getByRole('combobox', { name: 'Search query' }).press('Tab')
    await page.getByRole('combobox', { name: 'Search query' }).press('Tab')
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')

    await page.waitForTimeout(2000);

});