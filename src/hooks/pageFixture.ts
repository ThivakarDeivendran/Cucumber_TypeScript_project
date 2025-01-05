import { Page } from "@playwright/test";
import { loggerOption } from "../helper/util/logger";
import { Logger } from "winston";

 export const pageFixture = {
    //@ts-ignore
    page: undefined as Page,
    loggerOption: undefined as Logger
}