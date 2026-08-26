import { Page, Locator } from "@playwright/test";

export class HomePage {

    readonly page: Page;  //page reference variable.
    readonly searchTextbox: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {  //argument page of Page type. Once we get page reference from test file, we need to assign back to local page reference.
        this.page = page;

        //Declare all the elements
        this.searchTextbox = page.getByPlaceholder('Search the web', { exact: true });
        this.searchButton = page.getByLabel('Magnifying glass icon', { exact: true });
    }

    //implement all the methods which perform actions on the objects of this page   .

    async goToUrl() {
        if (process.env.TEST_EXECUTION_ENV === 'qa') {
            console.log(`Test execution is running in ${process.env.TEST_EXECUTION_ENV} environment`);
            await this.page.goto(`${process.env.qaYSURL}`);
        } else if (process.env.TEST_EXECUTION_ENV === 'dev') {
            console.log(`Test execution is running in ${process.env.TEST_EXECUTION_ENV} environment`);
            await this.page.goto(`${process.env.devYSURL}`);
        } else if (process.env.TEST_EXECUTION_ENV === 'prod') {
            console.log(`Test execution is running in ${process.env.TEST_EXECUTION_ENV} environment`);
            await this.page.goto(`${process.env.YSURL}`);
        } else {
            console.log(`Test execution is running in ${process.env.TEST_EXECUTION_ENV} environment`);
        }
    }

    async searchWithKeywords(keyword: string) {
        await this.searchTextbox.click();
        await this.searchTextbox.fill(keyword);
        await this.searchButton.click();
    }

}