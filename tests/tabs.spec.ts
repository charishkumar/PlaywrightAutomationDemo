import { test, expect, chromium } from "@playwright/test";

test("Handle Tabs", async () => {

    const browser = await chromium.launch();                //create browser
    const context = await browser.newContext();             //create context

    const parentPage = await context.newPage();
    await parentPage.goto("https://testautomationpractice.blogspot.com/")

    //these 2 statements should go parallely
    // context.waitForEvent('page');               //event
    // await parentPage.locator("button:has-text('New Tab')").click();    //this will open new tab / page.

    const [childPage] = await Promise.all([context.waitForEvent('page'), parentPage.locator("button:has-text('New Tab')").click()]);

    //approach 1  -- using context (switch between pages and get title.)

    const pages = context.pages();
    console.log("Number of Pages: ", pages.length);

    console.log("Title of Parent page: ", await pages[0].title())
    console.log("Title of Child page: ", await pages[1].title())

    //approach 2    -- using page itsef
    console.log("Title of Parent page: ", await parentPage.title())
    console.log("Title of Child page: ", await childPage.title())
})