import Vue from 'vue'
import Router from 'vue-router'
import Series from './components/Series.vue'
import Login from './views/Login.vue'

Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/series',
      name: 'series',
      component: Series
    },
    {
      path : '/login',
      name: 'login',
      component : Login
    }
  ]
})