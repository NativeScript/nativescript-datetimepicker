import { Observable } from "tns-core-modules/data/observable";
import { DateTimePicker } from "nativescript-datetimepicker";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";

export class HomeViewModel extends Observable {

    constructor() {
        super();
        this.set('dateText', "tap to select date");
        this.set('timeText', "tap to select time");
        this.set('dateTime', new Date());
    }

    onPickDateTap(args: EventData): void {
        const dateToday = new Date();
        const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
        const dateNextWeek = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 7);
        DateTimePicker.pickDate({
            context: (<Button>args.object)._context,
            date: dateTomorrow,
            minDate: dateTomorrow,
            maxDate: dateNextWeek,
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            title: "choose date",
            locale: "en_UK"
        }).then((selected: Date) => {
            if (selected) {
                const d = selected.getDate();
                const m = selected.getMonth() + 1;
                const y = selected.getFullYear();
                const dateText = (d < 10 ? '0' : '') + d + '.' + (m < 10 ? '0' : '') + m + '.' + y;
                this.set('dateText', dateText);
            }
        });
    }

    onPickTimeTap(args: EventData): void {
        const dateToday = new Date();
        const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
        dateTomorrow.setHours(8);
        dateTomorrow.setMinutes(0);
        DateTimePicker.pickTime({
            context: (<Button>args.object)._context,
            time: dateTomorrow,
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            title: "choose time",
            locale: "en_UK",
            is24Hours: true
        }).then((selected: Date) => {
            if (selected) {
                const h = selected.getHours();
                const m = selected.getMinutes();
                const timeText = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
                this.set('timeText', timeText);
            }
        });
    }
}
