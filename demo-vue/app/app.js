import Vue from "nativescript-vue";

import Home from "./components/Home";

import DateTimePicker from "nativescript-datetimepicker/vue";
Vue.use(DateTimePicker);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
