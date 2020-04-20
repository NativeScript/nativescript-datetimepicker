import { DatePickerField, TimePickerField, DateTimePickerFields } from "../ui";

const DateTimePicker = {
    install(Vue) {
        Vue.registerElement(
            'DatePickerField',
            () => DatePickerField,
            {
                model: {
                    prop: 'date',
                    event: 'dateChange'
                }
            }
        );

        Vue.registerElement(
            'TimePickerField',
            () => TimePickerField,
            {
                model: {
                    prop: 'time',
                    event: 'timeChange'
                }
            }
        );

        Vue.registerElement(
            'DateTimePickerFields',
            () => DateTimePickerFields,
            {
                model: {
                    prop: 'date',
                    event: 'dateChange'
                }
            }
        );
    }
};
export default DateTimePicker;