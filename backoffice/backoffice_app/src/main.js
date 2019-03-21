import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'vuetify/dist/vuetify.min.css'


delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('initialiseStore');
  }
}).$mount('#app')
