<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo" />
        <SiderMenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
export default {
  data () {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu
  }
};
</script>

<style scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  cursor: pointer;
}
</style>
