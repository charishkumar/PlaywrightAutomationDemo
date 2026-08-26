import {test, expect} from '@playwright/test';

test('Multiple browsers/tabs in Play Test', async({page, browser}) => {

    await page.goto('https://search.yahoo.com/');
    await page.getByRole('combobox', { name: 'Search query' }).click();
    await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
    await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
    await expect(page).toHaveTitle(/playwright by testers talk/)

    //create new browser context and page
    const context = await browser.newContext();
    const page2 = await context.newPage();
    await page2.goto('https://search.yahoo.com/');
    await page2.getByRole('combobox', { name: 'Search query' }).click();
    await page2.getByRole('combobox', { name: 'Search query' }).fill('cypress by testers talk');
    await page2.getByRole('combobox', { name: 'Search query' }).press('Enter')
    await page2.locator("//h3[@style='display:block']/span[starts-with(text(), 'Cypress by')]").click();
    await expect(page2).toHaveTitle(/cypress by testers talk/)

    //create new tab
    const newTab = await context.newPage();
    await newTab.goto('https://search.yahoo.com/');
    await newTab.getByRole('combobox', { name: 'Search query' }).click();
    await newTab.getByRole('combobox', { name: 'Search query' }).fill('selenium by testers talk');
    await newTab.getByRole('combobox', { name: 'Search query' }).press('Enter')
    await newTab.locator("//h3[@style='display:block']/span[starts-with(text(), 'Selenium by')]").click();
    await expect(newTab).toHaveTitle(/selenium by testers talk/)


})