const {test , expect} = require('@playwright/test')
test ('locator test', async ({page}) => {
    
    await page.goto ('https://www.google.com/')
    await page.getByLabel('Search', { exact: true }) .fill('cypress by tester talk')
    await page.getByRole('button', { name: 'Google Search' }).click()
    await page.waitForTimeout(2000);
})
