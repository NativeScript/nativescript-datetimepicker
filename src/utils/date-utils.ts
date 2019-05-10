export function getDateNow(): Date {
    const date = new Date();
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

export function getDateToday(): Date {
    const date = getDateNow();
    date.setMinutes(0);
    date.setHours(0);
    return date;
}

export function clearTime(date: Date): Date {
    if (!date) {
        return date;
    }
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}