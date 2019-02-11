<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="DateTimePicker Demo Vue"></Label>
        </ActionBar>

        <ScrollView>
            <StackLayout class="p-20">
                <Label text="basic usage" class="content"></Label>
                <DatePickerField hint="select date"></DatePickerField>
                <TimePickerField hint="select time"></TimePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                <Label text="initial values" class="content"></Label>
                <DatePickerField date="2019/02/24"></DatePickerField>
                <TimePickerField time="01:00"></TimePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                <Label text="min and max date" class="content"></Label>
                <DatePickerField minDate="2020/02/02" maxDate="2021/02/02" hint="tap to select"></DatePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                <Label text="time format 12h" class="content"></Label>
                <TimePickerField time="16:00" timeFormat="h:mm a" locale="en_US"></TimePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                <Label text="time format 24h" class="content"></Label>
                <TimePickerField time="16:00" timeFormat="HH:mm" locale="en_UK"></TimePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>

                <Label text="modified picker texts" class="content"></Label>
                <DatePickerField hint="tap to choose" pickerOkText="Approve" pickerCancelText="Reject" 
                    pickerTitle="Confirm predefined date selection" pickerDefaultDate="2019/05/15"></DatePickerField>
                <TimePickerField hint="tap to choose" pickerOkText="Approve" pickerCancelText="Reject" 
                    pickerTitle="Confirm predefined time selection" pickerDefaultTime="22:00"></TimePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>
                
                <Label text="preferred locale: en_US" class="content"></Label>
                <DatePickerField locale="en_US" hint="select date" pickerOkText="OK"
                    pickerCancelText="Cancel" pickerTitle="Select date"></DatePickerField>
                <TimePickerField locale="en_US" hint="select time" pickerOkText="OK"
                    pickerCancelText="Cancel" pickerTitle="Select time"></TimePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>
                
                <Label text="preferred locale: de_DE" class="content"></Label>
                <DatePickerField locale="de_DE" hint="datum auswählen" pickerOkText="Bestätigen"
                    pickerCancelText="Stornieren" pickerTitle="Datum auswählen"></DatePickerField>
                <TimePickerField locale="de_DE" hint="zeit wählen" pickerOkText="Bestätigen"
                    pickerCancelText="Stornieren" pickerTitle="Zeit wählen"></TimePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>
                
                <Label text="custom format" class="content"></Label>
                <DatePickerField date="2019/02/24" dateFormat="'date': dd MMMM yyyy"></DatePickerField>
                <TimePickerField time="01:00" timeFormat="'time': HH:mm"></TimePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>
                
                <Label text="binding" class="content"></Label>
                <Label :text="dateTime" color="#CBCBCB"></Label>
                <DatePickerField @dateChange="onDateTimeChange" :date="dateTime"></DatePickerField>
                <TimePickerField @timeChange="onDateTimeChange" :time="dateTime"></TimePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>
                
                <Label text="css applied" class="content"></Label>
                <DatePickerField date="2019/02/24" pickerTitle="select date" class="apply-css"></DatePickerField>
                <TimePickerField time="01:00" pickerTitle="select time" class="apply-css"></TimePickerField>
                <StackLayout class="hr-light m-10" android:visibility="collapse"></StackLayout>
                
                <Label text="custom button" class="content"></Label>
                <Button :text="dateText" @tap="onPickDateTap"></Button>
                <Button :text="timeText" @tap="onPickTimeTap"></Button>
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
                dateTime: new Date()
            }
        },
        methods: {
            onDateTimeChange: function(args) {
                this.dateTime = args.value;
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
                        locale: "en_UK"
                    })
                    .then(selected => {
                        if (selected) {
                            const d = selected.getDate();
                            const m = selected.getMonth() + 1;
                            const y = selected.getFullYear();
                            const dateText = (d < 10 ? '0' : '') + d + '.' + (m < 10 ? '0' : '') + m + '.' + y;
                            this.dateText = dateText;
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
                        locale: "en_UK",
                        is24Hours: true
                    })
                    .then(selected => {
                        if (selected) {
                            const h = selected.getHours();
                            const m = selected.getMinutes();
                            const timeText = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
                            this.timeText = timeText;
                        }
                    });
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
