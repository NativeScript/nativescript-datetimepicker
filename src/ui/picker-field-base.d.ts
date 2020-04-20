import { TextField } from "@nativescript/core";
import { Property } from "@nativescript/core/ui/core/view";
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
