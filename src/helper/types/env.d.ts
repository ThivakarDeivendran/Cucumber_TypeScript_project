export {};

declare global{
        namespace NodeJS {
            interface ProcessEnv {
                BROWSER : "chrome" | "firefox" | "webKit",
                ENV: "dev"| "test" | "prod",
                BASEURL: string
            }
        }
}