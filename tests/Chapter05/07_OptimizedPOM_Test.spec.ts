// import {test, expect} frpom '@playwright/test';
import { test } from '../../src/Fixtures/TestFixtures';

test('Optimized POM With Fixtures Test in Playwright', async ({ page, homePage, srPage, plPage }) => {

    console.log('Test case Execution started.... ')

    await homePage.goToUrl();
    await homePage.searchWithKeywords(`${process.env.searchKeyword}`)

    await srPage.clickOnTheLink(`${process.env.searchKeyword}` + ' - YouTube');

    await plPage.validatePageTitle(`${process.env.searchKeyword}` + ' - Yahoo Search Results');

    console.log('Test case Execution ended.... ')

})