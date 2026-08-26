import { test, expect, Locator, Page } from "@playwright/test";

async function selectDate(expYear: string, expMonth: string, expDate: string, page: Page, isFutureDate: boolean) {

    while (true) {

        const actMonth = await page.locator("span.ui-datepicker-month").textContent();
        const actYear = await page.locator("span.ui-datepicker-year").textContent();

        if (expMonth === actMonth && expYear === actYear) {
            break;
        }

        if (isFutureDate) {
            //future
            await page.locator("a.ui-datepicker-next").click()
            //await page.waitForTimeout(1000);
        }
        else {
            //past
            await page.locator("a.ui-datepicker-prev").click();
            // await page.waitForTimeout(1000);
        }
    }
    await page.waitForTimeout(3000);
    const allDates: Locator[] = await page.locator(".ui-datepicker-calendar tbody td").all();

    for (const date of allDates) {
        const actDate: string = await date.innerText()
        if (expDate === actDate) {
            await date.click();
            break;
        }
    }
}

test("JQuery Date Picker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateInput: Locator = page.locator("#datepicker");
    expect(dateInput).toBeVisible();

    //using fill method
    dateInput.fill("01/10/2026")    //dd/mm/yyyy format
    await page.waitForTimeout(3000);

    //using date picker
    await dateInput.click();
    //target date
    const expYear: string = '2025';
    const expMonth: string = 'July';
    const expDate: string = '10';

    selectDate(expYear, expMonth, expDate, page, false);  //futuredate - true, pastDate - false

    const exptDate = '07/10/2025';
    await expect(dateInput).toHaveValue(exptDate);

    await page.waitForTimeout(5000);

})