import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Login from '../pages/Login/Login.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import ShopList from '../pages/ShopList/ShopList.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/cart',
      component: ShopCart
    },
    {
      path: '/list',
      component: ShopList
    },
  ]
})
