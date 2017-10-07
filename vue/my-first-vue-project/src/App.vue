<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <input type="text" v-model="newItem" @keyup.enter="addNew">
    <ul>
      <li v-for="item in items" :class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <p>child tells me: {{childWords}}</p>
    <componentA msgfromfather="you die!" @child-tell-me-something="listenToMyBoy"></componentA>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/conponentA'

export default {
  data() {
      return {
          title: '<span>111</span>this is a todo list',
          items: Store.fetch(),
          liClass: 'thisisliclass',
        childWords: ''
      }
  },
  components: {ComponentA},
  watch: {
    items: {
        handler(val, oldValue) {
          Store.save(val)
        },
      deep: true
    }
  },
  methods: {
    toggleFinish: function(item) {
        item.isFinished = !item.isFinished
    },
    addNew() {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    listenToMyBoy(msg) {
        this.childWords = msg
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
.finished {
  background: red;
}
</style>
