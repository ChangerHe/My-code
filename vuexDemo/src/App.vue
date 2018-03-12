<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{count}} --- {{doneTodosCount}}</div>
    <button @click="addCount">点我增加10</button>
    <button @click="deleteCount">点我减少2</button>
    <button @click="incrementAsync">点我异步增加10</button>
    <div>
      <input type="text" v-model="message">
      <h4>{{message}}</h4>
    </div>
    <div v-for="(value, index) in doneTodos" :key='index'>
      <div>{{value.id}}</div>
      <div>{{value.test}}</div>
      <div>{{value.done}}</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import store from './store'
// import {mapGetters} from './mapState'
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
console.log(mapGetters, 'mapGetters')

export default {
  name: 'App',
  data () {
    return {
      // count: 0
    }
  },
  methods: {
    doIncrement () {
      // this.$store.commit('increment', 10)
      // 使用对象写法, 除了type以外的内容都作为载荷的对象传递
      this.$store.commit({
        type: 'increment',
        amount: 10
      })
      console.log(this.$store.state.count)
    },
    doDecrement () {
      this.$store.commit('decrement', 2)
    },
    ...mapMutations({
      deleteCount: 'decrement'
    }),
    // 使用dispatch可以对store中的mutations进行异步操作
    incrementAsync () {
      setTimeout(() => {
        this.$store.dispatch({
          type: 'increment',
          amount: 10
        })
      }, 2000);
    },
    ...mapActions({
      addCount: {
        type: 'increment',
        amount: 10
      }
    })
  },
  computed: {
    ...mapGetters(['doneTodos', 'doneTodosCount']),
    ...mapState(['count']),
    // 使用vuex实现双向绑定, 虽比较麻烦但是可以实现全局参数共享
    message: {
      get () {
        return this.$store.state.message
      }, 
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
