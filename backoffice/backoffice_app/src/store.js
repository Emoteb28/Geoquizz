import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// const axios = require('axios');
axios.defaults.baseURL = 'http://api.backoffice.local:10080/'
Vue.use(Vuex)

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
  },
  actions: {
    retrieveToken(context, credentials) {

      return new Promise((resolve, reject) => {
        axios.post('login',{}, {
          auth:
          {
            username: credentials.email,
            password: credentials.password  
          }
        })
          .then(response => {
            const rtoken = response.data.token
            localStorage.setItem('token', rtoken)
            context.commit('retrieveToken', rtoken)
            resolve(response)
            
            console.log(response)
            // context.commit('addTodo', response.data)
          })
          .catch(error => {
            // console.log(error)
            alert(error)        
            reject(error)
          })
      })
    }
  }
})
