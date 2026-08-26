import { test, expect, chromium } from "@playwright/test";

test("Handle Authenticated Popups", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext({ httpCredentials: { username: 'admin', password: 'admin' } });
    const page = await context.newPage();

    //approach 1: - By embedding/injecting username and password to URL

    // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    // await page.waitForLoadState() //this will wait for page to load completely
    // await expect(page.locator("text=Congratulations")).toBeVisible();

    // await page.waitForTimeout(3000);

    //approach 2: - By passing credentials to the browser context

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState() //this will wait for page to load completely
    await expect(page.locator("text=Congratulations")).toBeVisible();
    await page.waitForTimeout(3000);

})