const {test , expect} = require('@playwright/test')
test ('locator test', async ({page}) => {
    await page.goto ('https://www.google.com/search?q=cypress+by+tester+talk&sca_esv=ddd81285843a68ee&sca_upv=1&ei=u6goZumnFPmF7M8PsIejuAI&ved=0ahUKEwip8ZHFntqFAxX5AvsDHbDDCCcQ4dUDCBA&uact=5&oq=cypress+by+tester+talk&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmN5cHJlc3MgYnkgdGVzdGVyIHRhbGsyDhAAGIAEGLADGIYDGIoFMg4QABiABBiwAxiGAxiKBTILEAAYgAQYsAMYogQyCxAAGIAEGLADGKIEMgsQABiABBiwAxiiBDILEAAYgAQYsAMYogRI8gRQAFgAcAF4AJABAJgBAKABAKoBALgBA8gBAJgCAaACEpgDAIgGAZAGBpIHATGgBwA&sclient=gws-wiz-serp')
    await page.getByRole('link', {name: "videos"}). click()
    // await page.getByRole('link', { name: 'Images' }). click()
    await page.waitForTimeout(7000);
})