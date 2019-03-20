import Vue from 'vue'
import Router from 'vue-router'
import Series from './components/Series.vue'
import Login from './views/Login.vue'
import Serie from './views/Serie.vue'
import NewSerie from './views/NewSerie.vue'
import Logout from './views/Logout.vue'
import AddPhotoEx from './views/AddPhotoEx.vue'
import Register from './views/Register.vue'
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
    },
    {
      path: '/serie/:id/photos',
      name: 'serie',
      component : Serie
    },
    {
      path: '/newSerie',
      name : 'newSerie',
      component : NewSerie
    },
    {
      path: '/logout',
      name : 'logout',
      component : Logout
    },
    {

      path : '/addPhotoEx/:id',
      name : 'addPhotoEx',
      component : AddPhotoEx
    },
    {
      path: '/register',
      name: 'register',
      component : Register
    }
  ]
})