# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05/05_PageObjectModelTest.spec.ts >> Page Object Model Test in Playwright
- Location: tests/Chapter05/05_PageObjectModelTest.spec.ts:6:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://search.yahoo.com/", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from "playwright";
  2  | 
  3  | export class HomePage {
  4  | 
  5  |     readonly page:Page;  //page reference variable.
  6  |     readonly searchTextbox:Locator;
  7  |     readonly searchButton:Locator;
  8  | 
  9  |     constructor(page:Page) {  //argument page of Page type. Once we get page reference from test file, we need to assign back to local page reference.
  10 |         this.page = page;
  11 | 
  12 |         //Declare all the elements
  13 |         this.searchTextbox = page.getByPlaceholder('Search the web', {exact:true});
  14 |         this.searchButton = page.getByLabel('Magnifying glass icon', {exact:true});
  15 |     }
  16 | 
  17 |     //implement all the methods which perform actions on the objects of this page   .
  18 |     
  19 |     async goToUrl() {
> 20 |         await this.page.goto(`${process.env.YSURL}`);
     |                         ^ Error: page.goto: Test ended.
  21 |     }
  22 | 
  23 |     async searchWithKeywords(keyword:string){
  24 |         await this.searchTextbox.click();
  25 |         await this.searchTextbox.fill(keyword);
  26 |         await this.searchButton.click();
  27 |     }
  28 | 
  29 | }
```