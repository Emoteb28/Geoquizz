import Vue from 'vue'
import Router from 'vue-router'
import Game from './views/Game.vue'
import Series from './views/Series.vue'
import Start from './views/Start.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/series',
      name: 'series',
      component: Series
    },
    {
      path: '/start/:id',
      name: 'start',
      component: Start
    },
    {
      path: '/game/:id',
      name: 'game',
      component: Game
    }
  ]
})
