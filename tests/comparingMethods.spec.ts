import { test, expect, Locator } from "@playwright/test";

test("Comparing Methods", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const products: Locator = page.locator('.product-title');
    const count = await products.count();

    await page.waitForTimeout(3000);
    //innerText() vs textContent() methods.

    console.log("****** Comparing innerText() vs textContent() methods ********")

    //innerText() methods return/extracts the exact text without spaces or line breaks. innerText() always returns string type data

    for (let i: number = 0; i < count; i++) {
        console.log(await products.nth(i).innerText());
    }

    //textContent:
    //textContent() methods return/extracts the exact text along with the spaces, line breaks and even hidden elements. textContent() returns either null or string type data

    // for (let i:number =0; i < count; i++){
    //     console.log(await products.nth(i).textContent())
    // }

    for (let i: number = 0; i < count; i++) {
        //const productName: string | null = await products.nth(i).textContent();
        const productName = await products.nth(i).textContent();
        console.log(productName?.trim());
    }


    //allInnerText() vs allTextContent()
    //allInnerText() methods return/extracts the exact text without spaces or line breaks at one shot, without the need of looping statements. 
    //allInnerText() always returns string array type data

    //allTextContent:
    //allTextContent() methods return/extracts the exact text along with the spaces, line breaks and even hidden elements. at one shot without the need of looping statements, 
    // allTextContent() returns either null or string type data

    console.log("****** Comparing allInnerText() vs allTextContent() methods ********")

    // const productNames: string[] = await products.allInnerTexts();
    // console.log("Product names captured by allInnerText() method", productNames)

    const productNames1: string[] = (await products.allInnerTexts()).map(text => text.trim());
    console.log("Product names captured by allTextContent() method", productNames1)

//all() method
//this method returns the array of locators. When you use all() methods to extract locators, then we can use for of loop.
//converts locators into Locator type of an array.
//generally we use in web-tables concept.

console.log("Locators stored in products:")
for(let i =0; i<count; i++){
    console.log(await products.nth(i).innerText())
}

const productLocators: Locator[] = await products.all();
console.log("Locators stored in productLocators:")

for(let loc of productLocators){
    console.log(await loc.innerText());
}

//for in loop

for(let i in productLocators){
    console.log(await productLocators[i].innerText());
}


});