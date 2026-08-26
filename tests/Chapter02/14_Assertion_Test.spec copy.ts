import {test, expect} from '@playwright/test';

test('Assertions in Playwright', async({page}) => {

    //Navigage to URL
    await page.goto("https://www.youtube.com");

    //Assert whether textbox is Editable, Visible, Enabled
    
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeEditable();    //to check if the textbox is editable
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();     //to check if the textbox is visible
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeEnabled();     //to check if the textbox is enabled
    await expect(page.getByRole('combobox', {name: 'Search'})).toBeEmpty();         //to check if the textbox is empty or not

    // Assert the URL, title, text, value, count, checked, selected, focused, class, attribute, style, and screenshot
    await expect(page).toHaveURL("https://www.youtube.com/");                       //to check if the URL is same as expected
    await expect(page).toHaveTitle("YouTube");                                      //to check if the title is same as expected
    // await expect(page.getByRole('combobox', { name: 'Search' })).toHaveAttribute('id', 'search');  //to check if the attribute is same as expected
    // await expect(page.getByRole('combobox', { name: 'Search' })).toHaveClass(/ytd-searchbox/);  //to check if the class is same as expected
    // await expect(page.getByRole('combobox', { name: 'Search' })).toHaveStyle({ color: 'rgb(0, 0, 0)' });  //to check if the style is same as expected
    await expect(page.getByRole('combobox', { name: 'Search' })).toHaveCount(1);   //to check if the count is same as expected

    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await expect(page.getByRole('combobox', { name: 'Search' })).toHaveValue('Playwright by testers talk');  //to check if the value is same as entered
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await expect.soft(page).toHaveURL("https://www.youtube.com/results?search_query=Playwright+by+testers+talk");  //to check if the URL is same as expected
    await expect(page).toHaveTitle('Playwright by testers talk - YouTube');  //to check if the title is same as expected
    await expect(page.getByText('Shorts').nth(2)).toHaveText('Shorts');  //to check if the text is same as expected
    
    await expect(page.getByRole('combobox', { name: 'Search' })).not.toBeChecked

})