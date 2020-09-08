import { LocalizationUtils } from "./localization-utils";
export declare class LocalizationUtilsBase implements LocalizationUtils {
    protected static TIME_24H_FORMAT: string;
    protected static TIME_12H_FORMAT: string;
    static createNativeLocale(localeIdentifier: string): any;
    static createDefaultTimeFormat(context: any): string;
    static createNativeDateFormatter(formatPattern: string, nativeLocale: any): any;
    static createNativeTimeFormatter(formatPattern: string, nativeLocale: any): any;
    static formatDateTime(formatter: any, dateTime: Date): string;
    static is24Hours(formatter: any, context: any): boolean;
}
