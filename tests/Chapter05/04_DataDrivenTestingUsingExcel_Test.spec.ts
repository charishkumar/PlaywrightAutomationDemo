import { test, expect } from '@playwright/test';
import path from 'path'                         //path
import { readExcelFile } from '../../src/utils/ExcelHelper';

const filePath = path.join(__dirname, '../../test-data/qa/testdata.xlsx')
const records = readExcelFile(filePath);

for (const record of records) {        //dataSetName will store TestDataSet1 and TestDataSet2 while looping
    test(`Data Driven Testing using Excel file in Playwright : ${record.Skill2}`, async ({ page }) => {
        await page.goto(`${process.env.YTURL}`);
        //Get by Placeholder() method is used to locate the element by its placeholder text
        await page.getByPlaceholder("Search").fill(record.Skill2);
        await page.locator("//button[@title='Search']//div").click();
        await expect(page.locator(`span.ytAttributedStringHost:has-text("${record.Skill2}")`).first()).toBeVisible();
        //await expect(page.getByRole('link', { name: skill.Skill1, exact: true })).toBeVisible();
    })
}