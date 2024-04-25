    // when gettestbyid is used then we need to enter this testIdAttribute: 'autocomplete',
    //  in playwright.config.js

const {test , expect} = require('@playwright/test')
const playwrightConfig = require('../playwright.config')
test ('locator test', async ({page}) => {
    await page.goto ('https://github.com/login')
    await page.getByTestId('username').fill('azeem')
    await page.waitForTimeout(2000);
})
// my test commit