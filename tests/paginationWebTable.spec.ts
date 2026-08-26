import {test, expect, Locator} from "@playwright/test";

test("Reading Data from Pagination Table", async({page})=>{

await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

let hasMorePages:boolean = true;

while(hasMorePages){
const rows:Locator[] = await page.locator("table#example tbody tr").all();

for(const row of rows){
    console.log(await row.innerText());
}

//button.dt-paging-button[aria-label=Next]
//button[aria-label=Next]
//button[aria-controls=example]:has-text(">")

const nextButton:Locator = await page.locator("button[aria-label=Next]");
const isDisabled = await nextButton.getAttribute('class')

if(isDisabled?.includes('disabled')){
        hasMorePages = false;

    }
    else{
        await nextButton.click();
    }
}
})


test("Filter the rows and check the rows count", async({page})=>{

await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

const dropDown:Locator = page.locator("#dt-length-0")
await dropDown.selectOption({label:'25'});

const rows:Locator[] = await page.locator("table#example tbody tr").all();
expect(rows.length).toBe(25);   //assertion approach1

const rows2:Locator = page.locator("table#example tbody tr");
expect(rows2).toHaveCount(25);   //assertion approach2

})


test("Search the user and verify", async({page})=>{

await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

const searchBox:Locator = page.locator("#dt-search-0")
await searchBox.fill("Tiger Nixon");

await page.waitForTimeout(2000);
//const rows:Locator = await page.locator("table#example tbody tr");
// expect(rows.allInnerTexts()).toContain("Tiger Nixon");

const rows:Locator[] = await page.locator("table#example tbody tr").all();

if(rows.length >=1){
    let matchFound = false;
    for(const row of rows){
        let text = await row.innerText();
        if(text.includes("Tiger Nixon")){
            console.log("Match Found.")
            matchFound = true;
            break;
        }
    }
    expect(matchFound).toBe(true);   //assertion
    expect(matchFound).toBeTruthy;  //assertion approach 2
}
else{
    console.log("No records for the search text.")
}

})
