# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/10_MOCK_API_Request.spec.ts >> Mock API Request in Playwright
- Location: tests/Chapter06/10_MOCK_API_Request.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Apple')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Apple')

```

```yaml
- heading "Render a List of Fruits" [level=1]
- paragraph: This demo app renders a list of fruits. The tests for this app mock the api call to return only mocked data, intercept the request and add a new fruit to the response and use HAR files to mock the API
- paragraph:
  - link "Check out the tests for this repo":
    - /url: https://github.com/microsoft/playwright-examples/blob/main/tests/api-mocking/api-mocking.spec.ts
- paragraph:
  - link "Learn more on API mocking in Playwright":
    - /url: https://playwright.dev/docs/mock
- text: Loading...
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('Mock API Request in Playwright', async ({ page }) => {
  4  |     await page.route('*/**/api-mocking/api/v1/fruits', async route => {
  5  | 
  6  |         const response = await route.fetch(); // The fetch method is used to continue the intercepted request and send it to the server. It takes no parameters and returns a promise that resolves to the response from the server.
  7  |         const json = await response.json(); // The json method is used to parse the response body as JSON. It returns a promise that resolves to the parsed JSON object.
  8  | 
  9  |         json.push({ name: "Apple", id: 12 }); // The push method is used to add a new object to the end of the array. In this case, we are adding a new fruit object with the name "Mango" and an id of 17.
  10 |         json.push({ name: "Orange", id: 13 });
  11 |         json.push({ name: "Banana", id: 14 });
  12 |         json.push({ name: "Strawberry", id: 15 });
  13 |         json.push({ name: "Grapes", id: 16 });
  14 |         
  15 |         await route.fulfill({response, json });    //The fullfill method is used to send a response back to the intercepted request. It takes an object as a parameter, which can contain various properties such as status, headers, and body. In this case, we are sending a JSON response with the modified data.
  16 |     });
  17 | 
  18 |     // Navigate to the page that makes the API request
  19 |     await page.goto('https://demo.playwright.dev/api-mocking/');
  20 | 
  21 | 
  22 |     //verify that the mocked response is displayed on the page
  23 | 
> 24 |     expect(await page.getByText('Apple')).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
  25 |     expect(await page.getByText('Orange')).toBeVisible();
  26 |     expect(await page.getByText('Banana')).toBeVisible();
  27 |     expect(await page.getByText('Strawberry')).toBeVisible();
  28 |     expect(await page.getByText('Grapes')).toBeVisible();
  29 | 
  30 | });
```