const { test, expect } = require('@playwright/test');

test('IronRidge - Login', async ({ page }) => {
  
  
await page.goto('https://base.ironridge.com/');
await page.getByRole('button', { name: 'Save' }).click();
await page.getByRole('button', { name: 'Sign In' }).click();
await page.waitForLoadState('networkidle');
const email = page.locator('input[name="Email"]').first()
await email.pressSequentially('yahirleonardo.lomeli@gmail.com', { delay: 50 });
await email.waitFor({ state: 'visible', timeout: 10000 });
const pw =  page.locator('input[type="Password"], input#Password').first();
await pw.fill("leonironridge.91");
await page.getByRole('button', { name: 'Sign in' }).click();
await page.waitForTimeout(10000);

 

});