import {test, expect, chromium} from "@playwright/test";

test("Browser Context Demo", async({})=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    console.log("Number of Pages created: ", context.pages().length);
    
    
    await page1.goto("https://ui.vision/demo/webtest/frames/");
    await expect (page1).toHaveTitle("Frames - Web Automation Test");
    await page1.waitForTimeout(5000);

    await page2.goto("https://selenium.dev/");
    await expect (page2).toHaveTitle("Selenium");
    await page2.waitForTimeout(5000);

})