# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05/08_RunningTestBasedOnEnvironment.spec.ts >> Running Test Based on Environment
- Location: tests/Chapter05/08_RunningTestBasedOnEnvironment.spec.ts:4:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefined", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | 
  3  | export class HomePage {
  4  | 
  5  |     readonly page: Page;  //page reference variable.
  6  |     readonly searchTextbox: Locator;
  7  |     readonly searchButton: Locator;
  8  | 
  9  |     constructor(page: Page) {  //argument page of Page type. Once we get page reference from test file, we need to assign back to local page reference.
  10 |         this.page = page;
  11 | 
  12 |         //Declare all the elements
  13 |         this.searchTextbox = page.getByPlaceholder('Search the web', { exact: true });
  14 |         this.searchButton = page.getByLabel('Magnifying glass icon', { exact: true });
  15 |     }
  16 | 
  17 |     //implement all the methods which perform actions on the objects of this page   .
  18 | 
  19 |     async goToUrl() {
  20 |         if (process.env.TEST_EXECUTION_ENV === 'qa') {
  21 |             console.log(`Test execution is running in ${process.env.TEST_EXECUTION_ENV} environment`);
  22 |             await this.page.goto(`${process.env.qaYSURL}`);
  23 |         } else if (process.env.TEST_EXECUTION_ENV === 'dev') {
  24 |             console.log(`Test execution is running in ${process.env.TEST_EXECUTION_ENV} environment`);
> 25 |             await this.page.goto(`${process.env.YSURL}`);
     |                             ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  26 |         } else if (process.env.TEST_EXECUTION_ENV === 'prod') {
  27 |             console.log(`Test execution is running in ${process.env.TEST_EXECUTION_ENV} environment`);
  28 |             await this.page.goto(`${process.env.YSURL}`);
  29 |         } else {
  30 |             console.log(`Test execution is running in ${process.env.TEST_EXECUTION_ENV} environment`);
  31 |         }
  32 |     }
  33 | 
  34 |     async searchWithKeywords(keyword: string) {
  35 |         await this.searchTextbox.click();
  36 |         await this.searchTextbox.fill(keyword);
  37 |         await this.searchButton.click();
  38 |     }
  39 | 
  40 | }
```