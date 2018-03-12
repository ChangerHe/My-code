// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import echarts from 'echarts'
import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
