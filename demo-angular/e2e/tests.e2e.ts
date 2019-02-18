import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import { ok } from "assert";
import { getDateString, getTimeString } from "./helper";
const fs = require('fs');
const addContext = require('mochawesome/addContext');
const rimraf = require('rimraf');
const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("DateTimePicker", () => {
    const defaultWaitTime = 5000;
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
        driver.defaultWaitTime = 15000;
        let dir = "mochawesome-report";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        rimraf('mochawesome-report/*', function () { });
    });

    after(async () => {
        if (isSauceRun) {
            driver.sessionId().then(function (sessionId) {
                console.log("Report https://saucelabs.com/beta/tests/" + sessionId);
            });
        }
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state && this.currentTest.state === "failed") {
            let png = await driver.logScreenshot(this.currentTest.title);
            fs.copyFile(png, './mochawesome-report/' + this.currentTest.title + '.png', function (err) {
                if (err) {
                    throw err;
                }
                console.log('Screenshot saved.');
            });
            addContext(this, './' + this.currentTest.title + '.png');
        }
    });

    it("Should verify demo title", async () => {
        const title = await driver.findElementByText("DateTimePicker Demo NG", SearchOptions.exact);
        expect(title).to.exist;
    });

    it("Should select date and verify value of picker field", async () => {
        const selectDateField = await driver.findElementByText("select date", SearchOptions.contains);
        await selectDateField.click();
        const okBtn = await driver.findElementByText("OK", SearchOptions.exact);
        await okBtn.click();
        const date = getDateString();
        console.log(date);
        const dateSelected = await driver.findElementByText(date);
        expect(dateSelected).to.exist;
    });

    it("Should select time and verify value of picker field", async () => {
        const selectTimeField = await driver.findElementByText("select time", SearchOptions.contains);
        await selectTimeField.click();
        const okBtn = await driver.findElementByText("OK", SearchOptions.exact);
        await okBtn.click();
        const timeString = getTimeString();
        console.log(timeString);
        const timeSelected = await driver.findElementByText(timeString);
        expect(timeSelected).to.exist;
    })

});