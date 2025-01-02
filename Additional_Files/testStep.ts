import{Given, Then, When} from "@cucumber/cucumber";
import {chromium, expect} from "@playwright/test";
import { Browser, Page } from "@playwright/test";
let browser: Browser;
let page: Page;

  Given('User launch the Browser', async function () {
    browser =await chromium.launch({headless : false});
    page=await browser.newPage();
  });

  When('User navigate into Application', async function () {
    await page.goto("https://home.openweathermap.org/")
    expect(await page.title()).toBe("Members")
    await page.waitForTimeout(1000)  
    await page.locator("//ul[@class='desktop']//a[contains(text(),'Sign In')]").click();
  });

  When('User enter the {string} and {string} in login Credentials', async function (testdata, string2) {
   await page.fill("//div[@class='sign-form']/form/div/input[@id='user_email']",testdata);
   await page.fill("//div[@class='sign-form']/form/div/input[@id='user_password']",string2);
  });

  When('User click the login button', async function () {
    await page.locator("//input[@name='commit' and @value='Submit']").click();
  });

  Then('User observe message', async function () {
   console.log("Test Passed");
   await page.close();
   await browser.close();
  });