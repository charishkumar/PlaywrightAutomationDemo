import {test, expect} from "@playwright/test";

/* syntax of test function
test("title of the test ", ()=> {

})

Every test function will take a fixture.
Fixture is a global variable. for eg. page, browser .... and it should be wrapped in curly braces.

*/


test("Verify the Page Title", async({page})=> {

await page.goto("http://www.automationpractice.pl/index.php");

let pTitle:string = await page.title();
console.log("Title of the Page: ", pTitle);

await expect(page).toHaveTitle("My Shop");

})