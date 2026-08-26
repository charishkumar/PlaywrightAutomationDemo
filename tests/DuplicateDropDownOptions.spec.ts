import {test, expect, Locator} from "@playwright/test";

test("Verify Dropdown options has duplicates", async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");


    const colorsOptions: Locator = page.locator("select#colors>option");                                    //does have duplicates
    

    //console.log("Sorted Options: ", colorOptionsText)
    // const animalOptions: Locator = page.locator("select#animals>option");                                   //does not have duplicates
    // const animalOptionsText:string[] = ((await animalOptions.allTextContents())).map(text => text.trim());

    const colorOptionsText:string[] = ((await colorsOptions.allTextContents())).map(text => text.trim());

// so we are creating a set and an array, duplicate elements will be stored in array and non duplicate elements gets stored in set.

const mySet=new Set<String>();
const duplicates:string[] = [];                                     //declaring empty array

for(const text of colorOptionsText){

    if(mySet.has(text)){
        duplicates.push(text);
    }
    else{
        mySet.add(text);

    }
}

if(duplicates.length > 0){
    console.log("Duplicate Elements found : ", duplicates);
}
else
{
    console.log("Duplicate Elements not found.");
}

console.log("Duplicate Elements: ", duplicates);
//expect(duplicates.length).toBe(0);

})