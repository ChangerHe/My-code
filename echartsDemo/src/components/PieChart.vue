<template>
  <div class="hello">
    111
    <div class="pieChart"  refs='pieChart'></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
    }
  },
  created () {
    echarts.init(this.$refs.pieChart).setOption({
      series: {
        type: 'pie',
        data: [
          {name: 'A', value: 1234},
          {name: 'B', value: 1251},
          {name: 'C', value: 2123}
        ]
      }
    })
  },
  computed: {
  }
}
</script>

<style scoped>
.hello {
  width: 100%;
  height: 100%;
}

.pieChart {
  width: 500px;
  height: 500px;
}
</style>
