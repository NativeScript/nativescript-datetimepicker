import { ElementRef } from "@angular/core";
import { BaseValueAccessor } from "@nativescript/angular";
import { DatePickerField } from "../ui/date-picker-field";
import { TimePickerField } from "../ui/time-picker-field";
import { DateTimePickerFields } from "../ui/date-time-picker-fields";
import * as i0 from "@angular/core";
export declare class DatePickerValueAccessor extends BaseValueAccessor<DatePickerField> {
    private _hasBeenOpened;
    constructor(elementRef: ElementRef);
    writeValue(value: any): void;
    handleDateChange(args: any): void;
    handleDatePickerOpened(args: any): void;
    handleDatePickerClosed(args: any): void;
    static ɵfac: i0.ɵɵFactoryDef<DatePickerValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<DatePickerValueAccessor, "DatePickerField[ngModel],DatePickerField[formControlName],DatePickerField[formControl],datepickerfield[ngModel],datepickerfield[formControlName],datepickerfield[formControl],datePickerField[ngModel],datePickerField[formControlName],datePickerField[formControl],date-picker-field[ngModel],date-picker-field[formControlName],date-picker-field[formControl]", never, {}, {}, never>;
}
export declare class TimePickerValueAccessor extends BaseValueAccessor<TimePickerField> {
    private _hasBeenOpened;
    constructor(elementRef: ElementRef);
    writeValue(value: any): void;
    handleTimeChange(args: any): void;
    handleTimePickerOpened(args: any): void;
    handleTimePickerClosed(args: any): void;
    static ɵfac: i0.ɵɵFactoryDef<TimePickerValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<TimePickerValueAccessor, "TimePickerField[ngModel],TimePickerField[formControlName],TimePickerField[formControl],timepickerfield[ngModel],timepickerfield[formControlName],timepickerfield[formControl],timePickerField[ngModel],timePickerField[formControlName],timePickerField[formControl],time-picker-field[ngModel],time-picker-field[formControlName],time-picker-field[formControl]", never, {}, {}, never>;
}
export declare class DateTimePickersValueAccessor extends BaseValueAccessor<DateTimePickerFields> {
    private _hasBeenOpened;
    constructor(elementRef: ElementRef);
    writeValue(value: any): void;
    handleDateChange(args: any): void;
    handlePickerOpened(args: any): void;
    handlePickerClosed(args: any): void;
    static ɵfac: i0.ɵɵFactoryDef<DateTimePickersValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<DateTimePickersValueAccessor, "DateTimePickerFields[ngModel],DateTimePickerFields[formControlName],DateTimePickerFields[formControl],datetimepickerfields[ngModel],datetimepickerfields[formControlName],datetimepickerfields[formControl],dateTimePickerFields[ngModel],dateTimePickerFields[formControlName],dateTimePickerFields[formControl],date-time-picker-fields[ngModel],date-time-picker-fields[formControlName],date-time-picker-fields[formControl]", never, {}, {}, never>;
}
