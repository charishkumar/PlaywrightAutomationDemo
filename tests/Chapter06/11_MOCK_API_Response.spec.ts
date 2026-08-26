import { test, expect } from '@playwright/test'

test('Mock API Response in Playwright', async ({ page }) => {
    await page.route('*/**/api-mocking/api/v1/fruits', async route => {

        // The callback function takes a single parameter, which is an object that contains information about the intercepted request.
        //Mock API Request -  create a mock request with the desired data
        const json: any[] = [
            { name: "Apple", id: 12 },
            { name: "Orange", id: 13 },
            { name: "Banana", id: 14 },
            { name: "Strawberry", id: 15 },
            { name: "Grapes", id: 16 }
        ]
        await route.fulfill({ json });    // The fulfill method is used to send a response back to the intercepted request. It takes an object as a parameter, which can contain various properties such as status, headers, and body. In this case, we are sending a JSON response with the mocked data.
    });

    // Navigate to the page that makes the API request
    await page.goto('https://demo.playwright.dev/api-mocking/');

    // Wait for the API request to complete and the response to be rendered on the page
    await page.waitForResponse('*/**/api-mocking/api/v1/fruits');

    //verify that the mocked response is displayed on the page

    expect(await page.getByText('Apple')).toBeVisible();
    expect(await page.getByText('Orange')).toBeVisible();
    expect(await page.getByText('Banana')).toBeVisible();
    expect(await page.getByText('Strawberry')).toBeVisible();
    expect(await page.getByText('Grapes')).toBeVisible();

});