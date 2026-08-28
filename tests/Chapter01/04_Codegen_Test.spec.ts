import { test, expect } from '@playwright/test';

test('Codegen Test Case', { tag: '@PlaywrightWithJenkins' }, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
});

test('Codegen Test Case1', { tag: '@PlaywrightWithJenkins' }, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  expect(true).toBe(false);
});