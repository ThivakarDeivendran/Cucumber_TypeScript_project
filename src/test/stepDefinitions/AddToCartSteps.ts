import { When, Then } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";

When('User search for a {string}', async function (book) {
  await pageFixture.page.waitForTimeout(1000);
    await pageFixture.page.locator("input[type='search']").fill(book)
    pageFixture.loggerOption.info("Search book : " + book);
    await pageFixture.page.click("mat-option[role='option'] span")
    await pageFixture.page.waitForTimeout(1000);
  });

  When('User add the book to the cart', async function () {
    await pageFixture.page.waitForTimeout(1000);
    await pageFixture.page.click("//span[normalize-space(text())='Add to Cart']/parent::button")
  });

  Then('cart bag should be updated', async function () {
    await pageFixture.page.waitForTimeout(1000);
    console.log("Testing the AddToCart")
    pageFixture.loggerOption.info("Add 2 Cart successfully");
  });
