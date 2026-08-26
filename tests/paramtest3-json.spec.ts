import { test, expect } from "@playwright/test";
import fs from "fs";

//how to read data from external file (json file).
const jsonPath = "testdata/data.json";
const loginTestData: any = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

//main test.

test.describe("Login test", () => {
    for (const { email, password, validity } of loginTestData) {
        test(`Login to Application Test using ${email} and ${password}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/");
            await page.locator('a[href="/login"]').click();
            await page.locator("#Email").fill(email);
            await page.locator("#Password").fill(password);
            await page.locator("input.button-1.login-button").click();
            if (validity.toLowerCase() === 'valid') {
                //Assert logout link is visible --it indicates successful login
                const logoutLink = page.locator('a[href="/logout"]');
                await expect(logoutLink).toBeVisible({ timeout: 5000 });
            }
            else {
                await page.waitForTimeout(3000);
                //assert that error message is visible.
                const errorMsg = page.locator(".validation-summary-errors");
                await expect(errorMsg).toBeVisible({ timeout: 5000 });
                //assert that user is still on login page.
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
            }
        });
    }
});