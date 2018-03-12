// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {
        id: 1, test: 'I am 1', done: true
      }, {
        id: 2, test: 'I am 2', done: false
      }, {
        id: 3, test: 'I am 3', done: true
      }
    ],
    message: '我是初始message'
  },
  mutations: {
    increment(state, n) {
      state.count += n.amount
    },
    decrement(state) {
      state.count -= 1
    },
    updateMessage(state, message) {
      state.message = message
    }
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  actions: {
    increment ({ commit }, { amount }) {
      console.log(arguments, 'arguments')
      commit('increment', {
        amount
      })
    },
    async decrementAsync ({commit}) {
      await commit('decrement')
    }
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
