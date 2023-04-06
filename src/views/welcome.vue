<template>
  <div class="back">
    <el-header height="50px">
      <div style="display: inline-block">
        <el-avatar
          style="margin-bottom: 15px"
          src="https://img2.baidu.com/it/u=227029064,2468279856&fm=253&fmt=auto&app=138&f=JPEG?w=577&h=500"
        ></el-avatar>
        <el-badge style="margin-bottom: 60px; font-style: italic" class="item"
          >医养结合-敬老院客户服务中心</el-badge
        >
      </div>
      <el-tabs
        style="display: inline-block; margin-left: 30%"
        @tab-click="toLogin"
      >
        <el-tab-pane label="精准服务"></el-tab-pane>
        <el-tab-pane label="多元管理"></el-tab-pane>
        <el-tab-pane label="经验丰富"></el-tab-pane>
        <el-tab-pane label="医养结合"></el-tab-pane>
        <el-tab-pane label="安全无忧"></el-tab-pane>
        <el-tab-pane label="健康生活"></el-tab-pane>
      </el-tabs>
    </el-header>
    <el-dialog title="用户登录" :visible.sync="dialogFormVisible">
      <el-form :model="userForm">
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input
            v-model="userForm.phone"
            autocomplete="off"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            v-model="userForm.password"
            autocomplete="off"
            type="password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click="(dialogFormVisible = false), (dialogFormVisibleAdmin = true)"
          >切换类型</el-button
        >
        <el-button
          @click="
            (dialogFormVisible = false), (dialogFormVisibleRegister = true)
          "
          >注 册</el-button
        >
        <el-button type="primary" @click="usreLogin">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="用户注册" :visible.sync="dialogFormVisibleRegister">
      <el-form :model="userForm">
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input
            v-model="userForm.phone"
            autocomplete="off"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input
            v-model="userForm.name"
            autocomplete="off"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            v-model="userForm.password"
            autocomplete="off"
            type="password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click="
            (dialogFormVisible = true), (dialogFormVisibleRegister = false)
          "
          >返 回</el-button
        >
        <el-button type="primary" @click="userRegister">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="职工登录" :visible.sync="dialogFormVisibleAdmin">
      <el-form :model="userForm">
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input
            v-model="userForm.phone"
            autocomplete="off"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            v-model="userForm.password"
            autocomplete="off"
            type="password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click="(dialogFormVisibleAdmin = false), (dialogFormVisible = true)"
          >切换类型</el-button
        >
        <el-button
          @click="
            (dialogFormVisible = false), (dialogFormVisibleRegisterAdmin = true)
          "
          >注 册</el-button
        >
        <el-button type="primary" @click="adminLogin">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="职工注册" :visible.sync="dialogFormVisibleRegisterAdmin">
      <el-form :model="userForm">
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input
            v-model="userForm.phone"
            autocomplete="off"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input
            v-model="userForm.name"
            autocomplete="off"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            v-model="userForm.password"
            autocomplete="off"
            type="password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click="
            (dialogFormVisibleAdmin = true),
              (dialogFormVisibleRegisterAdmin = false)
          "
          >返 回</el-button
        >
        <el-button type="primary" @click="adminRegister">确 定</el-button>
      </div>
    </el-dialog>
    <el-divider></el-divider>
    <el-main class="back">
      <el-carousel :interval="2000" height="500px">
        <el-carousel-item v-for="item in images" :key="item.id">
          <div id="demo">
            <img :src="item.url" class="img" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <el-footer>
      <el-divider content-position="center"
        >医养结合，只为更好的服务，确保每一位老人实现“养老无忧”！</el-divider
      >
    </el-footer>
  </div>
</template>

<script>
import { login_password_elderSon, register_elderSon } from "@/api/api";
import { login_password_employee, register_employee } from "@/api/api_admin";

