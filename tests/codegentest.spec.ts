import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 720,
    width: 1024
  }
});

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://demoblaze.com/index.html');
  //asserting the logo whether screen has loaded properly
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  //asserting that logout link appears after successful login.
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
//asserting the snapshot whether screen has loaded properly
  await expect(page.locator('#nava')).toMatchAriaSnapshot(`
    - link "PRODUCT STORE":
      - /url: index.html
      - img
      - text: ""
    `);
//asserting whether welcome message is appearing properly.
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
  await page.getByRole('link', { name: 'Log out' }).click();
});