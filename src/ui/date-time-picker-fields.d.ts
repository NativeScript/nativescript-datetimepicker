/**
 * Contains the DatePickerField class.
 */
import { Property, View } from "tns-core-modules/ui/core/view";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Orientation } from "tns-core-modules/ui/layouts/stack-layout";

/**
 * Represents a TextField that can be tapped to open a picker. The picker is a dialog with
 * date picking spinners along with OK/Cancel buttons.
 */
export class DateTimePickerFields extends GridLayout {
    /**
     * Gets or sets the selected date.
     */
    date: Date;

    /**
     * Gets or sets the max date. Note that this property only affects the date component.
     */
    maxDate: Date;

    /**
     * Gets or sets the min date. Note that this property only affects the date component.
     */
    minDate: Date;

    /**
     * Gets or sets a format for displaying the date in the field.
     * Default value is undefined, meaning that the format will be based on the current locale.
     * Here are some examples with the way 1st of April, 2019 is displayed for each of the formats:
     * MMM dd, yyyy - Apr 01, 2019
     * d.M.yy - 1.4.19
     * EEE, d MMMM yyyy - Mon, 1 April 2019
     */
    dateFormat: string;

    /**
     * Gets or sets a format for displaying the date in the field.
     * Default value is undefined, meaning that the format will be based on the current locale.
     * Here are some examples with the way 1st of April, 2019 is displayed for each of the formats:
     * MMM dd, yyyy - Apr 01, 2019
     * d.M.yy - 1.4.19
     * EEE, d MMMM yyyy - Mon, 1 April 2019
     */
    timeFormat: string;

    /**
     * Gets or sets a locale for displaying the date in the field, and also for the picker.
     * Default value is undefined, meaning that the format will be based on the device's settings.
     * In order to fixate the date to English, you can use English-based locales like: en_US, en_UK, etc.
     * If you want to provide localization for your app, you can supply different locales, depending
     * on the selected setting.
     * Note that changing the locale will not affect the {@link pickerOkText}, {@link pickerCancelText}
     * and {@link pickerTitle} or {@link hint} properties.
     */
    locale: string;

    /**
     * Gets or sets the hint text for the date component. Hint is the text that is displayed in a field when {@link date} is null.
     */
    hintDate: string;

    /**
     * Gets or sets the hint text for the time component. Hint is the text that is displayed in a field when {@link date} is null.
     */
    hintTime: string;

    /**
     * Gets or sets the date that will be initially selected in the picker when {@link date} is null.
     *
     * @default now
     */
    pickerDefaultDate: Date;

    /**
     * Gets or sets the title for picker selecting date. The title is the text that is displayed in the picker
     * above the date selecting spinners.
     */
    pickerTitleDate: string;

    /**
     * Gets or sets the title for picker selecting time. The title is the text that is displayed in the picker
     * above the time selecting spinners.
     */
    pickerTitleTime: string;

    /**
     * Gets or sets the text of the button in the picker that is used to confirm the selection.
     * By default, on iOS the text will be OK, while on android the text will be
     * determined by the current device's localization settings. Please note, that the value
     * is not related with the value {@link locale} property.
     */
    pickerOkText: string;

    /**
     * Gets or sets the text of the button in the picker that is used to dismiss the picker,
     * and cancel the current date selection.
     * By default, on iOS the text will be Cancel, while on android the text will be
     * determined by the current device's localization settings. Please note, that the value
     * is not related with the value {@link locale} property.
     */
    pickerCancelText: string;

    /**
     * Gets or sets a value that indicates whether the time should be assigned a value as soon as date is picked.
     *
     * @default false
     */
    autoPickTime: boolean;

    /**
     * Gets or sets a value that indicates whether the date and time components should be on the same row or not.
     * Default value is horizontal, meaning that the two fields will be on the same row.
     *
     * @default horizontal
     */
    orientation: Orientation;

    /**
     * Identifies the {@link date} dependency property.
     */
    static dateProperty: Property<DateTimePickerFields, Date>;

    /**
     * Identifies the {@link maxDate} dependency property.
     */
    static maxDateProperty: Property<DateTimePickerFields, Date>;

    /**
     * Identifies the {@link minDate} dependency property.
     */
    static minDateProperty: Property<DateTimePickerFields, Date>;

    /**
     * Identifies the {@link dateFormat} dependency property.
     */
    static dateFormatProperty: Property<DateTimePickerFields, string>;

    /**
     * Identifies the {@link timeFormat} dependency property.
     */
    static timeFormatProperty: Property<DateTimePickerFields, string>;

    /**
     * Identifies the {@link locale} dependency property.
     */
    static localeProperty: Property<DateTimePickerFields, string>;

    /**
     * Identifies the {@link hintDate} dependency property.
     */
    static hintDateProperty: Property<DateTimePickerFields, string>;

    /**
     * Identifies the {@link hintTime} dependency property.
     */
    static hintTimeProperty: Property<DateTimePickerFields, string>;

    /**
     * Identifies the {@link pickerDefaultDate} dependency property.
     */
    static pickerDefaultDateProperty: Property<DateTimePickerFields, string>;

    /**
     * Identifies the {@link pickerTitleDate} dependency property.
     */
    static pickerTitleDateProperty: Property<DateTimePickerFields, string>;

    /**
     * Identifies the {@link pickerTitleTime} dependency property.
     */
    static pickerTitleTimeProperty: Property<DateTimePickerFields, string>;

    /**
     * Identifies the {@link pickerOkText} dependency property.
     */
    static pickerOkTextProperty: Property<DateTimePickerFields, string>;

    /**
     * Identifies the {@link pickerCancelText} dependency property.
     */
    static pickerCancelTextProperty: Property<DateTimePickerFields, string>;

    /**
     * Identifies the {@link autoPickTime} dependency property.
     */
    static autoPickTimeProperty: Property<DateTimePickerFields, boolean>;

    /**
     * Identifies the {@link orientation} dependency property.
     */
    static orientationProperty: Property<DateTimePickerFields, Orientation>;
}