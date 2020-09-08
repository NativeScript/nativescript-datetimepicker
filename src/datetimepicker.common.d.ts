import { View, Page, Color } from "@nativescript/core";
import { DateTimePicker as DateTimePickerDefinition, DateTimePickerStyle as DateTimePickerStyleDefinition } from "./datetimepicker";
export declare const CSS_NAME = "date-time-picker";
export declare const SPINNERS_CSS_NAME = "date-time-picker-spinners";
export declare const BUTTONS_CSS_NAME = "date-time-picker-buttons";
export declare const BUTTON_OK_CSS_NAME = "date-time-picker-button-ok";
export declare const BUTTON_CANCEL_CSS_NAME = "date-time-picker-button-cancel";
export declare class DateTimePickerBase implements DateTimePickerDefinition {
    static pickDate(options: DatePickerOptions, style?: DateTimePickerStyleDefinition): Promise<Date>;
    static pickTime(options: TimePickerOptions, style?: DateTimePickerStyleDefinition): Promise<Date>;
}
export interface DatePickerOptions extends PickerOptions {
    date?: Date;
    minDate?: Date;
    maxDate?: Date;
}
export interface TimePickerOptions extends PickerOptions {
    time?: Date;
    is24Hours?: boolean;
}
export interface PickerOptions {
    context: any;
    locale?: string;
    title?: string;
    okButtonText?: string;
    cancelButtonText?: string;
}
export declare class DateTimePickerStyleBase implements DateTimePickerStyleDefinition {
    dialogBackgroundColor: Color;
    titleTextColor: Color;
    spinnersTextColor: Color;
    spinnersBackgroundColor: Color;
    buttonsTextColor: Color;
    buttonsBackgroundColor: Color;
    buttonOkTextColor: Color;
    buttonOkBackgroundColor: Color;
    buttonCancelTextColor: Color;
    buttonCancelBackgroundColor: Color;
    static create(view: View): DateTimePickerStyleBase;
}
export declare function getCurrentPage(): Page;
