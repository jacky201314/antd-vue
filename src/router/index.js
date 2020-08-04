import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'HelloWorld',
      component: () => import ('@/view/login'),
      meta: { title: '登录', required: false }
    },
    {
      path: '/',
      name: 'home',
      component: () => import ('@/view/index'),
      meta: { title: '首页', required: true, nav: true }
    },
    {
      path: '/list',
      name: 'list',
      component: () => import ('@/view/list'),
      meta: { title: '列表', required: true, nav: true }
    }
  ]
})
