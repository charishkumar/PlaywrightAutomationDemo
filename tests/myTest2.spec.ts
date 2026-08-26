import {test, expect} from "@playwright/test";

/* syntax of test function
test("title of the test ", ()=> {

})

Every test function will take a fixture.
Fixture is a global variable. for eg. page, browser .... and it should be wrapped in curly braces.

*/


test("Verify the Page URL", async({page})=> {

await page.goto("http://www.automationpractice.pl/index.php");

let pURL:string = await page.url();
console.log("URL of the Page: ", pURL);

await expect(page).toHaveURL("http://www.automationpractice.pl/index.php");
await expect(page).toHaveURL(/automationpractice/);   //here / is the regular expression -- before and after automatiopractice you can have any thing.

})