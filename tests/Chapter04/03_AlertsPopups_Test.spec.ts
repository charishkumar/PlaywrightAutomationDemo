import {test, expect} from '@playwright/test';

test('Handling Alerts in Playwright', async({page}) => {

    //Navigate to the page with alerts
    await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/#alerts")
    // ('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Alert Message: ${dialog.message()}`);
        console.log(`Alert Message Type: ${dialog.type()}`);
    })
    await page.getByText('See an example alert', { exact: true }).click();
})

test('Handling Popups in Playwright', async({page}) => {

    //Navigate to the page with alerts
    await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/#alerts")
    // ('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', dialog => {
        // dialog.accept();
        dialog.dismiss();
        console.log(`Popup Message: ${dialog.message()}`);
        console.log(`Popup Message Type: ${dialog.type()}`);
    })
    await page.getByText('See a sample confirm', { exact: true }).click();
})

test('Handling PromptPopup in Playwright', async({page}) => {

    //Navigate to the page with alerts
    await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/#alerts")
    // ('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', async(dialog) => {
        console.log(`Prompt Message: ${dialog.message()}`);
        console.log(`Prompt Message Type: ${dialog.type()}`);
        dialog.accept('Playwright Test');
    })
    await page.getByText('See a sample prompt', { exact: true }).click();
})