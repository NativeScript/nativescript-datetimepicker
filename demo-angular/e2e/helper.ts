import { AppiumDriver, SearchOptions,createDriver, Direction, UIElement } from "nativescript-dev-appium";
import { runType } from "nativescript-dev-appium/lib/parser";

const optionsText = "Options";
const moreOptionsID = "More options";
let driver: AppiumDriver;

 export async function getPickerTime(driver: AppiumDriver, format: number) {
    let selector = driver.isAndroid ? "android.widget.EditText" : "XCUIElementTypePickerWheel";
    const pickerWheels = await driver.findElementsByClassName(selector);
    let hourWheel = await (await pickerWheels[0]).text();
    let minutesWheel = await (await pickerWheels[1]).text();
    if(!driver.isAndroid){
        hourWheel = hourWheel.slice(0, hourWheel.indexOf(" "));
        minutesWheel = minutesWheel.slice(0, minutesWheel.indexOf(" "));
    }
    let timeString = hourWheel + ":" + minutesWheel;
    if(format == 12){
        const amPmWheel = await (await pickerWheels[2]).text();
        timeString +=  " " + amPmWheel;
    }
    return timeString;
}

export async function getPickerDate(driver: AppiumDriver) {
    let selector = driver.isAndroid ? "android.widget.EditText" : "XCUIElementTypePickerWheel";
    const pickerWheels = await driver.findElementsByClassName(selector);
    let monthWheel = await (await pickerWheels[0]).text()
    let month = monthWheel.toString().substring(0, 3);
    let dayWheel = await (await pickerWheels[1]).text();
    if(parseInt(dayWheel) < 10 && driver.isAndroid){
        dayWheel = dayWheel.substring(1,2);
    }
    const yearWheel = await (await pickerWheels[2]).text();
    const dateString = month + " " + dayWheel + ", " + yearWheel;
    return dateString;
}

export async function clickOkBtn(driver: AppiumDriver){
    const okBtn = await driver.findElementByText("OK", SearchOptions.exact);
    await okBtn.click();
}

export async function scrollToElement(driver: AppiumDriver, element: string, direction: Direction = Direction.down) {
    let listView: UIElement;
     if (driver.isAndroid) {
        listView = await driver.findElementByClassName("android.widget.FrameLayout");
    }
    else {
        listView = await driver.findElementByClassName("XCUIElementTypeApplication");
    }
    const listItem = await listView.scrollTo(
        direction,
        () => driver.findElementByText(element, SearchOptions.contains),
        600
    );
    return listItem;
}
