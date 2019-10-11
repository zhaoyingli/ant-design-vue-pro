<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUs from "ant-design-vue/lib/locale-provider/en_US";
import moment from "moment";
export default {
  data() {
    return {
      locale: zhCN
    };
  },
  watch: {
    "$route.query.locale": function(val) {
      this.locale = val === "enUs" ? enUs : zhCN;
      moment.locale(val === "enUs" ? "en" : "zh-cn");
    }
  }
};
</script>

<style lang="less"></style>
