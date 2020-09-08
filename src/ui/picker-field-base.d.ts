import { TextField, Property } from "@nativescript/core";
export declare abstract class PickerFieldBase extends TextField {
    locale: string;
    pickerTitle: string;
    pickerOkText: string;
    pickerCancelText: string;
    private _pickerFieldBaseTapHandler;
    constructor();
    static localeProperty: Property<PickerFieldBase, string>;
    static pickerTitleProperty: Property<PickerFieldBase, string>;
    static pickerOkTextProperty: Property<PickerFieldBase, string>;
    static pickerCancelTextProperty: Property<PickerFieldBase, string>;
    abstract open(): void;
    initNativeView(): void;
    disposeNativeView(): void;
    private static localePropertyChanged;
    protected onLocaleChanged(oldValue: string, newValue: string): void;
    private _updatePickerFieldBaseTapHandler;
    private _onPickerFieldBaseTap;
}
