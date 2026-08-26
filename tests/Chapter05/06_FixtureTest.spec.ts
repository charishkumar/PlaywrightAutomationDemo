// import {test, expect} from '@playwright/test';
import { test } from '../../src/Fixtures/TestFixtures';
import { HomePage } from '../../src/pages/HomePage';
import { SearchResultsPage } from '../../src/pages/SearchResultsPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

test ('Page Object Model With Fixtures Test in Playwright', async({page}) => {

    await page.setViewportSize({width: 1920, height: 1080});

    console.log('Test case Execution started.... ')
    //Create Object of the HomePage class
    const homePage = new HomePage(page);
    await homePage.goToUrl();
    await homePage.searchWithKeywords(`${process.env.searchKeyword}`)

    //Create Object of the SearchResultsPage class
    const srPage = new SearchResultsPage(page);
    await srPage.clickOnTheLink(`${process.env.searchKeyword}`+' - YouTube');

    //Create Object of the PlaylistPage class
    const plPage = new PlaylistPage(page);
    await plPage.validatePageTitle(`${process.env.searchKeyword}` + ' - Yahoo Search Results');
    console.log('Test case Execution ended.... ')

})