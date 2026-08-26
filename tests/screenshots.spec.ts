import { test, expect } from "@playwright/test";

test("Screenshots demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    //to take visible length screenshot.
    const timestamp = Date.now();
    await page.screenshot({ path: 'screenshots/homepage_' + timestamp + '.png' });

    //to take the full page screenshot.
    await page.screenshot({ path: 'screenshots/homepage_full_' + timestamp + '.png', fullPage: true });

    //to take screenshot of a particular webelement

    await page.locator("div#nivo-slider").screenshot({ path: 'screenshots/nivoSliderImage_' + timestamp + '.png' })

    // or

    const logo = page.locator("div#nivo-slider");
    await logo.screenshot({ path: 'screenshots/nivoSliderImage_' + timestamp + '.png' })

    //to capture screenshot of a section in a page.

    await page.locator("div.product-grid").screenshot({ path: 'screenshots/productgrid_' + timestamp + '.png' })
})


test("Screenshots From config file demo", async ({ page }) => {

  await page.goto('https://demoblaze.com/index.html');

  // asserting the logo whether screen has loaded properly
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // asserting that logout link appears after successful login
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

  // asserting whether welcome message is appearing properly
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');

  await page.getByRole('link', { name: 'Log out' }).click();
});