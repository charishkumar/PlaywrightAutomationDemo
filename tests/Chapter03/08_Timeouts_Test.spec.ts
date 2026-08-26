import {test, expect} from '@playwright/test';

test('Timeouts in Playwright', async({page}) => {

    test.setTimeout(120000);  //To change the timeout for this test only (default is 60000 ms / 1 minute) --Harish
    //Navigage to URL
    await page.goto("https://www.youtube.com");

    // Assert the URL, title, text, value, count, checked, selected, focused, class, attribute, style, and screenshot
    await expect(page).toHaveURL("https://www.youtube.com/");          //to check if the URL is same as expected
    await expect(page).toHaveTitle("YouTube", {timeout: 20000});       //to check if the title is same as expected and waits till 20 seconds for the title to be same as expected

})