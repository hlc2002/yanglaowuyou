<template>
  <div>
    <div v-if="hasDevice">
      <el-card class="box-card">
        <el-table :data="deviceList">
          <!-- 修改 -->
          <el-table-column prop="device_id" label="药物编号" width="150" />
          <el-table-column prop="device_name" label="药物名称" width="150" />
          <el-table-column prop="device_count" label="药物余量" width="150" />
          <el-table-column label="用药状态" width="150">
            正在启用
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <div v-else>
      <el-empty
        description="您的关联老人未进入本院 或 您的关联老人健康指数良好"
      ></el-empty>
    </div>
  </div>
</template>

<script>
import { getDeviceList } from "@/api/api";
export default {
  name,
  data() {
    return {
      token: "",
      user_type: "",
      hasDevice: true,
      deviceList: [
        {
          device_id: "1",
          device_name: "板蓝根",
          device_count: 100,
          device_state: true,
          device_room_no: 1,
          device_no: 1,
        },
        {
          device_id: "2",
          device_name: "肠胃消食片",
          device_count: 100,
          device_state: true,
          device_room_no: 1,
          device_no: 1,
        },
        {
          device_id: "3",
          device_name: "清心散",
          device_count: 80,
          device_state: true,
          device_room_no: 1,
          device_no: 1,
        },
        {
          device_id: "4",
          device_name: "救心丸",
          device_count: 200,
          device_state: true,
          device_room_no: 1,
          device_no: 1,
        },
        {
          device_id: "5",
          device_name: "冬虫夏草",
          device_count: 99,
          device_state: true,
          device_room_no: 1,
          device_no: 1,
        },
        {
          device_id: "6",
          device_name: "鹿茸散",
          device_count: 38,
          device_state: true,
          device_room_no: 1,
          device_no: 1,
        },
      ],
    };
  },
  methods: {},
  mounted() {
    this.token = sessionStorage.getItem("token");
    this.user_type = sessionStorage.getItem("user_type");
    let device_name = {
      device_name: "",
    };
    getDeviceList(device_name, this.token, this.user_type)
      .then((res) => {
        if (res.data != null) {
          this.deviceList = res.data;
          this.hasDevice = true;
        } else {
          this.hasDevice = false;
        }
      })
      .catch((e) => {
        console.log(e);
        this.$notify({
          type: "error",
          message: "请检测网络环境",
        });
      });
    this.deviceList.forEach((element) => {
      if (element.device_state == true) {
        element.device_state = "正在使用";
      } else {
        element.device_state = "已经停用";
      }
    });
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
  margin: 0 20%;
}
</style>