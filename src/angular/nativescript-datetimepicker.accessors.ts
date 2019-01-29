import { Directive, ElementRef, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseValueAccessor } from "nativescript-angular/forms/value-accessors";
import { DatePickerField } from "../ui/date-picker-field";
import { TimePickerField } from "../ui/time-picker-field";

const DATE_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerValueAccessor),
    multi: true,
};

const TIME_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimePickerValueAccessor),
    multi: true,
};

/**
 * The accessor for setting a date and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <DatePickerField [(ngModel)]="model.test">
 *  ```
 */
@Directive({
    selector: "DatePickerField[ngModel],DatePickerField[formControlName],DatePickerField[formControl]," +
        "datepickerfield[ngModel],datepickerfield[formControlName],datepickerfield[formControl]," +
        "datePickerField[ngModel],datePickerField[formControlName],datePickerField[formControl]," +
        "date-picker-field[ngModel],date-picker-field[formControlName],date-picker-field[formControl]",
    providers: [DATE_PICKER_VALUE_ACCESSOR],
    host: {
        "(dateChange)": "onChange($event.value)",
    },
})
export class DatePickerValueAccessor extends BaseValueAccessor<DatePickerField> {
    constructor(elementRef: ElementRef) {
        super(elementRef.nativeElement);
    }

    writeValue(value: any): void {
        const normalized = super.normalizeValue(value);
        this.view.date = normalized;
    }
}

/**
 * The accessor for setting a time and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <TimePickerField [(ngModel)]="model.test">
 *  ```
 */
@Directive({
    selector: "TimePickerField[ngModel],TimePickerField[formControlName],TimePickerField[formControl]," +
        "timepickerfield[ngModel],timepickerfield[formControlName],timepickerfield[formControl]," +
        "timePickerField[ngModel],timePickerField[formControlName],timePickerField[formControl]," +
        "time-picker-field[ngModel],time-picker-field[formControlName],time-picker-field[formControl]",
    providers: [TIME_PICKER_VALUE_ACCESSOR],
    host: {
        "(timeChange)": "onChange($event.value)",
    },
})
export class TimePickerValueAccessor extends BaseValueAccessor<TimePickerField> {
    constructor(elementRef: ElementRef) {
        super(elementRef.nativeElement);
    }

    writeValue(value: any): void {
        const normalized = super.normalizeValue(value);
        this.view.time = normalized;
    }
}