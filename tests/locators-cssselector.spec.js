const { test, expect } = require('@playwright/test');
test('locator test', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    
    // Click on the search input field
    await page.locator('css=[name="search_query"]').click();
    
    // Fill in the search input field with "javascript"
    await page.locator('css=[name="search_query"]').fill('javascript');
    // Click on the search button
    // await page.locator('xpath=//*[@name="search_query"]').press("Enter");
    await page.getByRole('button', { name: 'Search', exact: true }).click()
    // Using waitForTimeout to pause execution for 7 seconds
    await page.waitForTimeout(7000);

    
});
