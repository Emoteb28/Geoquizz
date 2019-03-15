import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {Utils} from './mixins/utils.js'
import axios from 'axios'

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.mixin(Utils)

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

window.axios = axios.create({
  baseURL: 'http://api.player.local:10081',
  params : { token : false }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('initialiseStore');
  }
}).$mount('#app')
