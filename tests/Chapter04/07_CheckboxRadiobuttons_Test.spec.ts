import {test, expect} from '@playwright/test';

test('Working with Checkboxes and RadioButtons in Playwright', async ({page}) => {
  await page.goto('https://jqueryui.com/checkboxradio/');

  const iframe = await page.frameLocator('[class="demo-frame"]');
  const isRadioChecked = await iframe.locator('label[for="radio-1"]').isChecked();

    console.log(`Current Status of RadioButton: ${isRadioChecked}`);
    if(isRadioChecked == false){
        await iframe.locator('label[for="radio-1"]').check();
    }

    const isRadioChecked1 = await iframe.locator('label[for="radio-1"]').isChecked();
    console.log(`Current Status of RadioButton: ${isRadioChecked1}`);

})