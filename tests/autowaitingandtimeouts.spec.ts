import { test, expect } from "@playwright/test";

test("Autowaiting and forcing", async ({ page }) => {

    //setting timeout for this test.
    test.setTimeout(60000);     // timeout settings locally to complete the test by 60 seconds
    test.slow(); // 90000 ms / 90seconds -- triple the time of default timeout
    await page.goto("https://demowebshop.tricentis.com/");

    //setting local expect/assertion timeout of 10 seconds.
    //For any actions, Autowait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/", { timeout: 10000 });        
    await expect(page.locator("text=Welcome to our store")).toBeVisible({ timeout: 10000 });

    //Actions -- Autowait works
    await page.locator("#small-searchterms").fill("Laptop", { force: true });  //search box force action -- It will not perform actionability checks
    await page.locator("input[value='Search']").click({ force: true });    // clickinng on search by force -- it will not perform actionability checks

})