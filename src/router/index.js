import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import("@/views/login")
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import("@/views/signup")
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import("@/views/forgot-password")
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import("@/views/reset-password")
    },
    {
      path: '/email-confirmation',
      name: 'email-confirmation',
      component: () => import("@/views/email-confirmation")
    }
  ]
})
