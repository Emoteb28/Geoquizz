import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// const axios = require('axios');
axios.defaults.baseURL = 'http://api.backoffice.local:10080/'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: false,
    listSeries: false,
    user: false,
    photo: false,
    listPhotoSerie: false,
    serieC: false,
    serie: false,
    photosNull: false 
  },
  getters: {
    getSeries(state) {
      return state.listSeries || false
    },
    getSerie(state) {
      return state.serie || false
    },
    getPhotoSerie(state) {
      return state.listPhotoSerie || false
    },
    getPhotosNull(state) {
      return state.photosNull || false
    },
    createdSerie(state) {
      return state.serieC || false
    },
    createdPhoto(state) {
      return state.photo || false
    },
    getUser(state) {
      return state.user || false
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    retrieveSeries(state, listSeries) {
      state.listSeries = listSeries
    },
    retrievePhotosNull(state, photosNull) {
      state.photosNull = photosNull
    },
    retrieveSerie(state, serie) {
      state.serie = serie
    },
    retrievePhotoSerie(state, listPhotoSerie) {
      state.listPhotoSerie = listPhotoSerie
    },
    createSerie(state, createdSerie) {
      state.serieC = createdSerie
    },
    destroyToken(state) {
      state.token = false
    },
    createPhoto(state, photo) {
      state.photo = photo
    },
  	initialiseStore(state){
  		if(localStorage.getItem('store')) {
  			this.replaceState(
  				Object.assign(state,JSON.parse(localStorage.getItem('store')))
  				);
  		}
    }
  },
  actions: {
     createPhotoS(context, data) {
       return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.token
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
            const token = response.data.token
            const user = response.data.user
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
            context.commit('retrieveToken', token)
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
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.token
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
    retrievePhotosNull(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.token
        axios.get('photos').then(response => {
          const photos = response.data.photos
          context.commit('retrievePhotosNull', photos)
          resolve(response)

        })
          .catch(error => {
            alert(error)
            reject(error)
          })
      })
    },
    retrieveSerie(context, data) {
      return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.token
        axios.get('series/'+data.id).then(response => {
          const serie = response.data.serie
          context.commit('retrieveSerie', serie)
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
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.token
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
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.token
        axios.post('/series', {
          ville: data.city,
          lat: data.lat,
          lng: data.lng,
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
    updateSerie(context, data) {
      return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.token
        axios.patch('/series/'+data.id, {
          ville: data.city,
          lat: data.lat,
          lng: data.lng,
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
    addPhotoToSerie(context, data) {
      return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = 'Bearer ' + this.state.token
        axios.patch('/series/'+data.id+'/photos', {
          photo: data.photo
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
        context.commit('destroyToken')
    },
  }
})
