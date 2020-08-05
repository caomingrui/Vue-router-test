import Vue from 'vue'
import Vuex from 'vuex'
import less from 'less'
Vue.use(less)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerList: localStorage.getItem("setRouList"),
    tokens: localStorage.getItem("tk"),
    navCheck: false
  },
  mutations: {
    setRouList(stat, date) {
      stat.routerList = date
    },
    setToken(stat, date) {
      stat.tokens = date
    },
    setCheck(stat, data) {
      stat.navCheck = data
    }
  },
  actions: {
  },
  modules: {
  }
})
