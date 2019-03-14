import Vue from "nativescript-vue";
import LoginPage from "./LoginPage.vue";
/*import axios from 'axios';

window.axios = axios.create({
    baseURL: 'http://api.mobile.local:10082',
    params : { token : false },
    headers: { Authorization : 'Token token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkubW9iaWxlLmxvY2FsIiwiYXVkIjoiaHR0cDpcL1wvYXBpLm1vYmlsZS5sb2NhbCIsImlhdCI6MTU1MjQ5OTM5OSwiZXhwIjoxNTUyNTAyOTk5LCJ1aWQiOjIsInVtYWlsIjoiY3Jpc3RpYW5pQHRlc3QuZnIiLCJsdmwiOjF9.YUMNEjfe2bGmVgJCwFARkdGIHV5UOwIjxDCu4U9SW7eDqcaHtl-sJqQByaPSDQHZjQbYEAsNrPYH8yaGXP1EtA'}
});
*/

import Home from "./Home.vue";

new Vue({

    template: `
        <Frame>

            <LoginPage />
        </Frame>`,

    components: {
        LoginPage
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
