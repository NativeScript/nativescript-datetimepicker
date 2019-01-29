import { Directive } from "@angular/core";
import { DatePickerValueAccessor, TimePickerValueAccessor } from "./nativescript-datetimepicker.accessors";

@Directive({
    selector: "DatePickerField"
})
export class DatePickerFieldDirective { }

@Directive({
    selector: "TimePickerField"
})
export class TimePickerFieldDirective { }

export const DIRECTIVES = [DatePickerFieldDirective, TimePickerFieldDirective,
    DatePickerValueAccessor, TimePickerValueAccessor];