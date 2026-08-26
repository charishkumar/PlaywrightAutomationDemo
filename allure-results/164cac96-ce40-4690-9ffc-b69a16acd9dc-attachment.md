# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05/02_DataDrivenTestingUsingJSONFile_Test.spec.ts >> Data Driven Testing using JSON file in Playwright : Playwright by Testers Talk
- Location: tests/Chapter05/02_DataDrivenTestingUsingJSONFile_Test.spec.ts:23:9

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('Search')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import testData from '../../test-data/qa/testdata.json';
  3  | 
  4  | //structure of data -- using json object, you can read keys and get the values.
  5  | type TestData = {
  6  |     TestDataSet1: {
  7  |         Skill1: string,
  8  |         Skill2: string
  9  |     },
  10 | 
  11 |     TestDataSet2: {
  12 |         Skill1: string,
  13 |         Skill2: string
  14 |     },
  15 | }
  16 | 
  17 | const typedTestData = testData as TestData;
  18 | 
  19 | for (const dataSetName in typedTestData) {        //dataSetName will store TestDataSet1 and TestDataSet2 while looping
  20 |     const skill = typedTestData[dataSetName as keyof TestData];
  21 |     //skill.Skill1
  22 | 
  23 |     test(`Data Driven Testing using JSON file in Playwright : ${skill.Skill1}`, async ({ page }) => {
  24 | 
  25 |         await page.goto(`${process.env.YTURL}`);
  26 | 
  27 |         //Get by Placeholder() method is used to locate the element by its placeholder text
  28 | 
> 29 |         await page.getByPlaceholder("Search").fill(skill.Skill1);
     |                                               ^ Error: locator.fill: Target page, context or browser has been closed
  30 |         //  await page.getByLabel('Search').nth(3).click();
  31 |         await page.locator("//button[@title='Search']//div").click();
  32 |         await expect(page.locator(`span.ytAttributedStringHost:has-text("${skill.Skill1}")`)).toBeVisible();
  33 |         //await expect(page.getByRole('link', { name: skill.Skill1, exact: true })).toBeVisible();
  34 | 
  35 |     })
  36 | 
  37 | }
  38 | 
```