<template>
  <div class="pie" ref="pie" />
</template>

<script>
export default {
  data() {
    return {
      title: "电影类型 饼图",
      itemName: "数量",
      data: [{ value: 1, name: "name" }],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios({
        method: "get",
        url: "/get/pie",
      }).then((response) => {
        this.data = response.data.data;
        this.pieChart();
      });
    },
    pieChart() {
      var myChart = this.$echarts.init(this.$refs.pie);
      var option = {
        title: {
          text: this.title,
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "right",
        },
        series: [
          {
            name: this.itemName,
            type: "pie",
            radius: "80%",
            center: ["50%", "60%"],
            data: this.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.pie {
  height: 400px;
}
</style>