export default {
  name,
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisibleAdmin: false,
      dialogFormVisibleRegister: false,
      dialogFormVisibleRegisterAdmin: false,
      formLabelWidth: "80px",
      userForm: {
        phone: "",
        name: "",
        password: "",
      },
      images: [
        { id: 0, url: require("@/assets/img/灯塔.png") },
        { id: 1, url: require("@/assets/img/雪山.jpg") },
        { id: 2, url: require("@/assets/img/窗外.jpg") },
      ],
    };
  },
  mounted() {
    this.$notify({
      type: "success",
      message: "欢迎使用养老无忧-医养结合敬老院管理系统客户服务平台！",
    });
  },
  methods: {
    toLogin() {
      this.$message("您好！进行登录后方可访问本院相关业务");
      this.dialogFormVisible = true;
    },
    usreLogin() {
      this.dialogFormVisible = false;
      this.$notify({
        type: "info",
        message: "等待加载",
      });
      let params = {
        elder_son_phone: this.userForm.phone,
        elder_son_password: this.userForm.password,
      };
      login_password_elderSon(params).then((res) => {
        if (res.code === 200) {
          console.log(res.data);
          sessionStorage.setItem("token", res.data.elder_son_id);
          sessionStorage.setItem("user_type", "elder_son");
          sessionStorage.setItem("elder_id", res.data.elder_id);
          this.$router.push("/user");
        } else {
          this.$notify({
            type: "error",
            message: "密码不正确或账号非法",
          });
        }
      });
    },
    adminLogin() {
      this.dialogFormVisibleAdmin = false;
      this.$notify({
        type: "info",
        message: "等待加载",
      });
      let params = {
        employee_phone: this.userForm.phone,
        employee_password: this.userForm.password,
      };
      login_password_employee(params).then((res) => {
        if (res.code === 200) {
          console.log(res.data);
          sessionStorage.setItem("token", JSON.stringify(res.data.employee_id));
          sessionStorage.setItem("user_type", "employee");
          this.$router.push("/admin");
        } else {
          this.$notify({
            type: "error",
            message: "密码不正确或账号非法",
          });
        }
      });
    },
    userRegister() {
      this.dialogFormVisibleRegister = false;
      this.$notify({
        type: "info",
        message: "等待加载",
      });
      let elderSon = {
        elder_son_phone: this.userForm.phone,
        elder_son_name: this.userForm.name,
        elder_son_password: this.userForm.password,
      };
      register_elderSon(elderSon).then((res) => {
        if (res.data) {
          this.dialogFormVisible = true;
          this.$message("注册成功，您可登录本院网站咨询业务");
        } else {
          this.$notify({
            type: "error",
            message: "提交参数非法",
          });
        }
      });
    },
    adminRegister() {
      this.dialogFormVisibleRegisterAdmin = false;
      this.$notify({
        type: "info",
        message: "等待加载",
      });
      let employee = {
        employee_phone: this.userForm.phone,
        employee_name: this.userForm.name,
        employee_password: this.userForm.password,
      };
      register_employee(employee).then((res) => {
        if (res.data) {
          this.dialogFormVisibleAdmin = true;
          this.$message("注册成功，您可登录本院网站咨询业务");
        } else {
          this.$notify({
            type: "error",
            message: "提交参数非法",
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.back {
  background-color: #fafafa;
}
.img {
  height: 500px;
  width: 1000px;
}
#demo {
  display: inline-block;
  position: relative;
  /*margin: 1%;*/
  /*padding: 20px;*/
  background: #fafafa;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 0 1px 0 #fff;
}

#demo::before,
#demo::after {
  position: absolute;
  content: "";
  top: 10px;
  bottom: 15px;
  left: 10px;
  width: 50%;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.5);
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  -o-transform: rotate(-3deg);
  -ms-transform: rotate(-3deg);
  transform: rotate(-3deg);
  z-index: -1;
}

#demo::after {
  right: 10px;
  left: auto;
  -webkit-transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -o-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  transform: rotate(3deg);
}

#demo img {
  vertical-align: bottom;
}
</style>