import Vue from "nativescript-vue";
import LoginPage from "./components/LoginPage";
import {store} from "./store";
import {utils} from "./mixins/utils";

new Vue({

    template: `
        <Frame>
            <LoginPage />
        </Frame>`,

    components: {
        utils,
        store,
        LoginPage,
    }
}).$start();
