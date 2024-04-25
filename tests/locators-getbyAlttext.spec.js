const {test , expect} = require('@playwright/test')
test ('locator test', async ({page}) => {
    await page.goto ('https://www.graana.com/')
    await page.getByRole('link', { name: 'Graana Logo' }). click()
    // await page.getByRole('link', { name: 'Images' }). click()
    await page.waitForTimeout(7000);
})