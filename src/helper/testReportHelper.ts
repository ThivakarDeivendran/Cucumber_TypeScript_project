const report = require ("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "testReportResults",
    reportPath: "./",
    reportName: "Playwright_Automation_Report",
    pageTitle: "BookCart_App_test_report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "Chrome",
            version: "131",
        },
        device: "Thivakar Deivendran - PC",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test-Execution Information",
        data: [
            { label: "Project", value: "Book Cart Application" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Functional Testing" }
        ],
    },
});