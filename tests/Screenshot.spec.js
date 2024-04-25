const { test, expect } = require('@playwright/test');
const path = require('path');
test('locator test', async ({ page }) => {
    await page.goto('https://www.youtube.com/@testerstalk');
    // element screenshot
    await page.locator('#channel-header-container'). screenshot({path:'./screenshots/element.png'});
    // page screenshot
    await page.screenshot({path:'./screenshots/page.png'});
    // fullpage screenshot
    await page.screenshot({path:'./screenshots/fullpage.png',fullPage: true});
    await page.waitForTimeout(3000);
    
    
    

});
