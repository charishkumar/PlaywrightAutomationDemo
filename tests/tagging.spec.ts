import {test, expect} from "@playwright/test"

//single tag being assigned for a test.  --- 1st way / old way of assigning tags
test('@sanity To check the title of the Home Page', async({page})=>{
    await page.goto("https://www.google.com");
    await page.waitForTimeout(3000);
    await expect (page).toHaveTitle('Google');
})

//multiple tag being assigned for a test  --- 1st way / old way of assigning tags
test('@sanity @smoke To Validate the title of the Home Page', async({page})=>{
    await page.goto("https://www.google.com");
    await page.waitForTimeout(3000);
    await expect (page).toHaveTitle('Google');
})

//single tag being assigned for a test.  --- 2nd way / most used way of assigning tags
test('To verify the title of the Home Page', {tag: '@smoke'}, async({page})=>{
    await page.goto("https://www.google.com");
    await page.waitForTimeout(3000);
    await expect (page).toHaveTitle('Google');
})

//multiple tag being assigned for a test  --- 2nd way / most used way of assigning tags
test('To check Top Recommendations', {tag: ['@sanity', '@regression']}, async({page})=>{
    await page.goto("https://www.google.com");
    await page.waitForTimeout(3000);
    await expect (page).toHaveTitle('Google');
    await page.locator("text='Store'").click();
    await expect(page.locator("text='Popular on the Google Store.'")).toHaveText('Popular on the Google Store.');
})