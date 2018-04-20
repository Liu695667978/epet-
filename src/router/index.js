import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Login from '../pages/Login/Login.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import ShopList from '../pages/ShopList/ShopList.vue'
import Classify from '../pages/ShopList/Classify/Classify.vue'
import Brand from '../pages/ShopList/Brand/Brand.vue'
import All from '../pages/All/All.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        isShow: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isShow: false
      }
    },
    {
      path: '/cart',
      component: ShopCart,
      meta: {
        isShow: true
      }
    },
    {
      path: '/list',
      component: ShopList,
      meta: {
        isShow: true
      },
      children: [
        {
          path: 'classify',
          component: Classify,
          meta: {
            isShow: true
          },
        },
        {
          path: 'brand',
          component: Brand,
          meta: {
            isShow: true
          },
        },
        {
          path: '/list',
          redirect: '/list/classify'
        }
      ]
    },
    {
      path: '/all',
      meta: {
        isShow: false
      },
      component: All
    },
  ]
})
