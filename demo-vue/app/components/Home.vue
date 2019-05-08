<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="DateTimePicker Demo Vue"></Label>
        </ActionBar>

        <ScrollView ref="scrollView">
            <StackLayout class="p-20">
                <Label text="DatePickerField" id="date" class="header" @tap="onHeaderTap" :opacity="dateOpacity"></Label>
                <StackLayout :visibility="dateVisibility">
                    <Label text="basic usage" class="content"></Label>
                    <DatePickerField hint="select date"></DatePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="initial values" class="content"></Label>
                    <DatePickerField date="2019/02/24"></DatePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="min and max date" class="content"></Label>
                    <DatePickerField minDate="2020/02/02" maxDate="2021/02/02" hint="tap to select"></DatePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="modified picker texts" class="content"></Label>
                    <DatePickerField hint="tap to choose" pickerOkText="Approve" pickerCancelText="Reject"
                        pickerTitle="Confirm predefined date selection" pickerDefaultDate="2019/05/15"></DatePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="preferred locale: en_US" class="content"></Label>
                    <DatePickerField locale="en_US" hint="select date" pickerOkText="OK"
                        pickerCancelText="Cancel" pickerTitle="Select date"></DatePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="preferred locale: de_DE" class="content"></Label>
                    <DatePickerField locale="de_DE" hint="datum auswählen" pickerOkText="Bestätigen"
                        pickerCancelText="Stornieren" pickerTitle="Datum auswählen"></DatePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="custom format" class="content"></Label>
                    <DatePickerField date="2019/02/24" dateFormat="'date': dd MMMM yyyy"></DatePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="css applied" class="content"></Label>
                    <DatePickerField date="2019/02/24" pickerTitle="select date" class="apply-css"></DatePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="binding" class="content"></Label>
                    <Label :text="dateTime1" color="#CBCBCB"></Label>
                    <DatePickerField @dateChange="onDateTimeChange1" :date="dateTime1"></DatePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>
                </StackLayout>

                <Label text="TimePickerField" id="time" class="header" @tap="onHeaderTap" :opacity="timeOpacity"></Label>
                <StackLayout :visibility="timeVisibility">
                    <Label text="basic usage" class="content"></Label>
                    <TimePickerField hint="select time"></TimePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="initial values" class="content"></Label>
                    <TimePickerField time="01:00"></TimePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="time format 12h" class="content"></Label>
                    <TimePickerField time="16:00" timeFormat="h:mm a" locale="en_US"></TimePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="time format 24h" class="content"></Label>
                    <TimePickerField time="16:00" timeFormat="HH:mm" locale="en_GB"></TimePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="modified picker texts" class="content"></Label>
                    <TimePickerField hint="tap to choose" pickerOkText="Approve" pickerCancelText="Reject"
                        pickerTitle="Confirm predefined time selection" pickerDefaultTime="22:00"></TimePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="preferred locale: en_US" class="content"></Label>
                    <TimePickerField locale="en_US" hint="select time" pickerOkText="OK"
                        pickerCancelText="Cancel" pickerTitle="Select time"></TimePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="preferred locale: de_DE" class="content"></Label>
                    <TimePickerField locale="de_DE" hint="zeit wählen" pickerOkText="Bestätigen"
                        pickerCancelText="Stornieren" pickerTitle="Zeit wählen"></TimePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="custom format" class="content"></Label>
                    <TimePickerField time="01:00" timeFormat="'time': HH:mm"></TimePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="css applied" class="content"></Label>
                    <TimePickerField time="01:00" pickerTitle="select time" class="apply-css"></TimePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="binding" class="content"></Label>
                    <Label :text="dateTime2" color="#CBCBCB"></Label>
                    <TimePickerField @timeChange="onDateTimeChange2" :time="dateTime2"></TimePickerField>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>
                </StackLayout>

                <Label text="DateTimePickerFields" id="dateTime" class="header" @tap="onHeaderTap" :opacity="dateTimeOpacity"></Label>
                <StackLayout :visibility="dateTimeVisibility">
                    <Label text="basic usage" class="content"></Label>
                    <DateTimePickerFields hintDate="select date" hintTime="select time"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="initial values" class="content"></Label>
                    <DateTimePickerFields date="2019/02/24 01:00"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="min and max date" class="content"></Label>
                    <DateTimePickerFields minDate="2020/02/02" maxDate="2021/02/02"
                        hintDate="tap to select date" hintTime="tap to select time"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="time format 12h" class="content"></Label>
                    <DateTimePickerFields date="2019/02/24 16:00" timeFormat="h:mm a" locale="en_US"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="time format 24h" class="content"></Label>
                    <DateTimePickerFields date="2019/02/24 16:00" timeFormat="HH:mm" locale="en_GB"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="modified picker texts" class="content"></Label>
                    <DateTimePickerFields hintDate="tap to choose date" hintTime="tap to choose time"
                        pickerOkText="Approve" pickerCancelText="Reject"
                        pickerTitleDate="Confirm predefined date selection"
                        pickerTitleTime="Confirm predefined time selection"
                        pickerDefaultDate="2019/05/15 22:00" autoPickTime="true"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="preferred locale: en_US" class="content"></Label>
                    <DateTimePickerFields locale="en_US" hintDate="select date" hintTime="select time"
                        pickerOkText="OK" pickerCancelText="Cancel" pickerTitleDate="Select date" pickerTitleTime="Select time"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="preferred locale: de_DE" class="content"></Label>
                    <DateTimePickerFields locale="de_DE" hintDate="datum auswählen" hintTime="zeit wählen"
                        pickerOkText="Bestätigen" pickerCancelText="Stornieren"
                        pickerTitleDate="Datum auswählen" pickerTitleTime="Zeit wählen"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="custom format" class="content"></Label>
                    <DateTimePickerFields date="2019/02/24 01:00"
                        dateFormat="'d': dd MMMM yyyy" timeFormat="'t': HH:mm"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="css applied" class="content"></Label>
                    <DateTimePickerFields date="2019/02/24 01:00" class="apply-css"
                        pickerTitleDate="select date" pickerTitleTime="select time"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="binding" class="content"></Label>
                    <Label :text="dateTime3" color="#CBCBCB"></Label>
                    <DateTimePickerFields @dateChange="onDateTimeChange3" :date="dateTime3"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                    <Label text="vertical orientation" class="content"></Label>
                    <DateTimePickerFields hintDate="select date" hintTime="select time"
                        orientation="vertical"></DateTimePickerFields>
                    <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>
                </StackLayout>

                <Label text="Custom Buttons" id="custom" class="header" @tap="onHeaderTap" :opacity="customOpacity"></Label>
                <StackLayout :visibility="customVisibility">
                    <Button :text="dateText" @tap="onPickDateTap"></Button>
                    <Button :text="timeText" @tap="onPickTimeTap"></Button>
                    <Button :text="dateTimeText" @tap="onPickDateTimeTap"></Button>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import { DateTimePicker } from "nativescript-datetimepicker";
    import { EventData } from "tns-core-modules/data/observable";
    import { Button } from "tns-core-modules/ui/button";
    export default {
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        },
        data() {
            return {
                dateText: "tap to select date",
                timeText: "tap to select time",
                dateTimeText: "tap to select date and time",
                dateTime1: new Date(),
                dateTime2: new Date(),
                dateTime3: new Date(),
                dateOpacity: 1,
                timeOpacity: 1,
                dateTimeOpacity: 1,
                customOpacity: 1,
                dateVisibility: 'collapse',
                timeVisibility: 'collapse',
                dateTimeVisibility: 'collapse',
                customVisibility: 'collapse',
                _expandedId: null
            }
        },
        methods: {
            onDateTimeChange1: function(args) {
                this.dateTime1 = args.value;
            },
            onDateTimeChange2: function(args) {
                this.dateTime2 = args.value;
            },
            onDateTimeChange3: function(args) {
                this.dateTime3 = args.value;
            },
            onPickDateTap: function(args) {
                const dateToday = new Date();
                const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
                const dateNextWeek = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 7);
                DateTimePicker
                    .pickDate({
                        context: args.object._context,
                        date: dateTomorrow,
                        minDate: dateTomorrow,
                        maxDate: dateNextWeek,
                        okButtonText: "OK",
                        cancelButtonText: "Cancel",
                        title: "choose date",
                        locale: "en_GB"
                    })
                    .then(selectedDate => {
                        if (selectedDate) {
                            this.dateText = this.getFormattedDate(selectedDate);
                        }
                    });
            },
            onPickTimeTap: function(args) {
                const dateToday = new Date();
                const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
                dateTomorrow.setHours(8);
                dateTomorrow.setMinutes(0);
                DateTimePicker
                    .pickTime({
                        context: args.object._context,
                        time: dateTomorrow,
                        okButtonText: "OK",
                        cancelButtonText: "Cancel",
                        title: "choose time",
                        locale: "en_GB",
                        is24Hours: true
                    })
                    .then(selectedTime => {
                        if (selectedTime) {
                            this.timeText = this.getFormattedTime(selectedTime);
                        }
                    });
            },
            onPickDateTimeTap: function(args) {
                const dateToday = new Date();
                DateTimePicker
                    .pickDate({
                        context: args.object._context,
                        date: dateToday,
                        title: "choose date",
                        locale: "en_GB"
                    })
                    .then(selectedDate => {
                        if (selectedDate) {
                            DateTimePicker
                                .pickTime({
                                    context: args.object._context,
                                    time: selectedDate,
                                    title: "choose time",
                                    locale: "en_GB"
                                })
                                .then(selectedDateTime => {
                                    if (selectedDateTime) {
                                        this.dateTimeText = this.getFormattedDate(selectedDateTime) + ' ' + this.getFormattedTime(selectedDateTime);
                                    }
                                });
                        }
                    });
            },
            onHeaderTap: function(args) {
                const buttonId = args.object.id;
                const isCurrentlyExpanded = buttonId === this._expandedId;
                if (isCurrentlyExpanded) {
                    this.expandCollapse(null);
                } else {
                    this.expandCollapse(buttonId);
                }
                this.$refs.scrollView.nativeView.scrollToVerticalOffset(0, false);
            },
            expandCollapse: function(expandId) {
                this.dateOpacity = expandId === 'date' ? 0.7 : 1;
                this.dateVisibility = expandId === 'date' ? 'visible' : 'collapse';

                this.timeOpacity = expandId === 'time' ? 0.7 : 1;
                this.timeVisibility = expandId === 'time' ? 'visible' : 'collapse';

                this.dateTimeOpacity = expandId === 'dateTime' ? 0.7 : 1;
                this.dateTimeVisibility = expandId === 'dateTime' ? 'visible' : 'collapse';

                this.customOpacity = expandId === 'custom' ? 0.7 : 1;
                this.customVisibility = expandId === 'custom' ? 'visible' : 'collapse';

                this._expandedId = expandId;
            },
            getFormattedDate: function(date) {
                const d = date.getDate();
                const m = date.getMonth() + 1;
                const y = date.getFullYear();
                return (d < 10 ? '0' : '') + d + '.' + (m < 10 ? '0' : '') + m + '.' + y;
            },
            getFormattedTime: function(date) {
                const h = date.getHours();
                const m = date.getMinutes();
                return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .content {
        font-size: 16;
        font-weight: bold;
        margin-top: 12;
        margin-bottom: 6;
        color: #303F9F;
    }

    .header {
        font-size: 16;
        margin-top: 12;
        margin-bottom: 6;
        color: white;
        background-color: #2196F3;
        text-align: center;
    }

    label {
        padding: 6 4;
    }

    timepickerfield,
    datepickerfield {
        padding: 12 4;
    }

    timepickerfield.apply-css,
    datepickerfield.apply-css {
        color: #CDDC39;
        background-color: #00796B;
        font-size: 20;
        font-weight: bold;
        padding: 20;
    }

    .date-time-picker.apply-css {
        color: #00796B;
        background-color: #CDDC39;
    }

    .date-time-picker-spinners.apply-css {
        color: #CDDC39;
        background-color: #00796B;
    }

    .date-time-picker-buttons.apply-css {
        color: #00796B;
    }
</style>
