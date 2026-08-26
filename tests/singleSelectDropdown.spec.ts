import {test, expect, Locator, selectors} from "@playwright/test";
import { count } from "node:console";

test("SingleSelectDropdown", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. select option from the dropdown
    const selCountry: Locator = page.locator("select[id='country']")//
    await selCountry.selectOption("India");                                 //select by visible text
    await page.waitForTimeout(2000);
    await selCountry.selectOption({value:'uk'});                              //select by using value attribute from the HTML
    await page.waitForTimeout(1000);
    await selCountry.selectOption({label:'India'});                         //search by Label -- innertext of the option from HTML.
    await page.waitForTimeout(1000);
    await selCountry.selectOption({index:1});                         //search by index -- we need to count the index from the HTML.
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);

//2. check number of options in the dropdown

    const countryOptions:Locator = page.locator("#country>option");
    const count = await countryOptions.count();
    console.log("Options count:", count);
    await expect (countryOptions).toHaveCount(10);
    expect(count).toBe(10);

    //3. check an option is present in the dropdown.

       const optionsText:string[] = (await countryOptions.allTextContents()).map(text => text.trim());
       console.log("Options: ", optionsText);

       console.log("Asserting whether Germany is present in options of the list." + expect(optionsText).toContain("Germany"));

// 4 printing options from the dropdown

for(const option of optionsText){
    console.log("Options :", option);
}

})