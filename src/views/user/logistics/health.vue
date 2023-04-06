<template>
  <div class="home-index-box">
    <!--折线趋势图-->
    <div class="graph-doubleLine-warp">
      <el-row :gutter="20">
        <el-col :span="24">
          <div id="home_DoubleLine" style="width: 100%; height: 250px"></div>
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="20">
          <div
            id="home_gathering_source"
            style="height: 300px; margin: 30px 10px; padding: 0px"
          ></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
let gatheringSourceOption = {
  title: {
    text: "您的关联老人在本院的最近5日运动情况分析:",
    left: "left",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    type: "scroll",
    orient: "vertical",
    right: 0,
    top: "center",
    icon: "circle",
    selectedMode: "multiple",
    formatter: (name) => {
      let data = gatheringSourceOption.series[0].data;
      let total = 0;
      let tarValue = 0;
      for (let i = 0, l = data.length; i < l; i++) {
        total += data[i].value;
        if (data[i].name == name) {
          tarValue = data[i].value;
        }
      }
      let p = ((tarValue / total) * 100).toFixed(2);
      return `${name}  |  ${p}%  `;
    },
  },
  series: [
    {
      name: "最近7日占比",
      type: "pie",
      radius: "60%",
      center: ["25%", "55%"],
      selectedMode: "single",
      data: [],
      label: {
        show: false,
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
export default {
  name,
  data() {
    return {
      gatheringSourceOption,
      doubleLineOption: {
        title: {
          text: "您的关联老人在本院的最近5日健康情况分析:",
          left: "left",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          bottom: 0,
          left: "center",
        },
        grid: {
          left: 30,
          bottom: 50,
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: ["#666666"],
              width: 1,
              type: "solid",
            },
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: ["0%", "20%"],
          axisLine: {
            lineStyle: {
              color: ["#666666"],
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#C4C4C4",
              width: 1,
              type: "dashed",
            },
          },
        },
        series: [],
      },
    };
  },
  mounted() {
    var arr = [65, 60, 70, 75, 80];
    var arr2 = [
      "2023-04-04",
      "2023-04-05",
      "2023-04-06",
      "2023-04-07",
      "2023-04-08",
    ];
    var list = [
      {
        name: "健康指数",
        type: "line",
        symbol: "circle",
        symbolSize: [5, 5],
        data: arr,
      },
      {
        name: "评价日期",
        type: "line",
        symbol: "circle",
        symbolSize: [5, 5],
        data: arr2,
      },
    ];
    this.doubleLineOption.series = list;
    this.doubleLineOption.xAxis.data = arr2;

    var sourceList = [
      { value: 1, name: "散步" },
      { value: 2, name: "象棋" },
      { value: 2, name: "广场舞" },
      { value: 3, name: "民族乐器" },
      { value: 2, name: "乒乓球" },
      { value: 4, name: "围棋" },
    ];
    this.gatheringSourceOption.series[0].data = sourceList;

    // 新建一个promise对象
    let newPromise = new Promise((resolve) => {
      resolve();
    });
    //然后异步执行echarts的初始化函数
    newPromise.then(() => {
      this.$echarts
        .init(document.getElementById("home_DoubleLine"), "light")
        .setOption(this.doubleLineOption);
      window.addEventListener("resize", () => {
        this.$echarts
          .init(document.getElementById("home_DoubleLine"), "light")
          .resize();
      });

      this.$echarts
        .init(document.getElementById("home_gathering_source"), "light")
        .setOption(this.gatheringSourceOption);
      window.addEventListener("resize", () => {
        this.$echarts
          .init(document.getElementById("home_gathering_source"), "light")
          .resize();
      });
    });
  },
};
</script>

<style scoped>
</style>
