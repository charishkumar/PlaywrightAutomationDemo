import {test, expect, Locator} from "@playwright/test";

test("AutoSuggest Dropdown", async({page})=>{

await page.goto("https://www.flipkart.com/");
await page.locator("input[name='q']").fill("smart");

//get all teh suggested option > In Dev tools > Press Ctrl/Cmd + Shift + P > and enter the command emulate a focused page.

const options:Locator = page.locator("ul>li")
await page.waitForTimeout(3000);
const count:number = await options.count()

console.log("Number of options: ", count);

//print all teh suggested options
//console.log("Option: ", await options.allTextContents());
const optionsText:string[] = await options.allTextContents();
for (let option of optionsText){
    console.log(option)
}

//clicking on smartohone

for (let i:number = 0; i<count; i++){
    const text:string = await options.nth(i).innerText();
    if(text==='smartphone'){
        options.nth(i).click();
    }
}
await page.waitForTimeout(3000);

})