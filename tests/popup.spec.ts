import { test, expect, chromium } from "@playwright/test";

test("Handle Popups", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    //handling multiple popups
    await page.waitForEvent('popup');
    await page.locator("#PopUp").click();

    await Promise.all([page.waitForEvent('popup'), await page.locator("#PopUp").click()]);
    await page.waitForTimeout(3000);

    const allWindows = context.pages();
    console.log("Number of Browsers: ", allWindows.length);

    //to print all the URLs of the windows opened
    console.log("Parent Window URL: ", allWindows[0].url());
    console.log("PopUp1 Window URL: ", allWindows[1].url());
    console.log("PopUp2 Window URL: ", allWindows[2].url());

    //to close all the browser window / to perform any action on a specific window
    for (let i = 0; i < allWindows.length; i++) {
        if ((await allWindows[i].title()).includes("Playwright")) {
            await allWindows[i].locator(".getStarted_Sjon").click();
            await allWindows[i].close();
        }
    }
    await page.waitForTimeout(3000);
})