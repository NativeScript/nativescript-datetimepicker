import { AppiumDriver, createDriver, SearchOptions, Direction} from "nativescript-dev-appium";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import { ok } from "assert";
import { getPickerTime, clickOkBtn, scrollToElement, getPickerDate} from "./helper";
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
        const date = await getPickerDate(driver);
        await clickOkBtn(driver);
        const dateSelected = await driver.findElementByText(date);
        expect(dateSelected).to.exist;
    });

    it("Should select time and verify value of picker field", async () => {
        const selectTimeField = await driver.findElementByText("select time", SearchOptions.contains);
        await selectTimeField.click();
        const timeString = await getPickerTime(driver, 12);
        await clickOkBtn(driver);
        const timeSelected = await driver.findElementByText(timeString, SearchOptions.contains);
        expect(timeSelected).to.exist;
    });

    it("Should select date from min/max limited field", async () => {
        const minMaxDatePicker = await driver.findElementByText("tap to select", SearchOptions.contains);
        await minMaxDatePicker.click();
        const date = await getPickerDate(driver);
        await clickOkBtn(driver);
        const dateSelected = await driver.findElementByText(date);
        expect(dateSelected).to.exist;
    });

    it("Should open 12h time format and verify wheelers values", async () => {
        const twelveHourFormat = await driver.findElementByText("4:00 PM", SearchOptions.contains);
        await twelveHourFormat.click();
        const timeString = await getPickerTime(driver, 12);
        await clickOkBtn(driver);
        expect(timeString).to.equal("4:00 PM");
    });

    it("Should open 24h format and verify wheeler value", async () => {
        const twentyFourFormat = await scrollToElement(driver, "16:00", Direction.down);
        await twentyFourFormat.click();
        const timeString = await getPickerTime(driver, 24);
        await clickOkBtn(driver);
        expect(timeString).to.equal("16:00");
    });

    it("Should verify modified texts field for date picker", async () => {
        await scrollToElement(driver, "modified picker texts", Direction.down);
        const pickers = await driver.findElementsByText("tap to choose");
        const datePicker = pickers[0];
        await datePicker.click();
        const date = await getPickerDate(driver);
        const approveBtn = await driver.findElementByText("Approve", SearchOptions.contains);
        const rejectBtn = await driver.findElementByText("Reject", SearchOptions.contains);
        const title = await driver.findElementByText("Confirm predefined date selection", SearchOptions.contains);
        expect(approveBtn).to.exist;
        expect(rejectBtn).to.exist;
        expect(title).to.exist;
        await approveBtn.click();
        const dateString = await driver.findElementByText(date);
        expect(dateString).to.exist;
    });

    it("Should verify modified texts field for time picker", async () => {
        const datePicker = await driver.findElementByText("tap to choose");
        await datePicker.click();
        const time = await getPickerTime(driver, 12);
        const approveBtn = await driver.findElementByText("Approve", SearchOptions.contains);
        const rejectBtn = await driver.findElementByText("Reject", SearchOptions.contains);
        const title = await driver.findElementByText("Confirm predefined time selection", SearchOptions.contains);
        expect(approveBtn).to.exist;
        expect(rejectBtn).to.exist;
        expect(title).to.exist;
        await approveBtn.click();
        const dateString = await driver.findElementByText(time);
        expect(dateString).to.exist;
    });

    it("Should select date from de_De locale picker and verify format", async () => {
        await scrollToElement(driver, "preferred locale: de_DE", Direction.down);
        const datePicker = await driver.findElementByText("datum auswählen", SearchOptions.contains);
        await datePicker.click();
        const date = await getPickerDate(driver);
        const acceptBtn = await driver.findElementByText("BestÄtigen", SearchOptions.contains);
        const rejectBtn = await driver.findElementByText("Stornieren", SearchOptions.contains);
        const title = await driver.findElementByText("Datum auswählen", SearchOptions.contains);
        expect(acceptBtn).to.exist;
        expect(rejectBtn).to.exist;
        expect(title).to.exist;
        await acceptBtn.click();
        const dateString = new Date(date).toLocaleDateString('de-DE', {
            year: 'numeric', 
            month: '2-digit', 
            day: 'numeric' 
        });
        const dateField = await driver.findElementByText(dateString);
        expect(dateString).to.exist;
    });

});