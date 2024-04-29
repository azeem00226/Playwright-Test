import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://gpm.graana.rocks/');
  await page.locator('.ai_forDesktop__ekG31 > img').click();
  await page.getByRole('button', { name: 'SIGN IN' }).click();
  await page.getByRole('combobox').locator('div').first().click();
  await page.locator('//h4[contains(@class, "MuiTypography-root") and contains(@class, "MuiTypography-h4") and contains(@class, "mui-style-t1ukmc") and text()="United Arab Emirates"]').click();
  await page.getByPlaceholder('Phone Number').click();
  await page.getByPlaceholder('Phone Number').fill('3365100609');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Graana@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('body')).toContainText('Incorrect Phone Format');
  await page.waitForTimeout(7000);
});
