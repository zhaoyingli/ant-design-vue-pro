<template>
  <div>
    <a-date-picker></a-date-picker>
    <Chart :option="chartOption" style="height: 400px" />
  </div>
</template>
<script>
import Chart from "../../components/Chart";
import request from "../../utils/request";
export default {
  data() {
    return {
      chartOption: {}
    };
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
      // this.chartOption.series[0].data = this.chartOption.series[0].data.map(
      //   () => random(100)
      // );
      // this.chartOption = { ...this.chartOption };
    }, 2500);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  components: {
    Chart
  },
  methods: {
    getChartData() {
      request({
        url: "/api/dashboard/chart",
        methods: "get",
        params: { ID: 12345 }
      }).then(response => {
        this.chartOption = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: response.data
            }
          ]
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
