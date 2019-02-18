import { AppiumDriver, SearchOptions, Direction, UIElement } from "nativescript-dev-appium";
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

export function getTimeString() {
    const date = new Date();
    let timeString = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
    
    return timeString;
}