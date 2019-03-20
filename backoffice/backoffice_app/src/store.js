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
    listPhotoSerie: localStorage.getItem('listPhotoSerie') || null,
    serieC: localStorage.getItem('serieC') || null
  },
  getters: {
    getSeries(state) {
      return state.listSeries || null
    },
    getPhotoSerie(state) {
      return state.listPhotoSerie || null
    },
    createdSerie(state) {
      return state.serieC || null
    },
    createdPhoto(state) {
      return state.photo || null
    },
    getUser(state) {
      return state.user || null
      console.log(state.user)
    }
  },
  mutations: {
    retrieveToken(state, rtoken) {
      state.token = rtoken
    },
    retrieveSeries(state, listSeries) {
      state.listSeries = listSeries
    },
    retrievePhotoSerie(state, listPhotoSerie) {
      state.listPhotoSerie = listPhotoSerie
    },
    createSerie(state, createdSerie) {
      state.serieC = serieC
    },
    destroyToken(state) {
      state.token = null
    },
    createPhoto(state, photo) {
      state.photo = photo
    }
  },
  actions: {
     createPhotoS(context, data) {
       return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.rtoken
         axios.post('series/'+data.id+'/photos/', data.fd ).then(response => {

          resolve(response)
          //console.log(response);
        })
          .catch(error => {
            reject(error)
          })
      })
    },
    retrieveToken(context, credentials) {

      return new Promise((resolve, reject) => {
        axios.post('login', {}, {
          auth:
          {
            username: credentials.email,
            password: credentials.password
          }
        })
          .then(response => {
            const rtoken = response.data.token
            const user = response.data.user
            localStorage.setItem('token', rtoken)
            localStorage.setItem('user', user)
            context.commit('retrieveToken', rtoken)
            resolve(response)

            // context.commit('addTodo', response.data)
          })
          .catch(error => {
            // console.log(error)
            alert(error)
            reject(error)
          })
      })
    },
    register(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('register', {
          email: credentials.email,
          password: credentials.password,
          fullname: credentials.fullname
        })
          .then(response => {
            resolve(response)

            // context.commit('addTodo', response.data)
          })
          .catch(error => {
            alert(error)
            reject(error)
          })
      })
    },
    retrieveSeries(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.rtoken
        axios.get('series').then(response => {
          const listSeries = response.data.series
          context.commit('retrieveSeries', listSeries)
          resolve(response)

        })
          .catch(error => {
            alert(error)
            reject(error)
          })
      })
    },
    retrievePhotoSerie(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.rtoken
        axios.get('/series/' + credentials.id + '/photos').then(response => {
          // console.log(response);
          const listPhotoSerie = response.data.photos
          context.commit('retrievePhotoSerie', listPhotoSerie)
          resolve(response)
        })
          .catch(error => {
            alert(error)
            reject(error)
          })
      })
    },
    createSerie(context, data) {
      return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.rtoken
        axios.post('/series', {
          ville: data.city,
          lat: data.lat,
          lng: data.lon,
          dist: data.dist,
        })
          .then(response => {
            const serieC = response.data.city
            resolve(response)
            //console.log(response);
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    logout(context) {
      if (this.state.rtoken != null) {
        context.commit('destroyToken')
      }
    },
  }
})
