import Vue from 'vue'
import { ACCESS_TOKEN, USER_INFO } from '@/store/mutation-type'
import api from '../../api/login'

const user = {
  state: {
    info: {},
    token: '',
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_USER_INFO (state, info) {
      state.info = info
    }
  },
  actions: {
    Login ({commit}, userInfo) {
      return new Promise ((resolve,reject) => {
        api.login(userInfo).then(response => {
          if (response.data.code == 0) {
            localStorage.setItem(ACCESS_TOKEN, response.data.data.accessToken)
            localStorage.setItem(USER_INFO, response.data.data.user)
            commit('SET_TOKEN', response.data.data.accessToken)
            commit('SET_USER_INFO', response.data.data.user)
            resolve()
          } else {
            reject(response.data.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    Logout ({commit},state) {
      return new Promise(resolve => {
        commit('SET_TOKEN','')
        commit('SET_USER_INFO',{})
        localStorage.removeItem(ACCESS_TOKEN)
        localStorage.removeItem(USER_INFO)
        resolve()
      })
    }
  }
}
export default user
