import { DatePickerField } from "../ui/date-picker-field";
import { TimePickerField } from "../ui/time-picker-field";

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
    }
};
export default DateTimePicker;