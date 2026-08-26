// import {test, expect} frpom '@playwright/test';
import { test } from '../../src/Fixtures/TestFixtures';

test('Running Test Based on Environment', async ({ page, homePage, srPage, plPage, testData }) => {

    console.log('Test case Execution started.... ')

    await homePage.goToUrl();
    await homePage.searchWithKeywords(String(testData.Module1TestData?.Skill1));

    // await srPage.clickOnTheLink(String(testData.Module1TestData?.Skill1 + ' - YouTube'));
    await srPage.clickOnTheLink(String(testData.Module1TestData?.Skill1 + '☑️ - YouTube')); 

    await plPage.validatePageTitle(String(testData.Module1TestData?.Skill1 + ' - Yahoo Search Results'));

    console.log(`Skill1 : ${testData.Module1TestData?.Skill1}`);
    console.log(`Skill2 : ${testData.Module1TestData?.Skill2}`);
    console.log(`Skill3 : ${testData.Module1TestData?.Skill3}`);

    console.log('Test case Execution ended.... ')

})