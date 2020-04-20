import { LocalizationUtilsBase } from "./localization-utils.common";
export declare class LocalizationUtils extends LocalizationUtilsBase {
    private static _localesCache;
    static createNativeLocale(localeIdentifier: string): any;
    static createNativeDateFormatter(formatPattern: string, nativeLocale: any): any;
    static createNativeTimeFormatter(formatPattern: string, nativeLocale: any): any;
    static formatDateTime(formatter: any, dateTime: Date): string;
    static is24Hours(formatter: any): boolean;
}
