import {test, expect} from '@playwright/test';

test.beforeAll(async ()=> {
    console.log("This will run before all the test cases in this file");
})

test.beforeEach(async({page}) => {
    console.log("This will run before each test case in this file");
    //Navigate to URL
    test.setTimeout(240000); // 4 minutes
    await page.goto('https://www.google.com/');
})

test.afterEach(async() => {
    console.log("This will run after each test case in this file");
})

test.afterAll(async () => {
    console.log("This will run after all the test cases in this file");
})

test('Hooks Test Case1', async({page}) => {

    //search with keywords
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.waitForTimeout(30000);
    await page.waitForTimeout(30000);
    
    //click on the link
    await page.getByRole('link', { name: /Playwright by Testers Talk/ }).click();

    //assertion
    await expect(page.getByRole('link', { name: /#1 Playwright Tutorial Full Course 2026/ })).toBeVisible();  

});

test('Hooks Test Case2', async({page}) => {
    //  //Navigate to URL
    // test.setTimeout(240000); // 4 minutes
    // await page.goto('https://www.google.com/');

    //search with keywords
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.waitForTimeout(30000);
    await page.waitForTimeout(30000);
    
    //click on the link
    await page.getByRole('link', { name: /Playwright by Testers Talk/ }).click();

    //assertion
    await expect(page.getByRole('link', { name: /#1 Playwright Tutorial Full Course 2026/ })).toBeVisible();

});