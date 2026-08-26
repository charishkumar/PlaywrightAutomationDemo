import {test, expect, Locator} from "@playwright/test";

test("Verify Dropdown options is Sorted", async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //const colorsOptions: Locator = page.locator("select#colors>option");
    //const colorOptionsText:string[] = ((await colorsOptions.allTextContents()).sort()).map(text => text.trim());

    //console.log("Sorted Options: ", colorOptionsText)
    const animalOptions: Locator = page.locator("select#animals>option");
    const animalOptionsText:string[] = ((await animalOptions.allTextContents())).map(text => text.trim());

    const originalList:string[] = animalOptionsText;
    const sortedList:string[] = animalOptionsText.sort();

    console.log("Original List: ", originalList);
    console.log("Sorted List: ", sortedList);

    expect (originalList).toEqual(sortedList);

    // const colorsOptions: Locator = page.locator("select#colors>option");
    // const colorOptionsText:string[] = ((await colorsOptions.allTextContents())).map(text => text.trim());

    // const originalColorList:string[] = [...colorOptionsText];
    // const sortedColorList:string[] = [...colorOptionsText].sort();

    // console.log("Original Color List: ", originalColorList);
    // console.log("Sorted Color List: ", sortedColorList);

    // expect (originalColorList).toEqual(sortedColorList);



})