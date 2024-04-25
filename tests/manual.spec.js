// How to write test

// Include playwright module
const {test , expect} = require('@playwright/test')
const { access } = require('fs')
const { url } = require('inspector')
// test is used to write test case and expect is used to validate or to assert the web element 
// or any text

// write a test
test('Validate Youtube title', async({page}) =>{
    // page object is used to access the webpage 
   
    // goto url
    await page.goto('https://www.youtube.com/')
    await page.getByPlaceholder('Search'). click();
    await page.getByPlaceholder('Search'). fill('cypress tutorial');

    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    // excpect is used when validate something from webpage,xcept is use to check weather 
    // the element is displayed or not, / except keyword is use to assert the element or webpage

    await (page.getByRole('button', { name: 'Search', exact: true })).click();
    // await page.waitForTimeout(20000)
    // 5000 means 5 sec wait

    // await(page.getByRole('heading', { name: 'The Complete Cypress 13+' })). click();
   
    await (page.getByRole('link', { name: 'Cypress - JavaScript End to End Testing(2022 Series) SDET- QA · Playlist' })).click();
   
    await expect(page).toHaveTitle('Part 1: Cypress E2E Web Automation | Introduction | 2022 Series - YouTube')
})
  