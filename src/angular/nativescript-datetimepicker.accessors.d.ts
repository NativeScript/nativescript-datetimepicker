import { ElementRef } from "@angular/core";
import { BaseValueAccessor } from "nativescript-angular/forms/value-accessors";
import { DatePickerField } from "../ui/date-picker-field";
import { TimePickerField } from "../ui/time-picker-field";
export declare class DatePickerValueAccessor extends BaseValueAccessor<DatePickerField> {
    constructor(elementRef: ElementRef);
    writeValue(value: any): void;
}
export declare class TimePickerValueAccessor extends BaseValueAccessor<TimePickerField> {
    constructor(elementRef: ElementRef);
    writeValue(value: any): void;
}
