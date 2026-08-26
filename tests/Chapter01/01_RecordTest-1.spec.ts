import { test, expect } from '@playwright/test';

  test('AssertLoginFailureErrorMessage', async ({ page }) => {
    await test.step('Navigating to the Application', async () => {
      await page.goto('https://github.com/');
    });
    await test.step('Login to the Application', async () => {
      await page.getByRole('link', { name: 'Sign in' }).click();
      await page.getByRole('textbox', { name: 'Username or email address' }).fill('testterstalk');
      await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
      await page.getByRole('textbox', { name: 'Password' }).fill('test123');
      await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    });

    await test.step('Validating the Error Message', async () => {
      await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    });
  });