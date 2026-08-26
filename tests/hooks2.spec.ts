import { test, expect, Page, Locator } from "@playwright/test";

/*
open application                --beforeAll

    login                       --beforeEach
        find number of products
    logout                      --afterEach

    login                       --beforeEach
        add products to the cart.
    logout                      --afterEach

close application               --afterAll

*/

//since we have to use page fixture accross the project, we need to declare it as global variable and access it accross

let page: Page;

test.beforeAll('OpenApplication', async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");
})

test.afterAll('Close Application', async ({ }) => {
    await page.close();
})

test.beforeEach('Login To Application', async () => {
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("button[onclick='logIn()']").click();
    await page.waitForTimeout(3000);
})

test.afterEach('Logout of Application', async () => {
    await page.locator("#logout2").click();
    await page.waitForTimeout(3000);
})

test.describe("myGroup", async () => {
    test('Find Number of Phone Products', async () => {

        await page.locator("a:has-text('Phones')").click();
        await page.waitForTimeout(3000);
        const noOfPhones: Locator[] = await page.locator('div#tbodyid a.hrefch').all();
        console.log("Num. of Phones:", noOfPhones.length);

        for (let i = 0; i < noOfPhones.length; i++) {
            console.log("Name of the phone: ", await noOfPhones[i].innerText())
        }
        expect(noOfPhones.length).toBe(7);
    })

    test('Add Product to the Cart', async () => {

        await page.locator("a[class='hrefch']:has-text('Iphone 6 32gb')").click()
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Product added');
            await dialog.accept();
        });
        await page.locator("a:has-text('Add to cart')").click();
    })
})