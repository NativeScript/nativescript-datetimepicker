import { AppiumDriver, SearchOptions,createDriver, Direction, UIElement } from "nativescript-dev-appium";
import { runType } from "nativescript-dev-appium/lib/parser";

const isAndroid: boolean = runType.includes("android");
const optionsText = "Options";
const moreOptionsID = "More options";

export function getDateString() {
    const date = new Date();
    let year = date.getFullYear().toString();
    let month = date.toLocaleString('en-us', { month: 'short' });
    let day = date.getDate().toString();
    if (date.getDate() < 10) {
        day = "0" + date.getDay().toString();
    }
    const dateString = month + " " + day + ", " + year;
    return dateString;
}

 export async function getPickerTime() {
    let driver: AppiumDriver;
    driver = await createDriver();
    driver.defaultWaitTime = 15000;
    let selector = isAndroid ? "android.widget.EditText" : "XCUIElementTypePickerWheel";
    const pickerWheels = await driver.findElementsByClassName(selector);
    let hourWheel = await (await pickerWheels[0]).text();
    let minutesWheel = await (await pickerWheels[1]).text();
    const amPmWheel = await (await pickerWheels[2]).text();
    if(!isAndroid){
        hourWheel = hourWheel.slice(0, hourWheel.indexOf(" "));
        minutesWheel = minutesWheel.slice(0, minutesWheel.indexOf(" "));
    }
    const timeString = hourWheel + ":" + minutesWheel + " " + amPmWheel;
    return timeString;
}

export async function getPickerDate() {
    let driver: AppiumDriver;
    driver = await createDriver();
    driver.defaultWaitTime = 15000;
    let selector = isAndroid ? "android.widget.EditText" : "XCUIElementTypePickerWheel";
    const pickerWheels = await driver.findElementsByClassName(selector);
    let monthWheel = await (await pickerWheels[0]).text();
    let dayWheel = await (await pickerWheels[1]).text();
    const yearWheel = await (await pickerWheels[2]).text();
    const timeString = monthWheel + ":" + dayWheel + " " + yearWheel;
    return timeString;
}