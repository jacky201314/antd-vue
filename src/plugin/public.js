import Vue from 'vue'
import storage from "./plugin"

export default {
  install (Vue) {
    Vue.prototype.$storage = storage
  }
}
