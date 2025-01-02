 import { Given , When, Then } from "@cucumber/cucumber"
 const {test, expect} = require ("@playwright/test")
const { chromium, Browser, Page } = require('@playwright/test')
var browser;
var page ;
Given('User launch the Application', async function () {
   browser =await chromium.launch({headless : false});
   page=await browser.newPage();
  });

  Given('User Navigate into Login Page', async function () {
     await page.goto("https://www.saucedemo.com/")
     expect(await page.title()).toBe("Swag Labs")
  });
   When('User Enter the username {string}', async function (username) {
      await page.fill("#user-name", username)
   });
  When('User Enter the password {string}', async function (password) {
    await page.fill("#password", password)
  });

  When('User click the login button in Application', async function () {
   await page.click("#login-button")
  });

  Then('User Observe that MainPage displays', async function () {
    var mainPageTitle =await page.locator(".title").textContent();
    expect(mainPageTitle).toBe("Products");
    await page.waitForTimeout(3000)
    await browser.close()

  });
