import {test, expect, Locator} from "@playwright/test";

test("ValidatingMultiSelectDropdown", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. select option from the dropdown
    const colorsDD: Locator = page.locator("select#colors");
    //await colorsDD.selectOption("Green");
    //await colorsDD.selectOption(['Red', 'Blue', 'Yellow']);         //using visible text
    
    //await colorsDD.selectOption(['red', 'blue', 'yellow']);         //using value attribute.
    //or
    //await colorsDD.selectOption([{value:'red'}, {value:'green'}, {value:'white'}]);           //using value attribute.

    //await colorsDD.selectOption([{label:'White'}, {label:'Yellow'}, {label:'Red'}]);           //using label

    await colorsDD.selectOption([{index:2}, {index:4}, {index:6}]);           //using index
   
    //2. check number of options in the dropdown
   
     const colorsOptions: Locator = page.locator("select#colors>option");
     const count = await colorsOptions.count();
     console.log("Count of Options in Colors: ", count);

     await expect(colorsOptions).toHaveCount(7);
    
    await page.waitForTimeout(3000);

    //3. check an option is present in the dropdown.
    const colorOptionsText:string[] = (await colorsOptions.allTextContents()).map(text => text.trim());
    console.log("Options: ", colorOptionsText);
    
    expect (colorOptionsText).toContain("Green");
    
    // 4 printing options from the dropdown

    for(const text of colorOptionsText){
        console.log("Option: ", text);
    }

})