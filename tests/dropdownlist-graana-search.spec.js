// Include playwright module
const {test, expect} = require('@playwright/test');

test('Dropdownlist', async ({ page }) => {
    await page.goto('https://gpm.graana.rocks/');
    await page.locator('.ai_forDesktop__ekG31 > img').click();
    await page.getByRole('img', { name: 'icons' }).first().click();

    await page.locator('//div[contains(@class, "MuiButtonBase-root") and contains(text(), "Lahore")]').click();
    await page.getByPlaceholder('Search Area', { exact: true }).click();
    await page.locator('//div[@class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-1s2m65w" and text()="Aarya Nagar"]').click();
    await page.locator('//div[@class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-1s2m65w" and text()="Abbott Road"]').click();

    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(10000);

})

    