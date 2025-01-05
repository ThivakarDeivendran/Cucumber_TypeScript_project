import { Before , After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber"
const  {chromium, Browser, Page, Context } =require  ("@playwright/test");
const { getBrowser } =require  ("../helper/browserManagement/BrowserSetting");
import { pageFixture } from "./pageFixture";
import { createLogger } from "winston";
const { getEnvironment } =require ("../helper/env/env");
import { loggerOption } from "../helper/util/logger";

let browser = Browser;
let page = Page;
let context = Context;

BeforeAll(async function(){
    // getEnvironment();
    // browser = await getBrowser();
     browser =await chromium.launch({headless : false});   
})
Before(async function({pickle}){
    const name = pickle.name + pickle.id;
     context = await browser.newContext();
        page=await context.newPage();
    pageFixture.page =page;
    pageFixture.loggerOption =createLogger(loggerOption(name))
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
    pageFixture.loggerOption.close();
})