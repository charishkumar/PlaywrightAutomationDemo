import { Page, expect, Locator } from "@playwright/test";

export class PlaylistPage {

    readonly page:Page;  //page reference variable.
    readonly resultLink:Locator;

    constructor(page:Page) {  //argument page of Page type. Once we get page reference from test file, we need to assign back to local page reference.
        this.page = page;

        //Declare all the elements
        this.resultLink = page.getByText("Playwright by Testers Talk - YouTube");
    }

    //implement all the methods which perform actions on the objects of this page   .
    
    async validatePageTitle(pageTitle:string){
        await expect(this.page).toHaveTitle(pageTitle);
    }

}