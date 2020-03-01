import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
