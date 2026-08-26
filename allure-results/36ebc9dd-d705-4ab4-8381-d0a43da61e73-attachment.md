# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/12_Mock_From_HAR_File.spec.ts >> Mock API from HAR File in Playwright
- Location: tests/Chapter06/12_Mock_From_HAR_File.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Straberry')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Straberry')

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
- list:
  - listitem: Strawberry
  - listitem: Banana
  - listitem: Tomato
  - listitem: Pear
  - listitem: Blackberry
  - listitem: Kiwi
  - listitem: Pineapple
  - listitem: Passionfruit
  - listitem: Orange
  - listitem: Raspberry
  - listitem: Watermelon
  - listitem: Lemon
  - listitem: Mango
  - listitem: Blueberry
  - listitem: Apple
  - listitem: Melon
  - listitem: Lime
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('Mock API from HAR File in Playwright', async ({ page }) => {
  4  | 
  5  |     //Recording a HAR file for the API request and response using the routeFromHAR method. The HAR file is a JSON-formatted archive file that contains a record of the network requests and responses made by a web application. It can be used to mock API requests and responses in Playwright tests.
  6  |     //it takes 2 arguments, 1st argument is the path of the HAR file and 2nd argument is the URL of the API which we want to mock and set update flag to true to update the HAR file with the new response data. 
  7  |     // The update option is used to specify whether the HAR file should be updated with the new response data or not. If set to true, the HAR file will be updated with the new response data, and if set to false, the HAR file will remain unchanged.
  8  |     await page.routeFromHAR('./har/fruits.har', { url: '*/**/api/v1/fruits', update: false });
  9  | 
  10 |     //Navigate to the page that makes the API request
  11 |     await page.goto('https://demo.playwright.dev/api-mocking/');
  12 | 
  13 |     // Wait for the API request to complete and the response to be rendered on the page
  14 |     await page.waitForResponse('*/**/api-mocking/api/v1/fruits');
  15 | 
  16 |     //verify that the mocked response is displayed on the page
> 17 |     await (expect(page.getByText('Strawberry'))).toBeVisible();
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  18 | 
  19 | });
```