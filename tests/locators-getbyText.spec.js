    // when gettestbyid is used then we need to enter this testIdAttribute: 'autocomplete',
    //  in playwright.config.js

const {test , expect} = require('@playwright/test')
test ('locator test', async ({page}) => {
    await page.goto ('https://www.youtube.com/results?search_query=locators+in+javascript+');
    await page.getByRole('link', { name: '#7 - Locators (ID, ClassName' }).click()
    await page.waitForTimeout(7000);
})





