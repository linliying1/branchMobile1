import Vue from 'vue'
import Router from 'vue-router'
import Login from '../login'
import RegisterPage from '@/components/register'
import ForgetPassPage from '@/components/forgetPass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: ForgetPassPage
    }
  ]
})
