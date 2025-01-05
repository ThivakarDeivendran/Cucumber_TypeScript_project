import { Before , After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber"
const  {chromium, Browser, Page, Context } =require  ("@playwright/test");
const { getBrowser } =require  ("../helper/browserManagement/BrowserSetting");
import { pageFixture } from "./pageFixture";
import { createLogger } from "winston";
const { getEnvironment } =require ("../helper/env/env");
import { loggerOption } from "../helper/util/logger";
const fs =require ("fs-extra");

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
        recordVideo: {
        dir: "testReportResults/reportVideos"
        }

        page=await context.newPage();
        pageFixture.page =page;
        pageFixture.loggerOption =createLogger(loggerOption(name))
})
After(async function({pickle,result}){
    let videoPath :string;
    let image: Buffer;
    console.log(result.status);
    if(result?.status == Status.FAILED){
         image =await pageFixture.page.screenshot({path:`./testReportResults/screenShots/${pickle.name}.png`,type:"png"})
         videoPath = await pageFixture.page.video().path();
    } 
    pageFixture.page.close();
    context.close();

    if(result?.status == Status.FAILED){
        await this.attach(image,"image/png");
        await this.attach(fs.readFileSync(videoPath), 'video/webm');
    }
})
AfterAll(async function(){
    await browser.close(); 
    // pageFixture.loggerOption.close();
})