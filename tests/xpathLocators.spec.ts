import {test, expect, Locator} from "@playwright/test";
import open from 'open';

test("Verify Xpath Locators", async ({page})=>{

await page.goto("https://demowebshop.tricentis.com/");

//absolute xpath
//const logo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
const logo:Locator = page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");

//or 

//const logo:xLocator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");

//await logo.click();
await expect(logo).toBeVisible();    // full string

//relative xpath

const fellogo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect(fellogo).toBeVisible();    // full string

//contains function
//Eg: "//h2/a[contains(@href, 'computer')]"
//Matches elements that contain a specific substring within an attribute. For eg. Selects products whose name contains "computer" under products


const elements:Locator = page.locator("//h2/a[contains(@href, 'computer')]");
const eleCount:number = await elements.count();
console.log("Number of Elements mathcing Computer", eleCount)

console.log("First Element : ", await elements.first().textContent());
console.log("Last Element : ", await elements.last().textContent());
console.log("Nth Element : ", await elements.nth(3).textContent());

console.log("All Elements : ", await elements.allTextContents());
let productTitles:string[] = await elements.allTextContents();

for(let i:number =0; i<productTitles.length; i++){
    console.log(productTitles[i]);
}

//4. starts-with function
//eg: "//h2/a[starts-with(@href, '/build-your')]"
//Matches elements whose attribute values starts with a specified string. For eg. Selects products whose name starts with "Build Your" under products

let prodTitles:Locator = page.locator("//h2/a[starts-with(@href, '/build-your')]")
let pTCount:number = await prodTitles.count();

expect(pTCount).toBeGreaterThan(0);
console.log("Product Titles Starting with Build", await prodTitles.allInnerTexts());

//5. text()
//For eg: "//*=[text() = 'Register')]"
//Selects elements based on exact text content of the element.  For eg. Selects products whose name is exact "Build Your own computer" under products

let regLink:Locator = page.locator("//*[text()='Register']")
await expect(regLink).toBeVisible();

//6. last()
//Eg: //div[@class='column follow-us']//li[last()]
//Selects the last element in the set of matching nodes,

const lastItem = page.locator("//div[@class='column follow-us']//li[last()]")
await expect(lastItem).toBeVisible();
console.log("Text content of last Element: ", await lastItem.textContent()) // to get teh text of the element

//7. position()
//Eg: //div[@class='column follow-us']//li[position()=4]
//Selects the last element in the set of matching nodes,

const positionItem = page.locator("//div[@class='column follow-us']//li[position()=4]")
await expect(positionItem).toBeVisible();
console.log("Text content of requested Element: ", await positionItem.textContent()) // to get teh text of the element

});

