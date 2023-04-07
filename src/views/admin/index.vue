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
        <el-menu-item style="font-size: medium; font-style: italic">
          <el-avatar
            src="https://img2.baidu.com/it/u=227029064,2468279856&fm=253&fmt=auto&app=138&f=JPEG?w=577&h=500"
          ></el-avatar>
          医养结合-敬老院后台业务管理中心
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">设备管理</template>
          <el-menu-item index="/admin/bedList">床位管理</el-menu-item>
          <el-menu-item index="/admin/deviceList">医药与用具管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">信息管理</template>
          <el-menu-item index="/admin/elderList">客户信息管理</el-menu-item>
          <el-menu-item index="/admin/employeeList">护工信息管理</el-menu-item>
          <el-menu-item index="/admin/customer">客户咨询管理</el-menu-item>
          <el-menu-item index="/admin/orderList">订单列表</el-menu-item>
        </el-submenu>
        <el-menu-item index="/admin/happly">文娱计划管理</el-menu-item>
        <el-menu-item index="/admin/warter">平台流量可视化面板</el-menu-item>
        <el-menu-item index="/admin/email">院长邮箱</el-menu-item>
        <el-menu-item index="/admin/adminInfo">账户管理</el-menu-item>
        <el-menu-item>
          <!-- <el-avatar
            size="medium"
            :src="circleUrl"
            style="margin-right: 10px"
          ></el-avatar> -->
          <el-button type="primary" size="small" round @click="logout"
            >登出</el-button
          ></el-menu-item
        >
      </el-menu>
    </el-header>
    <el-main style="height: 500px">
      <div>
        <router-view></router-view>
      </div>
    </el-main>
    <el-footer>
      <el-divider content-position="center"
        >医 养 结 合 ，做 到 更 好 的 服 务 ，确 保 每 一 位 老 人 实 现 “ 养 老
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
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      this.activeIndex = key;
      console.log(keyPath);
    },
    logout() {
      this.$message(
        "再见！" +
          sessionStorage.getItem("employee_unit") +
          ":" +
          sessionStorage.getItem("employee_name")
      );
      this.$message(
        "今日的细腻是为了明日的送别，你们的努力是为了传达人间的温暖"
      );
      this.$router.push("/");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user_type");
      sessionStorage.removeItem("employee_name");
      sessionStorage.removeItem("employee_auth_level");
      sessionStorage.removeItem("employee_unit");
    },
  },
};
</script>
<style scoped>
</style>