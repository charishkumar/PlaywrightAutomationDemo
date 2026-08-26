import {test, expect, Locator} from "@playwright/test"

// test.use({
//   viewport: null
// });

test("Text Input Actions", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//Text Input, text box, input box.

const textBox:Locator = page.locator("input#name"); //or #name
await expect (textBox).toBeVisible();                       // to verify whether the text box is visible or not.
await expect (textBox).toBeEnabled();                       // to verify whether the text box is enabled or not.

const maxlength: null|string = await textBox.getAttribute("maxlength");  // returns the value of max length attribute of the element.
console.log("Max Length of Name text box: ", maxlength);

expect(maxlength).toBe("15");                                           // to verify whether the maxlength is 15 or not.

await textBox.fill("Harisha");                                          //entering the text to the textBox

const value:string = await textBox.inputValue();                        //returns the value of the input box.
expect(value).toBe("Harisha");

await page.waitForTimeout(3000);

})

//Radio Button Actions

test ("Radio Button Actions", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleRadioButton:Locator = page.locator("#male")           //Male radio button
    await expect (maleRadioButton).toBeVisible();                       // to verify whether the radio button is visible or not.
    await expect (maleRadioButton).toBeEnabled();                       // to verify whether the radio button is enabled or not.

    expect(await maleRadioButton.isChecked()).toBe(false);              // to check if radio button is checked and assesting that it is not checked.
    
    await maleRadioButton.check()                                       //select the radio button
    expect(await maleRadioButton.isChecked()).toBe(true);
    expect(await maleRadioButton).toBeChecked();              // to check if radio button is checked and assesting that it is not checked.
    

    await page.waitForTimeout(3000);
})

//checkbox

test ("Check Box Actions", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const sundayCheckBox:Locator = page.getByLabel('Sunday')           //Sunday checkbox 
    await expect (sundayCheckBox).toBeVisible();                       // to verify whether the checkbox is visible or not.
    await expect (sundayCheckBox).toBeEnabled();                       // to verify whether the checkbox is enabled or not.

    expect(await sundayCheckBox.isChecked()).toBe(false);              // to check if checkbox is checked and assesting that it is not checked.
    
    await sundayCheckBox.check()                                       //select the checkbox
    expect(await sundayCheckBox.isChecked()).toBe(true);
    expect(await sundayCheckBox).toBeChecked();              // to check if checkbox is checked and assesting that it is not checked.
    
//select all checkboxes and assert each is checked

 const allDaysCheckboxes:Locator = page.locator("input[id$='day']");
 let count = await allDaysCheckboxes.count()

//  for(let i:number =0; i < count; i++){
//     await allDaysCheckboxes.nth(i).check();
//     expect(await allDaysCheckboxes.nth(i).isChecked());
//  }

//or

// //second way of checking all the checkboxes and asserting it.

 const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const allDaysCheckboxes1:Locator = page.locator("input[id$='day']");

 const checkBoxes:Locator[] = days.map(index => page.getByLabel(index));

 for(const checkbox of checkBoxes){
    await checkbox.check()
    expect(await checkbox.isChecked());
 }

//uncheck last 3 checkboxes and assert the same.


//  for(let i:number =(count-3); i < count; i++){
//     await allDaysCheckboxes.nth(i).uncheck();
//     expect(await allDaysCheckboxes.nth(i).isChecked());
//  }

 //or

 for(const checkbox of checkBoxes.slice(-3)){
    await checkbox.uncheck()
    expect(await checkbox.isChecked()).toBe(false);
 }

// Toggle checkboxes : select the checkboxes which are not selected and viceversa. Assert the state flipped.

 for(const checkbox of checkBoxes){
    
    if(await checkbox.isChecked()){
        await checkbox. uncheck()
        expect(await checkbox.isChecked()).toBe(false);
    }
    else
    {
        await checkbox.check()
        expect(await checkbox.isChecked()).toBe(true);
    }
 }

 for(const checkbox of checkBoxes.slice(-3)){
    await checkbox.uncheck()
    expect(await checkbox.isChecked()).toBe(false);
 }

 //randomly select checkboxes -- select checkboxes by index (1, 3, 5) etc

    const indexes:number[] = [1, 3, 5];
    for(const i of indexes){
            await checkBoxes[i].check();
        await expect(checkBoxes[i]).toBeChecked();
    }
// check the checkboxes based on weekname

await page.waitForTimeout(3000);

// to uncheck all checkboxes
 for(const checkbox of checkBoxes){
    await checkbox.uncheck()
    expect(await checkbox.isChecked()).toBe(false);
 }

const weekName:string = 'Sunday';
for(const lable of days){
    
if(lable.toLowerCase() === weekName.toLowerCase()){
    const chBox:Locator = page.getByLabel(lable);
    await chBox.check()
    expect (await chBox.isChecked()).toBe(true);
}
    
}

    await page.waitForTimeout(5000);
})
