import Vue from 'vue'
import Router from 'vue-router'
import PieChart from '@/components/PieChart'
import IndexComponent from '@/components/IndexComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexComponent
    },
    {
      path: '/pieChart',
      name: 'PieChart',
      component: PieChart
    }
  ]
})
