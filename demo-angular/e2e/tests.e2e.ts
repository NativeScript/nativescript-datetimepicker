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
        await scrollToElement(driver, "zeit wählen", Direction.down);
        const deLocale = await driver.findElementByText("preferred locale: de_DE");
        expect(deLocale).to.exist;
        const datePicker = await driver.findElementByText("datum auswählen", SearchOptions.contains);
        await datePicker.click();
        const date = await getPickerDate(driver);
        let selector = isAndroid ? "android.widget.Button" : "Bestätigen";
        let acceptBtn;
        let rejectBtn;
        if(isAndroid){
            let buttons = await driver.findElementsByClassName(selector);
            acceptBtn = buttons[7];
            rejectBtn = buttons[6];
        }
        else{
            acceptBtn = await driver.findElementByText(selector, SearchOptions.contains);
            rejectBtn = await driver.findElementByText("Stornieren", SearchOptions.exact);
        }
        const title = await driver.findElementByText("Datum auswählen", SearchOptions.exact);
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

    it("Should select time from de_DE locale picker and verify format", async () => {
        const timePicker = await driver.findElementByText("zeit wählen", SearchOptions.contains);
        await timePicker.click();
        const time = await getPickerTime(driver, 12);
        let acceptBtn;
        let rejectBtn;
        if(isAndroid){
            let buttons = await driver.findElementsByClassName("android.widget.Button");
            acceptBtn = buttons[6];
            rejectBtn = buttons[5];
        }
        else{
            acceptBtn = await driver.findElementByText("Bestätigen", SearchOptions.exact);
            rejectBtn = await driver.findElementByText("Stornieren", SearchOptions.exact);
        }
        const title = await driver.findElementByText("Zeit wählen", SearchOptions.exact);
        expect(acceptBtn).to.exist;
        expect(rejectBtn).to.exist;
        expect(title).to.exist;
        await acceptBtn.click();
        let timeString = time.substr(0, time.indexOf(" "));
        timeString = timeString + " nachm.";
        console.log(timeString);
        const dateField = await driver.findElementByText(timeString);
        expect(timeString).to.exist;
    });

    it("Should scroll to custom format and verify values", async () => {
        await scrollToElement(driver, "binding", Direction.down);
        const customFromatLabel = await driver.findElementByText("custom format");
        expect(customFromatLabel).to.exist;
        const customFormatDate = await driver.findElementByText("date: 24 February 2019", SearchOptions.exact);
        expect(customFormatDate).to.exist;
        const customFormatTime = await driver.findElementByText("time: 01:00", SearchOptions.exact);
        expect(customFormatTime).to.exist;
    });

    it("Should scroll to binding example and verify picker and label values", async () => {
        await scrollToElement(driver, "css applied", Direction.down);
        const bindingLabel = await driver.findElementByText("binding", SearchOptions.exact);
        expect(bindingLabel).to.exist;
        let selector = isAndroid ? "android.widget.EditText" : "XCUIElementTypeTextField"
        let fields = await driver.findElementsByClassName(selector);
        let timeField;
        let dateField;
        if(isAndroid){
            timeField = fields[2];
            dateField = fields[1];
        } 
        else{
            let index = fields.length - 3;
            console.log("index: " + index);
            timeField = fields[index];
            dateField = fields[index - 1];
        }
        await dateField.click();
        let date = await getPickerDate(driver);
        await clickOkBtn(driver);
        let dateTime = new Date(date);
        let year = dateTime.getFullYear().toString();
        let dateLabel = dateTime.toString().substring(0, dateTime.toString().indexOf(year) + 4);
        console.log(dateLabel);
        let bindingDate = await driver.findElementByText(dateLabel, SearchOptions.contains);
    });

    it("Should scroll to css styled DatePicker and verify picker style", async () => {
        await scrollToElement(driver, "tap to select time", Direction.down);
        const cssPicker = await driver.findElementByText("Feb 24, 2019", SearchOptions.exact);
        await cssPicker.click();
        await getPickerDate(driver);
        await driver.compareScreen("cssDatePicker");
        await clickOkBtn(driver);
    });

    it("Should scroll to css styled TimePicker and verify picker style", async () => {
        const cssPicker = await driver.findElementByText("1:00 AM", SearchOptions.exact);
        await cssPicker.click();
        await getPickerTime(driver, 12);
        await driver.compareScreen("cssTimePicker");
        await clickOkBtn(driver);
    });

    it("Should tap button to select date and verify button text", async () => {
        let dateButton = await driver.findElementByText("tap to select date", SearchOptions.contains);
        await dateButton.click();
        const date = await getPickerDate(driver);
        await clickOkBtn(driver);
        const dateString = new Date(date).toLocaleDateString('de-DE', {
            year: 'numeric', 
            month: '2-digit', 
            day: 'numeric' 
        });
        const dateField = await driver.findElementByText(dateString);
        expect(dateString).to.exist;
    })

    it("Should tap button to select time and verify button text", async () => {
        let timeButton = await driver.findElementByText("tap to select time", SearchOptions.contains);
        await timeButton.click();
        const time = await getPickerTime(driver, 24);
        await clickOkBtn(driver);
        timeButton = await driver.findElementByText(time);
        expect(timeButton).to.exist;
    });
});