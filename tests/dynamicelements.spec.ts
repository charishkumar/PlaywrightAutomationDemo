import {test, expect, Locator} from "@playwright/test";

test("Handling Dynamic Elements", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    for(let i:number=0; i<=5; i++){
        let dynamicButton:Locator = page.locator("//button[text()='START' or text()='STOP']")
        //let dynamicButton:Locator = page.locator("//button[starts-with(text(),'ST')]") or //button[starts-with(@name,'st')]
        //let dynamicButton:Locator = page.locator("//button[contains(@class, 'st')]")
        //let dynamicButton:Locator = page.locator("//button[@name='start' or @name='stop']")
        await dynamicButton.click();
        await page.waitForTimeout(2000);
    }

})

//by using css locator

test("Handling Dynamic Elements by CSS", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    for(let i:number=0; i<=5; i++){
        let dynamicButton:Locator = page.locator("button[name='start'], button[name='stop']")
        await dynamicButton.click();
        await page.waitForTimeout(2000);
    }

})

//by using playwright inbuilt locators
test("Handling Dynamic Element by Role", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    for(let i:number=0; i<=5; i++){
        let dynamicButton:Locator = page.getByRole('button', {name:/START|STOP/});
        await dynamicButton.click();
        await page.waitForTimeout(2000);
    }

})