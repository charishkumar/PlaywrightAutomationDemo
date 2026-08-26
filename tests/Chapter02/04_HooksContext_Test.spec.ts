import { test as base, expect, chromium } from '@playwright/test';

const extensionPath =
  '/Users/harishc/Library/Application Support/Google/Chrome/Default/Extensions/mpbjkejclgfgadiemmefgebjfooflfhl/3.4.0_0';

const userDataDir =
  '/Users/harishc/playwright-chrome-profile';

// Create custom test fixture
const test = base.extend({
  context: async ({}, use) => {

    const context = await chromium.launchPersistentContext(
      userDataDir,
      {
        headless: false,
        channel: 'chrome',

        args: [
          `--disable-extensions-except=${extensionPath}`,
          `--load-extension=${extensionPath}`,
        ],
      }
    );

    await use(context);

    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  },
});

test('Hooks Test Case1', async ({ page }) => {

  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('link', {name: /Playwright by Testers Talk/,}).click();
  await expect(page.getByRole('link', {name: 'Playwright by Testers Talk ✅',})).toBeVisible();

});

test('Hooks Test Case2', async ({ page }) => {

  await page.goto('https://www.youtube.com/@testerstalk');

  await page.waitForTimeout(5000);

});