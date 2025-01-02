 import { pageFixture } from "../../hooks/pageFixture";
import { Given , When, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";

 Given('User launch the Browser', async function () {
  console.log("BeforeAll Executated")
});
  When('User navigate into Application', async function () {    
    await pageFixture.page.goto("https://bookcart.azurewebsites.net/")
    expect(await pageFixture.page.title()).toBe("BookCart")
    await pageFixture.page.waitForTimeout(1000)
  });
  When('User click the login button', async function () {
    await pageFixture.page.click("//span[text()=' Login ']/parent::button");
    await pageFixture.page.waitForTimeout(1000);
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
  });
  Then('User validate the Main page', async function () {
    console.log("passed");
  });