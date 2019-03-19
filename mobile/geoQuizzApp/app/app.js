import Vue from "nativescript-vue";
import LoginPage from "./components/LoginPage";
import {utils} from "./mixins/utils";;

Vue.mixin(utils);

new Vue({
    template: `
        <Frame>
            <LoginPage />
        </Frame>`,

    components: {
        utils,
        LoginPage,
    }
}).$start();
