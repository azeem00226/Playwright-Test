const {test, expect} = require('@playwright/test');

// Write a test
test('Handle iframes in playwright & Drag nd Drop', async({page}) =>{
    // Go to URL
    await page.goto('https://gpm.graana.rocks')
    // await page.locator('input[type='number'][placeholder='Property ID Search'][autocomplete='new-password'].MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.mui-style-1ixds2g')
   
    await page.locator('.ai_forDesktop__ekG31 > img').click();
    await page.getByPlaceholder('Property ID Search').click();
    await page.getByPlaceholder('Property ID Search').fill('234242');
    await page.getByPlaceholder('Property ID Search').press('Enter');
    await page.waitForTimeout(5000);

})