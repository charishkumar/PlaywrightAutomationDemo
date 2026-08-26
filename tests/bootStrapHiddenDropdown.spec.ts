import {test, expect, Locator} from "@playwright/test";

test("Bootstrap Hidden Dropdown", async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//login steps:

await page.locator('input[name="username"]').fill("Admin");
await page.locator('input[name="password"]').fill("admin123");
await page.locator('button[type="submit"]').click();

await page.getByText('PIM').click();

//clicked on job title drop down.
await page.locator('form i').nth(2).click();
await page.waitForTimeout(3000);

//capture all the options

const bshdoptions:Locator = page.locator("div[role='listbox'] span")
console.log("Options count: ", await bshdoptions.count());

for(let i =0; i < await bshdoptions.count(); i++){
    console.log(await bshdoptions.nth(i).innerText());
}

//click on an option


for(let i =0; i < await bshdoptions.count(); i++){
    
    const text = await bshdoptions.nth(i).innerText();
    if(text==='Automation Tester'){
        await bshdoptions.nth(i).click()
        break;
    }
}
await page.waitForTimeout(3000);

})