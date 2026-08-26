import {test, expect} from '@playwright/test';

test('Locators Test Case1', async({page}) => {

    //Navigate to URL

    //await page.goto('https://github.com/BakkappaN');

    // getByRole() method is used to locate the element by its role and name
    // await page.getByRole('link', {name:'Sign in'}).click();

    //get By label() method is used to locate the element by its label text
    // await page.getByLabel('Homepage', {exact: true}).click();

    //Get by AltText() method is used to locate the element by its alt text
    //await page.getByAltText("View BakkappaN's full-sized avatar").click();

    //Get by TestId() method is used to locate the element by its test id
    // await page.getByTestId('repositories').first().click();

    //Get by Text() method is used to locate the element by its text
//    await page.getByText('Sign up').click();

    //Get by Placeholder(), XPath and CSS Selector
        //Navigate to URL
        await page.goto("https://www.youtube.com/@testerstalk");

        //Get by Placeholder() method is used to locate the element by its placeholder text
        
        await page.getByPlaceholder("Search").fill("playwright MCP");
      //  await page.getByLabel('Search').nth(3).click();
        await page.locator("//button[@title='Search']//div").click();
        await page.locator("yt-formatted-string:has-text('#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot')").screenshot({path: './screenshots/PMCPScreenshot.png'});
        await expect (page.locator("yt-formatted-string:has-text('#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot')")).toBeVisible();;


        //Get by XPath() method is used to locate the element by its XPath
        //await page.locator('//yt-formatted-string[text()="Sign up"]').click();

        //Get by CSS Selector() method is used to locate the element by its CSS Selector
        // await page.locator('yt-formatted-string:has-text("Sign up")').click();
        

});