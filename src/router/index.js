import Vue from 'vue'
import Router from 'vue-router'
import Login from '../login'
import RegisterPage from '@/components/register'
import ForgetPassPage from '@/components/forgetPass'
import Email from '@/components/email'
import PhoneNum from '@/components/phoneNum'
import ResetPassword from '@/components/resetPassword'

Vue.use(Router)

export default new Router({
//	 mode: 'history',
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
      component: ForgetPassPage,
      children: [
      	{
      		path: 'phoneNum',
      		component: PhoneNum
      	},
      	{
      		path: 'email',
      		component: Email
      	}
      ]
      
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: ResetPassword
    }
  ]
})
