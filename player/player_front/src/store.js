import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: false,
    series: false,
    serie: false,
    partie: false,
    photos: false,
    parties: false
  },
  mutations: {
    initialiseStore(state){
  		if(localStorage.getItem('store')) {
  			this.replaceState(
  				Object.assign(state,JSON.parse(localStorage.getItem('store')))
  				);
  		}
    },
    retrieveSeries(state, series) {
      state.series = series
    },
    retrieveSerie(state, serie) {
      state.serie = serie
    },
    retrievePartie(state, partie) {
      state.partie = partie
    },
    retrieveToken(state, token) {
      state.token = token
    },
    retrievePhotos(state, photos) {
      state.photos = photos
    },
    retrieveParties(state, parties) {
      state.parties = parties
    },
    setTokenAxios(state) {
      window.axios.defaults.params.token = state.token;
    }
  },
  actions: {

  }
})
