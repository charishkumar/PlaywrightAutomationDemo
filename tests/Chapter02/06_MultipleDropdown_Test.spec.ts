import {test, expect} from '@playwright/test';

test('Multiple Dropdown Testcase', async({page}) => {

    //Navigate to URL
    await page.goto("https://testautomationpractice.blogspot.com/");

    //select Drop down list by using value

    const colorsMDD = page.locator("//select[@id='colors']");
    await colorsMDD.selectOption([{value : 'red'}, {value : 'green'}, {value : 'blue'}, {value : 'yellow'}, {value : 'white'}]);
    await page.waitForTimeout(2000);

    //by visible text
    await colorsMDD.selectOption(['Red', 'Green', 'Blue', 'Yellow', 'White']);
    await page.waitForTimeout(2000);

    //By using index
    await colorsMDD.selectOption([{index : 1}, {index : 2}, {index : 3}, {index : 4}]);
    await page.waitForTimeout(2000);

    // to check number of options in the dropdownx
    const options = await colorsMDD.locator('option').allTextContents();
    console.log("Number of options: ", options.length);
    await expect(colorsMDD.locator('option')).toHaveCount(7);


    //to check if an option is present in the dropdown
    const optionsText = await colorsMDD.locator('option').allTextContents();
    console.log("Options in the dropdown:", optionsText);
    await expect(colorsMDD.locator('option')).toHaveText(["Red", "Blue", "Green", "Yellow", "Red", "White", "Green"]);
})