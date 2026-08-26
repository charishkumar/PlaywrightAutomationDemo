import {test, expect, Locator} from '@playwright/test';

test('Verify Dropdown options has duplicates', async({page}) => {

//navigate to URL
await page.goto("https://testautomationpractice.blogspot.com/");

//identify the drodown list
const colorsOptions:Locator = page.locator("select#colors>option");     //duplicate entries are present in the list
console.log("Options in the dropdown:", await colorsOptions.allTextContents());

 const colorsOptionsList: String[] = (await colorsOptions.allTextContents()).map(option => option.trim());  //trim the options to remove any leading or trailing spaces
// console.log("Non duplicate Options in the dropdown:", colorsOptionsList);

//check if the list has duplicates or not.
const mySet = new Set(colorsOptionsList);
console.log("Non duplicate Options in the dropdown:", mySet);

//Or

const mySet1 : Set<String> = new Set <String>();
const duplicateSet : Set<String> = new Set <String>();

for (const option of colorsOptionsList) {

        if(mySet1.has(option)){
        duplicateSet.add(option);
    }else{
        mySet1.add(option);
    }

}

console.log("Non duplicate Options in the dropdown:", mySet1);
console.log("Duplicate Options in the dropdown:", duplicateSet);

})
