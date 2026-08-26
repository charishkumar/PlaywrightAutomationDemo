//alert(), confirm(), prompt() dialogs/JSalerts
//References https://playwright.dev/docs/dialogs#alerts-confirm-prompt-dialogs

//1. By default dialogs are auto dismissed by Playwright, so you don't have to handle them.
//2. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

import { test, expect, Locator } from "@playwright/test";

test("Simple Dialog Box", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Registering a dialog handler
    // page.on('dialog', dialog => dialog.accept());
    page.on('dialog', dialog => {

        console.log("Dialog type: ", dialog.type())         // This will capture the type of dialog (alert()/prompt() or confirm())
        expect(dialog.type()).toContain('alert');

        console.log("Text on the Dialog: ", dialog.message())   //this will return the message on the dialog box.
        expect(dialog.message()).toContain("I am an alert box!");      //adding assertions on the dialog box.

        dialog.accept()
    });

    await page.locator("#alertBtn").click();        //this will open the dialog box
    await page.waitForTimeout(5000);

})


test("Confirmation Dialog Box", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Registering a dialog handler
    // page.on('dialog', dialog => dialog.accept());
    page.on('dialog', dialog => {

        console.log("Dialog type: ", dialog.type())         // This will capture the type of dialog (alert()/prompt() or confirm())
        expect(dialog.type()).toContain('confirm');

        console.log("Text on the Dialog: ", dialog.message())   //this will return the message on the dialog box.
        expect(dialog.message()).toContain("Press a button!");      //adding assertions on the dialog box.

        dialog.accept()                                 // it will close the dialog by clicking on OK.
        //dialog.dismiss()                                 // it will close the dialog by clicking on Cancel.

    });

    await page.locator("#confirmBtn").click();        //this will open the confirmation dialog box

    const confirmMsg: string = await page.locator("#demo").innerText();
    console.log("Output Text: ", confirmMsg)
    //await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
    await expect(page.locator("#demo")).toHaveText("You pressed OK!");
    await page.waitForTimeout(5000);

})



test("Prompt Dialog Box", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Registering a dialog handler
    // page.on('dialog', dialog => dialog.accept());
    page.on('dialog', dialog => {

        console.log("Dialog type: ", dialog.type())         // This will capture the type of dialog (alert()/prompt() or confirm())
        expect(dialog.type()).toContain('prompt');

        console.log("Text on the Dialog: ", dialog.message())   //this will return the message on the dialog box.
        expect(dialog.message()).toContain("Please enter your name:");      //adding assertions on the dialog box.

        console.log("Default Value: ", dialog.defaultValue())                           //dialog.defaultValue() will capture the default value in the text box of dialog box
        expect(dialog.defaultValue()).toContain("Harry Potter");

        //dialog.accept('Harry')                                 // it will replace the default value in the dialog and clicks on OK.
        dialog.dismiss()                                 // it will close the dialog by clicking on Cancel.

    });

    await page.locator("#promptBtn").click();        //this will open the confirmation dialog box

    const confirmMsg: string = await page.locator("#demo").innerText();
    console.log("Output Text: ", confirmMsg)
    await expect(page.locator("#demo")).toHaveText("User cancelled the prompt.");
    //await expect(page.locator("#demo")).toHaveText("Hello Harry! How are you today?");
    await page.waitForTimeout(5000);

})