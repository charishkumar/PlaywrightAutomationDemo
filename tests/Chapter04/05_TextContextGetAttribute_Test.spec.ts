import {test, expect} from '@playwright/test';

test('Get Text Context using Playwright', async ({page}) => {
  await page.goto('https://github.com/BakkappaN/');

    // const textContext = (await page.locator('[itemprop="name"]').textContent())?.trim();
    const textContext = (await page.locator('[itemprop="name"]').innerText()).trim();
    console.log(`Text Context is : ${textContext}`);
    expect(textContext).toBe('Testers Talk');

    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-tab-item');
    console.log(`Attribute Value is : ${attributeValue}`);

});