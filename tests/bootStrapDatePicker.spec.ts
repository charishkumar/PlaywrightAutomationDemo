import { test, expect, Locator, Page } from "@playwright/test";

async function selectDates(expYear:string, expMonth: string, expDate:string, whichDate:string, page:Page){

let headerIndex: number;
let tableIndex: number;

switch (whichDate) {
    case 'checkin':
    console.log('Checkin');
        headerIndex = 0;
        tableIndex = 0;        break;
    case 'checkout':
        console.log('Checkout');
        headerIndex = 1;
        tableIndex = 1;
        break;
    default:
        console.log('Unknown option');
        throw new Error(`Unknown option: ${whichDate}`);
        break;
    }

   //const expString:string = expMonth+' '+expYear;
   const expString = `${expMonth} ${expYear}`;
   console.log(`${expMonth} ${expYear}`);
    while(true){

        //navigating to the correct month
        const actString:string = await page.locator("h3[aria-live='polite']").nth(headerIndex).innerText();
        console.log(actString);
        if(actString === expString){
            break;
        }
        else{
            await page.locator('button[aria-label="Next month"]').click();
            //await page.waitForTimeout(1000);
        }
    }

    let checkInDateSelected = false;
    const allDates:Locator[] = await page.locator("table.b8fcb0c66a").nth(tableIndex).locator("td").all();
    for(const date of allDates){
        const dateText:string = await date.innerText();
        if(dateText === expDate){
            checkInDateSelected = true;
            await date.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
}


test("Select BootStrap Date", async({page})=>{

    //navigate /launch the page
    await page.goto("https://www.booking.com/");

    await page.waitForTimeout(6000);

    //click on the datePicker
    await page.getByTestId('searchbox-dates-container').click();

    let expYear:string ='2026';
    let expMonth:string ='March';
    let expDate:string ='10';
    let whichDate:string = "checkin"

    await selectDates(expYear, expMonth, expDate, whichDate, page);
 
    // expYear ='2026';
    // expMonth ='March';
    // expDate='15';
    // whichDate = "checkout"

    // await selectDates(expYear, expMonth, expDate, whichDate, page);
 
})