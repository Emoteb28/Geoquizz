import Vue from "nativescript-vue";
import TakePhoto from "./components/TakePhoto";
import {utils} from "./mixins/utils";;

Vue.mixin(utils);

new Vue({
    template: `
        <Frame>
            <TakePhoto />
        </Frame>`,

    components: {
        utils,
        TakePhoto,
    }
}).$start();
