import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json';

//structure of data -- using json object, you can read keys and get the values.
type TestData = {
    TestDataSet1: {
        Skill1: string,
        Skill2: string
    },

    TestDataSet2: {
        Skill1: string,
        Skill2: string
    },
}

const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {        //dataSetName will store TestDataSet1 and TestDataSet2 while looping
    const skill = typedTestData[dataSetName as keyof TestData];
    //skill.Skill1

    test(`Data Driven Testing using JSON file in Playwright : ${skill.Skill1}`, async ({ page }) => {

        await page.goto(`${process.env.YTURL}`);
        //Get by Placeholder() method is used to locate the element by its placeholder text
        await page.getByPlaceholder("Search").fill(skill.Skill1);
        //  await page.getByLabel('Search').nth(3).click();
        await page.locator("//button[@title='Search']//div").click();
        await expect(page.locator(`span.ytAttributedStringHost:has-text("${skill.Skill1}")`).first()).toBeVisible();
        //await expect(page.getByRole('link', { name: skill.Skill1, exact: true })).toBeVisible();
    })
}
