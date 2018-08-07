import Vue from 'vue'
import Router from 'vue-router'
import Login from '../login'
import RegisterPage from '@/components/register'
import ForgetPassPage from '@/components/forgetPass'
import Email from '@/components/email'
import PhoneNum from '@/components/phoneNum'
import ResetPassword from '@/components/resetPassword'
import Home from '@/pages/Home/home'
import OtherPages from '@/pages/otherPages/otherPages'
import vueResource from 'vue-resource'
import {setCookie, getCookie, delCookie} from '@/assets/cookie.js'
Vue.use(vueResource)
Vue.use(Router)

const router = new Router({
//	 mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
     {
      path: '/login',
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
    },
     {
      path: '/home',
      
      component: Home
    },
    {
      path: '/otherPages',
      
      component: OtherPages
    }
  ]
})

router.beforeEach((to, from, next) => {
const nextRoute = [ 'home', 'otherPages'];
		if(getCookie('username')){
			var isLogin = true;
			 console.log('isLogin:'+isLogin);
		}else{
			var isLogin = false;
		}
		
    
    //跳转至上述3个页面
    if (nextRoute.indexOf(to.path.split('/')[1]) >= 0) {
        //未登录
        if (!isLogin) {
						console.log(nextRoute.indexOf(to.path.split('/')[1]));
						next({
							path: '/login'
						})
					console.log('未登录')
        }
    }
    //已登录的情况再去登录页，跳转至首页
    console.log(to.path.split('/').length)
    if (to.path.split('/')[to.path.split('/').length-1] === 'login') {
        if (isLogin) {
           next({
							path: '/home'
						})
					console.log('已登录')
        }
    }
    next();
});
export default router;
