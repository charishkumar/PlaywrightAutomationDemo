import {test, expect, Locator} from "@playwright/test";

test("Validate Static WebTable", async({page})=> {

await page.goto("https://testautomationpractice.blogspot.com/");

const table:Locator = page.locator("table[name=BookTable] tbody");
expect(table).toBeVisible();

//1. count the number of rows

// const rows:Locator = page.locator("table[name=BookTable] tbody tr");    //returns all the rows including header.
const rows:Locator = table.locator("tr");    //chaining of locators.

//1st approach for assertion
await expect (rows).toHaveCount(7);

//2nd approach for assertion
const rowCount = await rows.count();
console.log("Number of rows in the table: ", rowCount);
expect (rowCount).toBe(7);

//2. count number of columns:

const columns = rows.locator("th")      //chaining of locators which returns all the columns.
//console.log("Number of columns: ", await columns.count())

//1st approach for assertion
await expect (columns).toHaveCount(4);

//2nd approach for assertion
const columnsCount = await columns.count();
console.log("Number of Columns in the table: ", columnsCount);
expect (columnsCount).toBe(4);

//3. Read all data from 2nd row, (index 2 means 3rd row including header row)

// const secondRow = page.locator("table[name=BookTable] tbody tr:nth-child(3)");
const secondRow:Locator = rows.nth(2).locator("td");

console.log(await secondRow.allInnerTexts());

//2nd approach
const secondRowData:string[] = await secondRow.allInnerTexts();
await expect (secondRow).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ])

//3d approach or reading content:
for(let text of secondRowData){
    console.log(text);
}

//4. read the contents of the webtable excluding the header.

const tableData:Locator[] = await rows.all()

for(let data of tableData.slice(1)){                    //removes the th tag by using slice(1)
    console.log(await data.innerText())
}

//print the book names whose author name is Mukesh.

console.log("Books written by Mukesh.......")

// const mukeshBooks:string[]=[];

// for(let row of tableData.slice(1)){                    //removes the th tag by using slice(1)
//     const cells = await row.locator("td").allInnerTexts();
//     const book = cells[0]
//     const author = cells[1]

//     if(author === 'Mukesh'){
//         console.log("Author Name: ${author} \t ${book}");
//         console.log("Author Name: ", book);

//         mukeshBooks.push(book);

//     //    console.log( ${author} \t ${book} );
//     }

//     console.log("Mukesh Books: ", mukeshBooks)

const mukeshBooks:string[]=[];
for (let i = 1; i<rowCount;  i++){
    const author:string = await rows.nth(i).locator("td").nth(1).innerText();
    const book:string = await rows.nth(i).locator("td").nth(2).innerText();
    
    if(author === 'Mukesh'){
        console.log(`Author Name : ${author} and Book Name: ${book}`)
        mukeshBooks.push(book);
    }
}

    console.log("Number of Books written by Mukesh: ", mukeshBooks.length);
    expect(mukeshBooks.length).toBe(2);

//6. calculate teh price of all teh books

let totalPrice =0;

// for(let row of tableData.slice(1)){                    //removes the th tag by using slice(1)
//     const cells = await row.locator("td").allInnerTexts();
//     const price = cells[3];
//     totalPrice = totalPrice + parseInt(price);
// }

for (let i = 1; i<rowCount;  i++){
    const price:string = await rows.nth(i).locator("td").nth(3).innerText();
    totalPrice = totalPrice + parseInt(price);
    }


console.log("Total Price: ", totalPrice);

expect(totalPrice).toBe(7100)

})