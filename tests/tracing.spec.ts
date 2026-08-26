import { test, expect } from "@playwright/test";

test("Tracing From config file demo", async ({ page, context }) => {

  context.tracing.start({screenshots :true, snapshots:true});
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
  context.tracing.stop({path: 'test-results/trace.zip'});
});