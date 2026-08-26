import { test, expect } from '@playwright/test';
import {parse} from 'csv-parse/sync';           //CSV Parser
import fs from 'fs';                            //File system
import path from 'path'                         //path

//Define the test data structure.
type TestRecords = {
    Skill1 : string,
    Skill2 : string,
};

const records = parse(fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')), 
    {
    columns : true, 
    skip_empty_lines: true 
    }
) as TestRecords [];

for (const record of records) {        //dataSetName will store TestDataSet1 and TestDataSet2 while looping
    test(`Data Driven Testing using CSV file using Playwright : ${record.Skill1}`, async ({ page }) => {
        await page.goto(`${process.env.YTURL}`);
        //Get by Placeholder() method is used to locate the element by its placeholder text
        await page.getByPlaceholder("Search").fill(record.Skill2);
        await page.locator("//button[@title='Search']//div").click();
        await expect(page.locator(`span.ytAttributedStringHost:has-text("${record.Skill2}")`).first()).toBeVisible();
        //await expect(page.getByRole('link', { name: skill.Skill1, exact: true })).toBeVisible();
    })
}