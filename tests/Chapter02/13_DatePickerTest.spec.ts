import {test, expect} from '@playwright/test';

test('Date Picker in Playwright', async({page}) => {
    //navigate to the URL
    await page.goto('https://jqueryui.com/datepicker/');

    //Hardcode date in the date picker
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const tDate = `${month}/${day}/${date.getFullYear()}`;

    const iframe = page.frameLocator('.demo-frame');
    await iframe.locator('.hasDatepicker').click();
    await iframe.locator('.hasDatepicker').fill('06/04/2026');
    await page.waitForTimeout(2000);

    //Dynamically select date in the date picker
    
    await iframe.locator('.hasDatepicker').click();
    await page.waitForTimeout(2000);
    await iframe.locator('a.ui-state-highlight').click();
    await page.waitForTimeout(2000);

    //selecting a previous date from the date picker
    await iframe.locator('.hasDatepicker').click();
    await page.waitForTimeout(2000);
    await iframe.locator('a.ui-datepicker-prev').click();
    await page.waitForTimeout(2000);
    await iframe.locator("//a[@data-date='4']").click();

    //selecting a future date from the date picker
    await iframe.locator('.hasDatepicker').click();
    await page.waitForTimeout(2000);
    await iframe.locator('a.ui-datepicker-next').click();
    await page.waitForTimeout(2000);
    await iframe.locator("//a[@data-date='13']").click();
})