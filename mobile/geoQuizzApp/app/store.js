import Vue from 'nativescript-vue';
import * as Vuex from "vuex";

let localStorage = require( "nativescript-localstorage" );
const axios = require('axios');
axios.defaults.baseURL = 'http://api.backoffice.local:10080/'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        rtoken: localStorage.getItem('token') || null,
        listSeries: localStorage.getItem('listSeries') || null,
        user: localStorage.getItem('user') || null,
        photo: localStorage.getItem('photo') || null,
    },
    mutations: {
        retrieveToken(state, rtoken) {
            state.token = rtoken
        }
    }
})
