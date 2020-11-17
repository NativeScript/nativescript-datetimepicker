import { Directive } from '@angular/core';
import {
  DatePickerValueAccessor,
  TimePickerValueAccessor,
  DateTimePickersValueAccessor
} from './nativescript-datetimepicker.accessors';

@Directive({
  selector: 'DatePickerField'
})
export class DatePickerFieldDirective {}

@Directive({
  selector: 'TimePickerField'
})
export class TimePickerFieldDirective {}

@Directive({
  selector: 'DateTimePickerFields'
})
export class DateTimePickerFieldsDirective {}

export const DIRECTIVES = [
  DatePickerFieldDirective,
  TimePickerFieldDirective,
  DateTimePickerFieldsDirective,
  DatePickerValueAccessor,
  TimePickerValueAccessor,
  DateTimePickersValueAccessor
];
