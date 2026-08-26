import {test, expect, Locator} from "@playwright/test";

test("Validating CSS Locators", async({page})=>{

    page.goto("https://demowebshop.tricentis.com/");
    
    //tag and id
    //tag and class

    await expect(page.locator("input#small-searchterms")).toBeVisible();        //verifying whether element is visible/present
    const searchTB:Locator = page.locator("input#small-searchterms");           //storing the locator in a variable
    await searchTB.fill ("laptop");                                             //entering teh value in the search text box.
    await page.waitForTimeout(5000);                                            //wait statement

    await page.locator("input.button-1.search-box-button[value=Search]").click();  //clicking on search button. 
    await page.waitForTimeout(5000);

     //tag and class
    await expect(page.locator('input.search-text')).toHaveValue('laptop');          //validating that weblement has input.
    console.log(await page.locator('input.search-text').inputValue());              //printing the value on to console.


})