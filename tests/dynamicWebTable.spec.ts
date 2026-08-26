

import {test, expect, Locator} from "@playwright/test";

test("Verify Chrome CPU Load in Dynamic Table", async ({page})=> {


    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const dyTable:Locator = page.locator("table.table.table-striped tbody");
    await expect(dyTable).toBeVisible();

    //1. select all the rows and find number of rows
    const rows:Locator[] = await dyTable.locator("tr").all();
    console.log ("Number of Rows: ", rows.length);
    expect(rows).toHaveLength(4);

    //1. For chrome process capture the value of CPU load.
    //Loop through each row and check if chrome is present or not.

    let cpuLoad = "";
    let chromeBoxText: string = await page.locator("#chrome-cpu").innerText();
    
    for(const row of rows) {
        const processName = await row.locator("td").nth(0).innerText();
        if(processName === 'Chrome'){
            // cpuLoad = await row.locator('td:has-text("%")').innerText();      //css syntax
            cpuLoad = await row.locator("td",{hasText:'%'}).innerText();     //playwright syntax
            console.log("CPU Load of Chrome: ", cpuLoad);
            break;
        }
    }

    if(chromeBoxText.includes(cpuLoad)){
        console.log("CPU Load of Chrome is same")
    }
    else{
        console.log("CPU Load of Chrome is not same")
    }

    //proper assertions
    expect(chromeBoxText).toContain(cpuLoad);
})  