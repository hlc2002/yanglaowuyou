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
          text: '消耗卡路里'
        },
        xAxis: {
          type: 'category',
          data: [
            '1-2千步',
            '2-3千步',
            '3-4千步',
            '4-5千步',
            '5-6千步',
            '6-7千步',
            '7-8千步'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 280, 380, 470, 510, 630],
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
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
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
