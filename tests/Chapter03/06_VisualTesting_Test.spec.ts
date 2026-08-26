import { test, expect } from '@playwright/test';

    test('Visual Comparision Testing in Playwright', async ({ page }) => {
        //Navigage to URL
        await page.goto('https://github.com/login');
        await expect(page).toHaveScreenshot('GitHubLoginPage.png')

        await (page.locator("//input[@id='login_field']")).fill('Playwright by testers talk')
        await expect(page).toHaveScreenshot('GitHubLoginPage.png')

    })