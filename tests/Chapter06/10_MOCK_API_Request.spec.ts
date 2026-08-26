import { test, expect } from '@playwright/test'

test('Mock API Request in Playwright', async ({ page }) => {
    await page.route('*/**/api-mocking/api/v1/fruits', async route => {
        //We are using route.fetch() function to get the response from the webpage
        const response = await route.fetch(); // The fetch method is used to continue the intercepted request and send it to the server. It takes no parameters and returns a promise that resolves to the response from the server.
        //Converting response into JSON object
        const json = await response.json(); // The json method is used to parse the response body as JSON. It returns a promise that resolves to the parsed JSON object.
        
        //adding required response in the JSON objects
        json.push({ name: "Apple", id: 12 }); // The push method is used to add a new object to the end of the array. In this case, we are adding a new fruit object with the name "Mango" and an id of 17.
        json.push({ name: "Orange", id: 13 });
        json.push({ name: "Banana", id: 14 });
        json.push({ name: "Strawberry", id: 15 });
        json.push({ name: "Grapes", id: 16 });
        
        //Sending the response
        await route.fulfill({response, json });    //The fullfill method is used to send a response back to the intercepted request. It takes an object as a parameter, which can contain various properties such as status, headers, and body. In this case, we are sending a JSON response with the modified data.
    });

    // Navigate to the page that makes the API request
    await page.goto('https://demo.playwright.dev/api-mocking/');


    //verify that the mocked response is displayed on the page

    await (expect(page.getByText('Apple').nth(1))).toBeVisible();
    await (expect(page.getByText('Orange').nth(1))).toBeVisible();
    await (expect(page.getByText('Banana').nth(1))).toBeVisible();
    await (expect(page.getByText('Strawberry').nth(1))).toBeVisible();
    await (expect(page.getByText('Grapes'))).toBeVisible();

});