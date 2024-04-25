import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');
await page.getByRole('link', { name: 'Sign in' }).click();
await page.getByLabel('Username or email address').fill('ddd');
await page.getByLabel('Password').click();
await page.getByLabel('Password').fill('dddd');
await expect(page.getByRole('button', { name: 'Sign inb', exact: true })).toBeVisible();
await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  
});