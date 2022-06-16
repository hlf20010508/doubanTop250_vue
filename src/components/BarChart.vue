<template>
  <div class="bar" ref="bar" />
</template>

<script>
export default {
  data() {
    return {
      title: "年份-电影数量 柱状图",
      yName: "数量",
      x: ["x1"],
      y: ["1"],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios({
        method: "get",
        url: "/get/bar",
      }).then((response) => {
        this.x = response.data.x;
        this.y = response.data.y;
        this.barChart()
      });
    },
    barChart() {
      var myChart = this.$echarts.init(this.$refs.bar);
      var option = {
        title: {
          text: this.title,
          left: "center",
        },
        //提示框
        tooltip: {
          trigger: "item",
        },
        //x轴显示种类
        xAxis: {
          data: this.x,
        },
        //y轴可填数值等
        yAxis: {},
        series: [
          {
            name: this.yName,
            type: "bar",
            //y轴数值
            data: this.y,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.bar {
  height: 400px;
}
</style>