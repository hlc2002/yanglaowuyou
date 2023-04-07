<template>
  <div>
    <el-row style="margin-left: 30%">
      <div style="display: inline-block; width: 200px; margin-right: 10px">
        <el-input
          placeholder="请输入老人姓名进行搜索"
          prefix-icon="el-icon-search"
          v-model="elder_name"
        >
        </el-input>
      </div>
      <el-button type="primary" size="small" @click="findElder">搜索</el-button>
      <el-button
        style="margin-left: 10px"
        type="primary"
        size="small"
        @click="getElderList"
        >刷新</el-button
      >
    </el-row>
    <el-col v-for="(elder, index) in copy_elderList" :key="index">
      <div>
        <el-card class="box-card">
          <el-descriptions direction="vertical" :column="4" border>
            <el-descriptions-item label="老人姓名">{{
              elder.elder_name
            }}</el-descriptions-item>
            <el-descriptions-item label="老人编号">{{
              elder.elder_id
            }}</el-descriptions-item>
            <el-descriptions-item label="老人赡养人家庭住址">{{
              elder.elder_home_address
            }}</el-descriptions-item>
            <el-descriptions-item label="赡养人编号">{{
              elder.elder_son_id
            }}</el-descriptions-item>
            <el-descriptions-item label="负责护工编号">
              本院暂未开通私人护工服务
            </el-descriptions-item>
            <el-descriptions-item label="医养健康计划情况"
              >状况良好</el-descriptions-item
            >
            <el-descriptions-item label="近期营养均衡情况"
              >摄食情况良好</el-descriptions-item
            >
            <el-descriptions-item label="心理放松程度"
              >一般</el-descriptions-item
            >
            <el-descriptions-item label="运动保持情况"
              >良好</el-descriptions-item
            >
            <el-descriptions-item label="参与院内娱乐活动情况"
              >经常参与文娱活动</el-descriptions-item
            >
            <el-descriptions-item label="赡养人联系情况"
              >建议赡养人时常陪伴</el-descriptions-item
            >
          </el-descriptions>
        </el-card>
      </div>
    </el-col>
  </div>
</template>

<script>
import { getElderList } from "@/api/api_admin";

export default {
  name,
  methods: {
    findElder() {
      for (let e = 0; e < this.elderList.length; e++) {
        if (this.elderList[e].eldr_name == this.elder_name) {
          this.copy_elderList = [this.elder];
        }
      }
    },
    getElderList() {
      this.copy_elderList = this.elderList;
    },
  },
  mounted() {
    this.copy_elderList = this.elderList;
    this.token = sessionStorage.getItem("token");
    this.user_type = sessionStorage.getItem("user_type");
    getElderList(this.token, this.user_type).then((res) => {
      if (res.data != null) {
        this.elderList = res.data;
        this.copy_elderList = this.elderList;
      }
    });
  },
  data() {
    return {
      token: "",
      user_type: "",
      elder_name: null,
      elder: {},
      copy_elderList: [],
      elderList: [
        {
          elder_id: "1",
          elder_name: "张三",
          elder_age: "80",
          elder_sex: "男",
          elder_home_address: "",
          elser_son_id: "",
        },
        {
          elder_id: "2",
          elder_name: "李四",
          elder_age: "80",
          elder_sex: "男",
          elder_home_address: "",
          elser_son_id: "",
        },
        {
          elder_id: "3",
          elder_name: "王五",
          elder_age: "80",
          elder_sex: "男",
          elder_home_address: "",
          elser_son_id: "",
        },
        {
          elder_id: "4",
          elder_name: "赵六",
          elder_age: "80",
          elder_sex: "男",
          elder_home_address: "",
          elser_son_id: "",
        },
        {
          elder_id: "5",
          elder_name: "刘八",
          elder_age: "80",
          elder_sex: "男",
          elder_home_address: "",
          elser_son_id: "",
        },
      ],
    };
  },
};
</script>


<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  align-content: center;
  margin: 1% 20%;
}
</style>