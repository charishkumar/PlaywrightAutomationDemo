import {test, expect, Locator} from "playwright/test"

test("Verify Playwright Locators", async({page})=>{

await page.goto("https://demo.nopcommerce.com/");

//1. page.getByAltText() to locate an element, usually image, by its text alternative.
//use this locator when your element supports alt text such as img and aria elements.

const logo:Locator = page.getByAltText("nopCommerce demo store");
logo.highlight();
await expect(logo).toBeVisible();

//2. page.getByText() - find an element by the text it contains. You can match by substring or exact string or regular expression.
// locate by visible text.
//use this locator to find non interactive elements like div, span, p etc..
//For interactive elements like button, a, input etc, use role locators.

// const text = page.getByText("Welcome to our store");
// await expect(text).toBeVisible();

await(expect(page.getByText("Welcome to our store")).toBeVisible());    // full string
await(expect(page.getByText("to our store")).toBeVisible());    // sub string or partial text
await(expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible());    // regular epression (/s is to ignore space.  amd i is to ignore case)

//3. page.getByRole() to locate the element by role. (role is not an attribute)
//Role locators include button, input, checkboxes, headings, links, lists, tables etc... and many more and follow W3C specifications for ARIA Role.
// Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables etc...
//implicit element -- tag name and the role both are same.
//explicit element -- tag name and the role both are different.


//await page.getByRole("name of the role", {name:'Name of the Link'})
await page.getByRole("link", {name:'Register'}).click();
await expect(page.getByText("Register")).toBeVisible();     // you can also use getBY Role.


//4.page.getByLabel() to locate a form control by associated label's text.
// Ideal for form fields with visible text.
//label is the tag name

await page.getByLabel('First name:').fill("Harish");       //type method is depricated.
await page.getByLabel('Last name:').fill("Kumar");
await page.getByLabel('Email:').fill("abc@gmail.com");


//5. page.getByPlaceholder() to locate an input by placeholder.-- find elements with a given placeholder text.
//Best for inputs without label but having placeholder.

await page.getByPlaceholder("Search store").fill("Apple Mac Book Pro");

//6 page.getByTitle() to locate an element by its title attribute.
// When to use: when your element has meaningful title attribute.

expect(page.getByTitle("Home Page")).toHaveText("Home");        // to have text will check whether the link has text Home.
expect(page.getByTitle("Hyper Text Markup Language")).toHaveText("HTML");        // to have text will check whether the link has text HRML.


//7 page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured --- In case if dev team changes data-testid attribute to data-id or similar).
//When to use: When text or role based locators are unstable or not suitable.

expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com"); 
expect(page.getByTestId("profile-name")).toHaveText("John Doe"); 

//(other attributes can be configured --- In case if dev team changes data-testid attribute to data-id or similar)
// how to handle such scenarios.

// open playwright.config file > search for the line "trace: 'on-first-retry'," > Below that line Enter 
//testIdAttribute: 'data-id'  //configured data-testid 
// once you add this line, even though data-testid attribute is changed to data-id, script will execute.

})