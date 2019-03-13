import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// const axios = require('axios');
axios.defaults.baseURL = 'http://api.backoffice.local:10080/'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : localStorage.getItem('access_token') || null,
    listSeries : localStorage.getItem('listSeries') || null,
    user : localStorage.getItem('user') || null,
    photo : localStorage.getItem('photo') || null,   
  },
  mutations: {

  },
  actions: {
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/register', {
          fullname: data.name,
          email: data.email,
          password: data.password,
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    retrieveToken(context, credentials) {

      return new Promise((resolve, reject) => {
        axios.post('/users/login', {
          email: credentials.email,
          password: credentials.password,
        })
          .then(response => {
            const token = response.data.access_token

            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response)
            console.log(response);
            // context.commit('addTodo', response.data)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
        })
    },
    login(context, credentials) {
      return new Promise((resolve, reject) =>
      {
        axios.post
      })
    }
}})
