import {test, expect} from '@playwright/test';

test('Dropdown list Testcase', async({page}) => {

    //Navigate to URL
    await page.goto("https://testautomationpractice.blogspot.com/");

    //select Drop down list by using value

    const countryDropdown = page.locator("//select[@id='country']");
    await countryDropdown.selectOption({ value: 'india' });
    await page.waitForTimeout(2000);
    //select Drop down list by using visible text
    //const countryDropdown2 = page.locator("//select[@id='country']");
    await countryDropdown.selectOption("Germany");
    await page.waitForTimeout(2000);
    //Validate the list of options in the drop down list
    const optionsCount = await countryDropdown.locator('option').count()
    console.log("Number of options in the dropdown:", optionsCount);

    const optionsText = await countryDropdown.locator('option').allTextContents();
    console.log("Options in the dropdown:", optionsText);

    expect(optionsCount).toBe(10);
    // await expect(countryDropdown.locator('option')).toHaveText(["Select Country", "India", "United States", "Germany", "France", "Italy", "Spain", "Australia", "Canada", "Japan", "United Kingdom", "China", "Brazil"].sort());
    await expect(countryDropdown.locator('option')).toHaveText(["United States", "Canada", "United Kingdom", "Germany", "France ", "Australia", "Japan", "China", "Brazil",  "India"]);
    for(const option of optionsText){
        console.log("Option:", option.trim());
    }

})