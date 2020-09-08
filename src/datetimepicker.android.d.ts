import { DateTimePickerBase, DateTimePickerStyleBase, DatePickerOptions, TimePickerOptions, PickerOptions } from "./datetimepicker.common";
export declare class DateTimePickerStyle extends DateTimePickerStyleBase {
}
export declare class DateTimePicker extends DateTimePickerBase {
    private static _defaultOkText;
    private static _defaultCancelText;
    private static _defaultsInitialized;
    static pickDate(options: DatePickerOptions, style?: DateTimePickerStyle): Promise<Date>;
    static pickTime(options: TimePickerOptions, style?: DateTimePickerStyle): Promise<Date>;
    static _createNativeDatePicker(options: DatePickerOptions): android.widget.DatePicker;
    static _createNativeTimePicker(options: TimePickerOptions): android.widget.TimePicker;
    static _createNativeDialog(nativePicker: android.view.View, options: PickerOptions, value: Date, callback: Function): android.app.AlertDialog.Builder;
    static _showNativeDialog(nativePickerBuilder: android.app.AlertDialog.Builder, nativePicker: any, style: DateTimePickerStyle): void;
    private static _trimDate;
    private static _applyDialogColors;
    private static _applyDialogSpinnersColors;
    private static _applyDialogOkButtonColors;
    private static _applyDialogCancelButtonColors;
    private static _applyTextViewColor;
    private static _applyNumberPickerColor;
    private static _findViewById;
    private static _findFieldByName;
    private static _initializeTextResources;
}
