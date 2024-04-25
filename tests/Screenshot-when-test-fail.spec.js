// add screenshot: 'only-on-failure', in playwirght.config.js inine 30 under use

const {test , expect} = require('@playwright/test')
test ('locator test', async ({page}) => {
    await page.goto ('https://www.youtube.com/results?search_query=locators+in+javascript+');
    // await page.getByText('#7 - Locators (ID, ClassName, Text, CSS Selector, XPath) in Playwright - Typescript').click()
    await page.getByTitle('#7 - Locators (ID, ClassName, Text, CSS Selector, XPath) in Playwrightt - Typescript').click()
    // by title or text both can use
    await page.waitForTimeout(7000);
})
