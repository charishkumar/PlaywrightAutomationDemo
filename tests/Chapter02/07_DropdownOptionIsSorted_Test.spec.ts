import {test, expect} from '@playwright/test';

test('Dropdown option is sorted or Not Testcase', async({page}) => {

    //Navigate to URL
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //identify the drodown list
    const animalsDD = page.locator("//select[@id='animals']");
    const optionsList = await animalsDD.locator('option').allTextContents();
    console.log("Options in the dropdown:", optionsList);

    //check if the list is sorted or not.
    const sortedOptionsList = [...optionsList].sort();
    console.log("Sorted Options in the dropdown:", sortedOptionsList);

    await expect(optionsList).toEqual(sortedOptionsList);

})