const {test} = require('@playwright/test')

test('test demo app', async({page}) => {
    console.log('******** sample test ************')
    await page.goto('http://www.google.com')
})