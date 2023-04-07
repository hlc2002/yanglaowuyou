<template>
  <div>
    <el-row style="margin-left: 60%">
      <el-input
        v-model="employee_name"
        placeholder="请输入您查询的护工姓名"
        size="small"
        style="width: 200px"
      ></el-input>
      <el-button
        style="margin-left: 10px"
        type="primary"
        size="small"
        @click="findEmployeeByEmployeeName"
        >搜索</el-button
      >
    </el-row>
    <el-table :data="employeeList">
      <!-- 修改 -->
      <el-table-column prop="employee_id" label="编号" width="100" />
      <el-table-column prop="employee_name" label="姓名" width="120" />
      <el-table-column prop="employee_sex" label="性别" width="100" />
      <el-table-column prop="employee_age" label="年龄" width="100" />
      <el-table-column prop="employee_phone" label="电话" width="200" />
      <el-table-column prop="employee_auth_level" label="职级" width="120" />
      <el-table-column prop="employee_unit" label="岗位" width="120" />
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <!-- @click="editState = true" -->
          <el-button
            type="text"
            size="small"
            @click="handleOpen(scope.$index, scope.row)"
            >查看详情</el-button
          >
          <el-button size="small" @click="upLevel(scope.$index, scope.row)"
            >升职级</el-button
          >
          <el-button size="small" @click="downLevel(scope.$index, scope.row)"
            >降职级</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="employee.employee_name"
      :visible.sync="showEmployee"
      width="300px"
    >
      <el-row>年龄：{{ employee.employee_age }}</el-row>
      <el-divider></el-divider>
      <el-row>性别：{{ employee.employee_sex }}</el-row>
      <el-divider></el-divider>
      <el-row>职级：{{ employee.employee_auth_level }}</el-row>
      <el-divider></el-divider>
      <el-row>岗位：{{ employee.employee_unit }}</el-row>
      <el-divider></el-divider>
      <el-row>联系电话：{{ employee.employee_phone }}</el-row>
      <el-divider></el-divider>
      <el-row>年度评价：优秀员工</el-row>
      <el-divider></el-divider>
      <el-row>院长评价：工作细腻</el-row>
    </el-dialog>
  </div>
</template>

<script>
import { getEmployeeByName, getEmployeeList } from "@/api/api_admin";
export default {
  name,
  data() {
    return {
      token: "",
      user_type: "",
      showEmployee: false,
      employee_name: "",
      employee: {
        employee_id: "1",
        employee_no: "1",
        employee_name: "张三",
        employee_age: "29",
        employee_sex: "女",
        employee_phone: "198 9090 1014",
        employee_openid: "",
        employee_password: "",
        employee_auth_level: 1,
        employee_unit: "一级护工",
        cloud_chat_token: "",
      },
      employeeList: [
        {
          employee_id: "1",
          employee_no: "1",
          employee_name: "张三",
          employee_age: "29",
          employee_sex: "女",
          employee_phone: "198 9090 1014",
          employee_openid: "",
          employee_password: "",
          employee_auth_level: 1,
          employee_unit: "一级护工",
          cloud_chat_token: "",
        },
      ],
    };
  },
  mounted() {
    this.token = sessionStorage.getItem("token");
    this.user_type = sessionStorage.getItem("user_type");
    getEmployeeList(this.token, this.user_type)
      .then((res) => {
        if (res.code === 200) {
          this.employeeList = res.data;
          this.employeeList.forEach((element) => {
            element.employee_unit = "一级护工";
          });
        } else {
          this.$message("您目前不具备访问全部护工权限");
        }
      })
      .catch((e) => {
        console.log(e);
        this.$notify({
          type: "error",
          message: "服务器中断",
          position: "top-left",
        });
      });
  },
  methods: {
    handleOpen(index, row) {
      console.log(index, row);
      this.employee = this.employeeList[index];
      this.showEmployee = true;
    },
    findEmployeeByEmployeeName() {
      if (this.employee_name == "" || this.employee_name == null) {
        this.$notify({
          type: "error",
          message: "请您输入正确的职工姓名",
          position: "top-left",
        });
      } else {
        getEmployeeByName(
          { employee_name: this.employee_name },
          this.token,
          this.user_type
        )
          .then((res) => {
            if (res.code === 200) {
              this.employeeList = [res.data];
            } else {
              this.$notify({
                type: "error",
                message: "本院没有名称为" + this.employee_name + "的员工",
                position: "top-left",
              });
            }
          })
          .catch((e) => {
            console.log(e);
            this.$notify({
              type: "error",
              message: "本院没有名称为" + this.employee_name + "的员工",
              position: "top-left",
            });
          });
      }
    },
    upLevel(index, row) {
      this.$notify({
        type: "error",
        message: "您不具备院长权限，无法为" + row.employee_name + "升职级",
      });
    },
    downLevel(index, row) {
      this.$notify({
        type: "error",
        message: "您不具备院长权限，无法为" + row.employee_name + "降职级",
      });
    },
  },
};
</script>

<style></style>