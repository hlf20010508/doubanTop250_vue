<template>
  <div class="wordcloud" ref="wordcloud" />
</template>

<script>
import "echarts-wordcloud/dist/echarts-wordcloud.min.js";

export default {
  data() {
    return {
      title: "各个国家上映情况 词云",
      data: [
        {
          name: "name",
          value: 1,
        },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios({
        method: "get",
        url: "/get/wordcloud",
      }).then((response) => {
        this.data = response.data.data;
        this.wordCloud();
      });
    },
    wordCloud() {
      var myChart = this.$echarts.init(this.$refs.wordcloud);
      var option = {
        title: {
          text: this.title,
          left: "center",
        },
        backgroundColor: "#fff",
        tooltip: {
          show: false,
        },
        series: [
          {
            type: "wordCloud",
            gridSize: 1,
            sizeRange: [20, 80],
            rotationRange: [-45, 0, 45, 90],
            textStyle: {
              normal: {
                color: function () {
                  return (
                    "rgb(" +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ")"
                  );
                },
              },
            },
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            data: this.data,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.wordcloud {
  height: 400px;
}
</style>