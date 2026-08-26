import { test, expect } from '@playwright/test'

test('Mock API from HAR File in Playwright', async ({ page }) => {

    //Recording a HAR file for the API request and response using the routeFromHAR method. The HAR file is a JSON-formatted archive file that contains a record of the network requests and responses made by a web application. It can be used to mock API requests and responses in Playwright tests.
    //it takes 2 arguments, 1st argument is the path of the HAR file and 2nd argument is the URL of the API which we want to mock and set update flag to true to update the HAR file with the new response data. 
    // The update option is used to specify whether the HAR file should be updated with the new response data or not. If set to true, the HAR file will be updated with the new response data, and if set to false, the HAR file will remain unchanged.
    await page.routeFromHAR('./har/fruits.har', {
         url: '*/**/api/v1/fruits', 
         update: false 
        });

    //Navigate to the page that makes the API request
    await page.goto('https://demo.playwright.dev/api-mocking/');

    // Wait for the API request to complete and the response to be rendered on the page
    await page.waitForResponse('*/**/api-mocking/api/v1/fruits');

    //verify that the mocked response is displayed on the page
    await (expect(page.getByText('Strawberry'))).toBeVisible();

});