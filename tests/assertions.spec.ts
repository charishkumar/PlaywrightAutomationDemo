import { test, expect } from "@playwright/test";

test("Playwright Assertions Demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    //Auto retrying assertions.
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");        
    await expect(page.locator("text=Welcome to our store")).toBeVisible({ timeout: 10000 });
    await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText("Featured products");

    //non-retrying assertions

    const title = await page.title();
    expect (title.includes("Demo Web Shop")).toBeTruthy();

    const welcomeText = await page.locator('p:has-text("Welcome to the new Tricentis store!")').textContent();
    expect (welcomeText).toBe('Welcome to the new Tricentis store!');

    //Negating matches -- can be used for both auto-retrying assertions and non-retrying assertions
    await expect(page.locator("text=Welcome to our store")).not.toBeVisible(); 
    expect(welcomeText).not.toContain('Welcome');

})