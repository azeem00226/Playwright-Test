    // when gettestbyid is used then we need to enter this testIdAttribute: 'autocomplete',
    //  in playwright.config.js

    const {test , expect} = require('@playwright/test')
    test ('locator test', async ({page}) => {
    await page.goto ('https://www.youtube.com/results?search_query=locators+in+javascript+');

    await page.getByTitle('#7 - Locators (ID, ClassName, Text, CSS Selector, XPath) in Playwright - Typescript').click()
    // by title or text both can use
    await page.waitForTimeout(7000);
})





