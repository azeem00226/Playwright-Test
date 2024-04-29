import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://gpm.graana.rocks/');
  await page.locator('.ai_forDesktop__ekG31 > img').click();
  // await page.getByRole('button', { name: 'SIGN IN' }).click();
  // await page.getByPlaceholder('Phone Number').click();
  // await page.getByPlaceholder('Phone Number').fill('3365100609');
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill('Graana@123');
  // await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Add Property' }).click();
  await page.locator('div').filter({ hasText: /^Rent$/ }).first().click();
  await page.getByRole('tab', { name: 'Commercial' }).click();
  await page.locator('div').filter({ hasText: /^Plaza$/ }).click();
  await page.getByPlaceholder('Select your city').click();
  await page.locator('//div[contains(@class, "MuiButtonBase-root") and contains(text(), "Lahore")]').click();
  // await page.locator('//div[contains(@class, "MuiButtonBase-root") and contains(text(), "Lahore")]').click();
  await page.getByPlaceholder('0').first().fill('10')
  await page.getByPlaceholder('0').nth(1).fill('100000')
  await page.getByRole('button', { name: '3' }).first().click();
  await page.getByRole('button', { name: '4' }).nth(1).click();
  await page.getByPlaceholder('Name your property').click();
  // await expect(page.locator('Name your property')).toHaveText('10 Marla plaza for rent');
  await page.locator('div:nth-child(10) > div > .MuiInputBase-root > .MuiInputAdornment-root > .MuiBox-root > img').click();
  // await page.getByRole('option', { name: 'Excellent - in a good shapen' }).click
  await page.locator('//li[contains(@class, "MuiButtonBase-root") and contains(@class, "MuiMenuItem-root") and contains(@class, "MuiMenuItem-gutters") and contains(@class, "mui-style-da5mza") and text()="Excellent - in a good shape & well maintained"]').click();
  await page.getByRole('heading', { name: 'ADD FEATURES' }).click();
  await page.getByPlaceholder('Search Features').click()
  await page.getByRole('button', { name: 'Utilities icon' }).click();
  // await page.getByRole('img', { name: 'Tv lounge' }).nth(2).click();
  await page.locator('div').filter({ hasText: /^Sewerage$/ }).click();
  await page.getByRole('button', { name: 'CONFIRM' }).click();
  await page.waitForTimeout(2000);
  await page. getByPlaceholder('Describe your property in').click();
  await page. getByPlaceholder('Describe your property in').fill('my property');
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('e-g 236 D').click();
  await page.getByPlaceholder('e-g 236 D').fill('10');
  await page.waitForTimeout(2000);
  await page.locator('div').filter({ hasText: /^Specify availability$/ }).getByRole('checkbox');
  // await page.waitForTimeout(6000);
 
});
// how to handle listbox in playeright
