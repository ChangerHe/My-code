<template>
  <div class="hello">
    <div class="pieChart"  refs='pie_chart'></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    this.$echarts.init(document.getElementsByClassName('pieChart')[0]).setOption({
      series: {
        type: 'pie',
        roseType: 'angle',
        data: [
          {name: 'A', value: 1234},
          {name: 'B', value: 1251},
          {name: 'C', value: 2123},
          {name: 'D', value: 3213},
          {name: 'E', value: 2199}
        ],
        // 阴影的样式配置
        itemStyle: {
          shadowBlur: 200,
          shadowOffsetX: 0,
          shadowOffsetY: 100,
          shadowColor: 'rgba(0,0,0,.5)',
          // 鼠标hover的时候的高亮样式
          emphasis: {
            shadowBlur: 0,
            shadowColor: '#000'
          }
        },
        backgroundColor: '#900',
        textStyle: {
          color: 'rgba(255, 255, 255, .3)'
        }
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
