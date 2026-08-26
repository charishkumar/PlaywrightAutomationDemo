import { test, expect } from "@playwright/test";

//testData:
const searchData: string[] = ['laptop', 'Gift card', 'smartphone', 'computer']

//regular for of loop of arrays
for (let item of searchData) {
    test(`search test for ${item} using for of`, async ({ page }) => {

        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator("#small-searchterms").fill(item);        //fill the search box
        await page.locator("input.button-1[value='Search']").click();   // click on search button
        expect.soft(await page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true }); //asserting whether the product is appearing.
    })
}

//using foreach function of arrays.

searchData.forEach((item) => {
    test(`search test for ${item} using forEach method`, async ({ page }) => {

        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator("#small-searchterms").fill(item);        //fill the search box
        await page.locator("input.button-1[value='Search']").click();   // click on search button
        expect.soft(await page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true }); //asserting whether the product is appearing.
    })
})

//using describe block
test.describe("searching items", async () => {
    searchData.forEach((item) => {
        test(`search test for ${item}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/");
            await page.locator("#small-searchterms").fill(item);        //fill the search box
            await page.locator("input.button-1[value='Search']").click();   // click on search button
            expect.soft(await page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true }); //asserting whether the product is appearing.
        })
    })

})