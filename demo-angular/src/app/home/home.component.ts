import { Component, OnInit } from "@angular/core";
import { DateTimePicker } from "nativescript-datetimepicker";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    private _dateText: string;
    private _timeText: string;
    private _dateTime: Date;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this._dateText = "tap to select date";
        this._timeText = "tap to select time";
        this._dateTime = new Date();
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
                this._dateText = dateText;
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
                this._timeText = timeText;
            }
        });
    }

    get dateText() {
        return this._dateText;
    }

    get timeText() {
        return this._timeText;
    }

    get dateTime() {
        return this._dateTime;
    }

    set dateTime(value: Date) {
        this._dateTime = value;
    }
}
