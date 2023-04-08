<template>
  <el-container>
    <el-container
      id="lineChart"
      style="width: 500px; height: 400px"
    ></el-container>
    <el-container
      id="lineChart2"
      style="width: 500px; height: 400px"
    ></el-container>
  </el-container>
  <!-- <div>
    <div id="lineChart" style="width: 500px; height: 400px">111</div>
    <div id="lineChart2" style="width: 500px; height: 400px">111</div>
  </div> -->
</template>
<script>
// import echarts from 'echarts'
export default {
  name: 'lineChart',
  data() {
    return {
      chartss: '',
      chartss2: ''
    }
  },
  methods: {
    drawLine(id) {
      console.log(333)
      this.chartss = this.$echarts.init(document.getElementById(id))
      this.chartss.setOption({
        title: {
          text: '访问量'
        },
        xAxis: {
          type: 'category',
          data: [
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
            '星期日'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [1200, 2000, 1500, 800, 700, 1100, 1300],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      })
    },
    drawLine2(id) {
      console.log(333)
      this.chartss2 = this.$echarts.init(document.getElementById(id))
      this.chartss2.setOption({
        title: {
          text: '订单量'
        },
        xAxis: {
          type: 'category',
          data: [
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
            '星期日'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [12, 20, 15, 8, 7, 11, 13],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      })
    }
  },
  created() {
    this.$nextTick(() => {
      console.log(222)
      this.drawLine('lineChart')
      this.drawLine2('lineChart2')
    })
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
