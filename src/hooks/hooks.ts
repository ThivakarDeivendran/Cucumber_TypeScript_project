import { Before , After, BeforeAll, AfterAll, AfterStep, Status } from "@cucumber/cucumber"
const {Browser, Page, chromium, Context } =require ("@playwright/test");
import { pageFixture } from "./pageFixture";

let browser = Browser;
let page = Page;
let context = Context;
BeforeAll(async function(){
    browser =await chromium.launch({headless : false});
})
Before(async function(){
     context = await browser.newContext();
        page=await context.newPage();
    pageFixture.page =page;
})

After(async function({pickle,result}){
    console.log(result.status);
    if(result?.status == Status.FAILED){
        let image =await pageFixture.page.screenshot({path:`./testReportResults/screenShots/${pickle.name}.png`,type:"png"})
        await this.attach(image,"image/png");
    } 
    pageFixture.page.close();
    context.close();
})

AfterAll(async function(){
    await browser.close(); 
})