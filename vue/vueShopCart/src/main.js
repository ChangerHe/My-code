// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import IndexPage from './components/index'

Vue.use(router)

// let indexRouter = new router({
//     mode: 'history',
//     routes: [{
//         path: '/',
//         component: IndexPage
//     }]
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<Layout/>', // 模板设为layout
    components: {
        Layout
    } // 根组件的名称也设置为Layout
})