<template>
  <el-container>
    <el-header>
      <el-menu
        :router="true"
        :default-active="this.$router.path"
        unique-opened
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item>医养结合-敬老院客户服务中心</el-menu-item>
        <el-submenu>
          <template slot="title">常用业务</template>
          <el-menu-item index="/user/bed">床位</el-menu-item>
          <el-menu-item index="/user/employee">护工</el-menu-item>
          <el-menu-item index="/user/deviceList">医药与用具</el-menu-item>
        </el-submenu>
        <el-submenu>
          <template slot="title">老人服务</template>
          <el-menu-item index="/user/elder">老人信息</el-menu-item>
          <el-menu-item index="/user/bed">预订床位</el-menu-item>
          <el-menu-item index="/user/device">医药计划</el-menu-item>
          <el-menu-item index="/user/empoyeeInfo">服务护工</el-menu-item>
          <el-menu-item index="/user/health">健康报表</el-menu-item>
        </el-submenu>
        <el-menu-item index="/user/order">我的订单</el-menu-item>
        <el-menu-item index="/user/service">服务清单</el-menu-item>
        <el-menu-item index="/user/live">养生定制</el-menu-item>
        <el-menu-item index="/user/happly">文娱活动</el-menu-item>
        <el-menu-item index="/user/customer">客服咨询</el-menu-item>
      </el-menu>
    </el-header>
    <el-main style="height: 500px">
      <router-view></router-view>
    </el-main>
    <el-footer>
      <el-divider content-position="center"
        >医 养 结 合 ，只 为 更 好 的 服 务 ，确 保 每 一 位 老 人 实 现 “ 养 老
        无 忧 ” , 享 受 快 乐 晚 年</el-divider
      >
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name,
  data() {
    return {
      activeIndex: "/user/bed",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      this.activeIndex = key;
      console.log(keyPath);
    },
  },
};
</script>

<style scoped>
</style>