import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
//@ 和 ../的区别
import PersonInfo from '../components/Index/PersonInfo'
import MenuInfo from '../components/Index/MenuInfo'
import NoticeInfo from '../components/Index/NoticeInfo'
import Attence from '../components/Index/Modules/Attence'


Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    //这相当于定义默认的主页面
    {
      path: '/',
      redirect: "/Login"
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    //首页
    {path: '/PersonInfo',name: 'PersonInfo',component:PersonInfo},
    {path: '/MenuInfo',name: 'MenuInfo',component:MenuInfo},
    {path: '/NoticeInfo',name: 'NoticeInfo',component:NoticeInfo},
    {path: '/Attence',name: 'Attence',component:Attence}
  ]
})
