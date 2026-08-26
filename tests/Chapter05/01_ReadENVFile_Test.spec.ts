import { test, expect } from '@playwright/test';

test('Reading ENV File Config in Playwirght', async ({ page }) => {
    await page.goto(`${process.env.YTURL}`);

    //Get by Placeholder() method is used to locate the element by its placeholder text

    await page.getByPlaceholder("Search").fill("playwright MCP");
    //  await page.getByLabel('Search').nth(3).click();
    await page.locator("//button[@title='Search']//div").click();
    await page.locator("yt-formatted-string:has-text('#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot')").screenshot({ path: './screenshots/PMCPScreenshot.png' });
    await expect(page.locator("yt-formatted-string:has-text('#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot')")).toBeVisible();;

})