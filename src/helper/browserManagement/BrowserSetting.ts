  import {LaunchOptions, chromium, firefox, webkit} from "@playwright/test"

    const options: LaunchOptions = {
    headless: false,
  } 
  export const getBrowser = () =>{
        const browserName = process.env.BROWSER;
        switch (browserName) {
            case "chrome":
                return chromium.launch(options);
                break;
            case "firefox":
                 return firefox.launch(options)
                 break;
            case "webKit":
                return webkit.launch(options)
                break;
            default:
                throw new Error(" Select proper browser");
                
        }

  }