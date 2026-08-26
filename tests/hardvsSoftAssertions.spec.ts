import { test, expect } from "@playwright/test";

test("Playwright Hard Assertions vs Soft Assertions Demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

// Hard Assertions
await expect (page).toHaveTitle("Demo Web Shop")
await expect (page).toHaveURL("https://demowebshop.tricentis.com/")
await expect (page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();

await page.waitForTimeout(5000);

// Soft Assertions
await expect.soft (page).toHaveTitle("Demo Web Shop1")
await expect.soft (page).toHaveURL("https://demowebshop.tricentis.com/")
await expect.soft (page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();

await page.waitForTimeout(5000);

})