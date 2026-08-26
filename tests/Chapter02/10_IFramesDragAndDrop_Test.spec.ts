import {test, expect} from '@playwright/test';

test('Handling Iframes Drag and Drop elements in Playwright', async({page}) => {

    //Navigate to URL
    await page.goto('https://jqueryui.com/droppable/');

    //identify the iframe by using locator
    

    //iframe
    const iframe = page.frameLocator('.demo-frame')

    //drag element
    const dragElement = await iframe.locator('//div[@id="draggable"]');

    //drop element
    const dropElement = await iframe.locator('div#droppable');

    await dragElement.dragTo(dropElement)

})