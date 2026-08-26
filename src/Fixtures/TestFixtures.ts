import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { PlaylistPage } from '../pages/PlaylistPage';
import { loadTestDataFromJsonFile } from '../utils/JsonHelper';  //method to load test data from JSON files based on the environment
import { TestData } from '../interface/Module1TestData.interface';

export const test = base.extend<{
    saveLogs: void;
    //declare the page objects here so that we can use them in the test files without creating object of the page classes in each test file.
    homePage: HomePage;
    srPage: SearchResultsPage;
    plPage: PlaylistPage;
    testData: TestData;
}>({

    saveLogs: [async ({ }, use) => {
        // Code to set up the test environment or perform any necessary actions before the test runs
        console.log('Global before each test is running...');

        await use(); // Execute the test

        // Code to clean up the test environment or perform any necessary actions after the test runs
        console.log('Global after each test is running...');
    },
    { auto: true }], // This option ensures that the saveLogs fixture is automatically applied to all tests without needing to explicitly include it in each test case.

    homePage: async ({ page }, use) => { // Create an instance of the HomePage class and pass the page object to it
        const homePage = new HomePage(page);
        await use(homePage);
    },

    srPage: async ({ page }, use) => { //
        const srPage = new SearchResultsPage(page);
        await use(srPage);
    },

    plPage: async ({ page }, use) => {  // Create an instance of the PlaylistPage class and pass the page object to it
        const plPage = new PlaylistPage(page);
        await use(plPage);
    },

    // Load test data from JSON files based on the environment
    testData: async ({ }, use) => { //Create a fixture to load test data from JSON files based on the environment
        const data = await loadTestDataFromJsonFile();
        await use(data);
    }
});

export { expect };