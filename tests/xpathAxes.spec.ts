import {test, expect, Locator} from "@playwright/test";
import { table } from "node:console";

test("XPath Axes Demo", async({page})=>{

await page.goto("https://www.w3schools.com/html/html_tables.asp");

//self axes -- select td that contains 'Germany'
const cellData:Locator=page.locator("//td[text()='Germany']/self::td");
console.log(await cellData.textContent());
await expect(cellData).toHaveText("Germany");

//parent axes -- find the tr (parent of the cell which is a row) that contains 'Germany'

const rowData:Locator = page.locator("//td[text()='Germany']/parent::tr")
console.log("Row data which has a cell Value Germany: ", await rowData.textContent());
await expect(rowData).toContainText("Germany");                 //asserting that 

//child axes - want to get <td> children of the third <tr> in the table.

const thirdRowCellsData:Locator = page.locator("//table[@class='ws-table-all']/tbody/tr[3]/child::td")

console.log("3rd Row child Items data: ", await thirdRowCellsData.allTextContents())
await expect(thirdRowCellsData).toHaveCount(3);         //asserting that it has 3 td cells.

const cellTexts = await thirdRowCellsData.allTextContents();  // Get all text contents of the cells
const containsMexico = cellTexts.some(text => text.includes("Mexico")); // Check if any cell contains "Mexico"
expect(containsMexico).toBe(true);  // Assert that at least one cell contains "Mexico"

//ancestor. -- Get ancestor of <table> of Germany cell/text (Germany is present in <td>, its ancestors are ... <tr>, <tbody> and <table>)

const tableLoc:Locator = page.locator("//td[text() = 'Germany']/ancestor::table")
await expect(tableLoc).toHaveAttribute("id", "customers");              //asserting the id attribute of the table

let tabContents:string[] = await tableLoc.allTextContents();

console.log("Table Contents: ", tabContents);
const containsGermany = tabContents.some(text => text.includes("Germany"));     //asserting ancestor tag details contains Germany
await expect(containsGermany).toBe(true);     
// await page.waitForTimeout(5000);

//descendents -- Get all <td> elements under table.

const allTDs:Locator = page.locator("//table[@id='customers']/descendant::td")
const tdContents:string[] = await allTDs.allTextContents();
console.log("TD Contents: ", tdContents);
const containsGermany1 = tdContents.some(text => text.includes("Germany"));         //asserting descendants tag details contains Germany
await expect(containsGermany1).toBe(true);

await expect(allTDs).toHaveCount(18);                                               //asserting teh count of descendant <td> tags.

//following: Get the first <td> that comes after 'Germany' in the document.

const followingTD:Locator = page.locator("//td[text()='Germany']/following::td[1]");
const followingTDContent = await followingTD.textContent();
console.log("Content of the First td following text 'Germany' : ", followingTDContent)
await expect(followingTD).toHaveText("Centro comercial Moctezuma");                 //asserting the content of the cell.

//following-SIBLING: Get the ALL <td> that comes after 'Germany' in the document.

const rightTDSiblings:Locator = page.locator("//td[text()='Germany']/following-sibling::td");
await expect(rightTDSiblings).toHaveCount(0);

//or

const rightTDSiblings1:Locator = page.locator("//td[text()='Maria Anders']/following-sibling::td");
const rightTDSiblings1Content = await rightTDSiblings1.textContent();
await expect(rightTDSiblings1).toHaveCount(1);
console.log("Following-Sibling data of 'Maria AndrES' : ", rightTDSiblings1Content)
await expect(rightTDSiblings1).toHaveText("Germany"); 

//preceding: Get the preceding <td> that comes before 'Germany' in the document.

const leftTDSibling:Locator = page.locator("//td[text()='Germany']/preceding::td[1]");
const leftTDSiblingContent = await leftTDSibling.textContent();

await expect(leftTDSibling).toHaveCount(1);                                     //asserting that result count should be 1
console.log("Preceding data of 'Germany' : ", leftTDSiblingContent)
await expect(leftTDSibling).toHaveText("Maria Anders")                          //asserting the contents of the cell.

//preceding-sibling: Get the preceding <td> that comes before 'Germany' in the document.

const leftTDSibling1:Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
const leftTDSibling1Content = await leftTDSibling.textContent();

await expect(leftTDSibling1).toHaveCount(2);
await expect(leftTDSibling1.nth(0)).toHaveText("Alfreds Futterkiste");          //ASSERTING the contents of the preceding sibling 
await expect(leftTDSibling1.nth(1)).toHaveText("Maria Anders");                 //ASSERTING the contents of the preceding sibling     

})