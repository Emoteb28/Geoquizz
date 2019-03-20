import Vue from "nativescript-vue";
import LoginPage from "./components/LoginPage";
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

new Vue({
    template: `
        <Frame>
            <LoginPage />
        </Frame>`,

    components: {
        LoginPage
    }
}).$start();
