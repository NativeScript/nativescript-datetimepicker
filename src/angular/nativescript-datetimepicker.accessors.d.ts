import { ElementRef } from "@angular/core";
import { BaseValueAccessor } from "@nativescript/angular/forms/value-accessors";
import { DatePickerField } from "../ui/date-picker-field";
import { TimePickerField } from "../ui/time-picker-field";
import { DateTimePickerFields } from "../ui/date-time-picker-fields";
export declare class DatePickerValueAccessor extends BaseValueAccessor<DatePickerField> {
    private _hasBeenOpened;
    constructor(elementRef: ElementRef);
    writeValue(value: any): void;
    handleDateChange(args: any): void;
    handleDatePickerOpened(args: any): void;
    handleDatePickerClosed(args: any): void;
}
export declare class TimePickerValueAccessor extends BaseValueAccessor<TimePickerField> {
    private _hasBeenOpened;
    constructor(elementRef: ElementRef);
    writeValue(value: any): void;
    handleTimeChange(args: any): void;
    handleTimePickerOpened(args: any): void;
    handleTimePickerClosed(args: any): void;
}
export declare class DateTimePickersValueAccessor extends BaseValueAccessor<DateTimePickerFields> {
    private _hasBeenOpened;
    constructor(elementRef: ElementRef);
    writeValue(value: any): void;
    handleDateChange(args: any): void;
    handlePickerOpened(args: any): void;
    handlePickerClosed(args: any): void;
}
