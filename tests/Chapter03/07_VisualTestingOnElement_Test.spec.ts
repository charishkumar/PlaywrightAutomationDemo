import { test, expect } from '@playwright/test';

test('Element Visual Comparision Testing in Playwright', async ({page}) => {
        //Navigage to URL
        await page.goto('https://github.com/login');
    
        //await (page.locator('[div#authentication-body.authentication-body--with-form.new-session]')).fill('Playwright by testers talk')
        const element = page.locator("div.authentication-body");
        await expect(element).toHaveScreenshot('GitHubLoginIDTextBox.png')
        await element.locator("//input[@id='login_field']").fill('Playwright by testers talk');
        await expect(element).toHaveScreenshot('GitHubLoginIDTextBox.png')
    })