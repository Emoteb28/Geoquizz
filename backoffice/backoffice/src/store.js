import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// axios.defaults.baseURL = 'http://api.backoffice.local:10080/'
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
    }
}})
