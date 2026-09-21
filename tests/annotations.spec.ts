/* 

Different annotations in Playwright
1. only
2. skip
3. fail
4. fixme
5. slow
*/

import {test, expect} from "@playwright/test"

//By using this annotation, you would have many tests in the file, but test runner will execute only 
// test.only('test1', async({page})=>{
//     await page.goto("https://www.google.com");
//     await expect (page).toHaveTitle('Google');
// })

//By using this annotation, you would have many tests in the file, but test runner will execute only 
test.skip('test2', async({page})=>{
    await page.goto("https://www.google.com");
    await expect (page).toHaveTitle('Google');
})

//skip the test based on some conditions.
test.skip('test3', async({page, browserName})=>{
    test.skip(browserName === 'chromium', 'this test is skipped if browser is chromium')
    await page.goto("https://www.google.com");
    await expect (page).toHaveTitle('Google');
})

//to intentionally fail the test.
test.fail('test4', async({page})=>{
    await page.goto("https://www.google.com");
    await expect (page).toHaveTitle('Google');
})

//to intentionally Mark a test as "fixme", with the intention to fix it. Playwright will not run the test past the test.fixme() call.
test.fixme('test5', async({page})=>{
    await page.goto("https://www.google.com");
    //no assertions
})

//to intentionally run the test 3 times more than the the default time.
//this is not used most of the times.
test('test6', async({page})=>{
    test.slow();    //it waits for 3 times more than default action time out before failing.
    await page.goto("https://www.google.com");
    await expect (page).toHaveTitle('Google');
})