 import { pageFixture } from "../../hooks/pageFixture";
import { Given , When, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";

 Given('User launch the Browser', async function () {
  console.log("BeforeAll Executated")
});
  When('User navigate into Application', async function () {    
    // await pageFixture.page.goto(process.env.BASEURL)
    //await pageFixture.page.goto("https://bookcart.azurewebsites.net/")
    await pageFixture.page.goto("https://www.facebook.com/");
    pageFixture.loggerOption.info("navigation completed")
    expect(await pageFixture.page.title()).toBe("BookCart")
    pageFixture.loggerOption.info("application title verified successfully");
    await pageFixture.page.waitForTimeout(1000)
  });
  When('User click the login button', async function () {
    await pageFixture.page.click("//span[text()=' Login ']/parent::button");
    await pageFixture.page.waitForTimeout(1000);
    pageFixture.loggerOption.info("click login button successfully");
  });

  When('User enter the username {string}', async function (username) {  
    await pageFixture.page.fill("//input[@formcontrolname='username']",username)
    await pageFixture.page.waitForTimeout(1000);
  });

  When('User enter the Password {string}', async function (password) {  
     await pageFixture.page.fill("//input[@formcontrolname='password']",password)
  });
  When('user click the submit button', async function () {
     await pageFixture.page.click("//span[text()='Login']/parent::button")
      await pageFixture.page.waitForTimeout(1000);
      pageFixture.loggerOption.info("application login successfully");
  });
  Then('User validate the Main page', async function () {
    console.log("passed");
  });