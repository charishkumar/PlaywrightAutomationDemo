import{test, expect, Locator} from '@playwright/test';

test('Orderby drop down verification Testcase', async({page}) => {

    test.setTimeout(240000); // 4 minutes

    //Navigate to URL
    await page.goto("https://www.bstackdemo.com/");

    const sortDD: Locator = await page.locator("//div[@class='sort']//select")
    //to check if the dropdown is visible and enabled
    await expect(sortDD).toBeVisible();
    await expect(sortDD).toBeEnabled();

    //to list out all the options in the dropdown
    const optionsList = await sortDD.locator('option').allTextContents();
    console.log("Options in the dropdown:", optionsList);

    //select an option from the dropdown by value

    sortDD.selectOption({value: 'lowestprice'});
    await page.waitForTimeout(2000);

    const selectedValue = await sortDD.inputValue();
    console.log(selectedValue); // e.g. "blue"

    // expect(selectedValue).toEqual('lowestprice');
    // await page.waitForTimeout(2000)x;x
     await expect(sortDD).toHaveValue("lowestprice")


     //click on apple:
     await page.locator("//span[normalize-space()='OnePlus']").click();
     await page.waitForTimeout(3000);

     const products: Locator = await page.locator("//p[@class='shelf-item__title']");
     const productsList = await products.allTextContents();
     
    const myProductSet = new Set()

     for(const prod of productsList){
        console.log(prod)
        myProductSet.add(prod)
     }

    console.log("Sorted By Name: ", myProductSet)

    sortDD.selectOption('Select');
    await page.waitForTimeout(5000);

    
    //to find the list of prices:
    const productPriceList = await page.locator("//div[@class='val']").allTextContents();   
     for (const price of productPriceList){
        console.log(price)
    }
//sorting the price in the list
    productPriceList.sort()
     console.log("Manually Sorted Pricelist: ", productPriceList)


    //selecting lowest price option
    sortDD.selectOption({value: 'lowestprice'});
    await page.waitForTimeout(5000);

    const sortedProductPriceList = await page.locator("//div[@class='val']").allTextContents();   
    console.log("Sorted Pricelist: ", sortedProductPriceList)

    expect(productPriceList.sort()).toEqual(sortedProductPriceList);

    //matching price and products count
    const prodPriceCount = productPriceList.length
    const prodCount = productsList.length

    console.log("Number of Products: ", prodCount)
    console.log("Number of Prices Listed: ", prodPriceCount)


    expect (prodPriceCount).toEqual(prodCount)
    

//div[@class='shelf-item']
//div[@class='shelf-item__title']
//div[@class='shelf-item__price']//div[@class='val']

const itemcount = await page.locator("//div[@class='shelf-item']").count();
console.log("Number of Products: ", itemcount)

for (let i = 0; i <itemcount; i++){

    //const productTitle : Locator = page.locator("(//div[@class='shelf-item'])["+i+"]//p");
    const productTitle = page.locator("//div[@class='shelf-item']").nth(i).locator("p");
    const productTitleText = await productTitle.textContent()
    // const productPrice = await page.locator ("(//div[@class='shelf-item'])["+i+"]//div[@class='val']");
    const productPrice = page.locator("//div[@class='shelf-item']").nth(i).locator("//div[@class='val']");
    const productPriceText = await productPrice.textContent();

    console.log(`Product name: ${productTitleText}, Product Price: ${productPriceText}`);
    // console.log(`Name: ${this.name}, Color: ${this.color} , Model: ${this.model}, Year of Make: ${this.year}`);
}

})