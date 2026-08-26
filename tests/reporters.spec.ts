import { test, expect } from '@playwright/test';

test.beforeEach("Launching the Application", async ({page})=> {
    await page.goto("https://demowebshop.tricentis.com/");
})

// test.afterEachEach("Launching the Application", async ({page})=> {
//     await page.locator("").click();
// })

test('logotest', async ({ page }) => {
  await expect(page.locator("img[alt='Tricentis Demo Web Shop1']")).toBeVisible();
});

test('title test', async ({ page }) => {
  expect(await page.title()).toContain("Demo Web Shop");
});

test('search test', async ({ page }) => {
  await page.locator('#small-searchterms').fill("laptop");  // fill teh text in search box
  await page.locator("input[value='Search']").click();      // click on the button
  await expect.soft(page.locator('h2 a').nth(0))
    .toContainText("laptop", { ignoreCase: true });
});
