// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import commonPlugin from "./plugin/public"
import { ACCESS_TOKEN } from './store/mutation-type'
import 'ant-design-vue/dist/antd.css';
import ant from 'ant-design-vue';

Vue.use(ant)
Vue.use(ElementUI);
Vue.use(commonPlugin)
Vue.config.productionTip = false


// 设置路由变化，页面title修改
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `VueDemo网站-${to.meta.title}`
  }
  const token = localStorage.getItem(ACCESS_TOKEN)
  if (token) {
      next()
  } else {
    if (to.meta.required) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
