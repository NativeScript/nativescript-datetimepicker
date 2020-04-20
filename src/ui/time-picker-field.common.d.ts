import { Property } from "@nativescript/core/ui/core/view";
import { TimePickerField as TimePickerFieldDefinition } from "./time-picker-field";
import { PickerFieldBase } from "./picker-field-base";
export declare class TimePickerFieldBase extends PickerFieldBase implements TimePickerFieldDefinition {
    time: Date;
    timeFormat: string;
    pickerDefaultTime: Date;
    static timePickerOpenedEvent: string;
    static timePickerClosedEvent: string;
    private _nativeLocale;
    private _nativeTimeFormatter;
    static timeProperty: Property<TimePickerFieldBase, Date>;
    static timeFormatProperty: Property<TimePickerFieldBase, string>;
    static pickerDefaultTimeProperty: Property<TimePickerFieldBase, Date>;
    open(): void;
    updateText(): void;
    initNativeView(): void;
    private static timePropertyChanged;
    private static timeFormatPropertyChanged;
    protected onTimeFormatChanged(oldValue: string, newValue: string): void;
    protected onLocaleChanged(oldValue: string, newValue: string): void;
    protected _updateRegionalSettings(): void;
    protected getFormattedTime(time: Date): string;
    private _initRegionalSettings;
    private is24Hours;
}
export declare function timeValueConverter(timeString: string): Date;
