<template>
  <div>
    <div v-if="hasDevice">
      <el-row style="margin-bottom: 10px">
        <el-upload
          class="upload-demo"
          ref="upload"
          :action="uploadUrl"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
          :on-success="uploadSuccess"
          name="fileName"
          style="margin-right: 50%; display: inline-block"
        >
          <el-button slot="trigger" size="small" type="primary"
            >批量导入设备</el-button
          >
          <el-button
            style="margin-left: 10px"
            size="small"
            type="success"
            @click="submitUpload"
            >上传到服务器</el-button
          >
        </el-upload>
      </el-row>
      <el-card class="box-card">
        <el-table :data="deviceList">
          <!-- 修改 -->
          <el-table-column prop="device_id" label="设备编号" width="150" />
          <el-table-column prop="device_name" label="设备名称" width="150" />
          <el-table-column prop="device_count" label="设备库存" width="150" />
          <el-table-column label="设备状态" width="150">
            正在启用
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="addDevice(scope.$index, scope.row)"
                >进货登记</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <el-dialog title="填写进品登记信息" :visible.sync="showAddDevice">
        <el-form :model="device">
          <el-form-item label="进品编号" :label-width="formLabelWidth">
            {{ device.device_id }}
          </el-form-item>
          <el-form-item label="进品名称" :label-width="formLabelWidth">
            {{ device.device_name }}
          </el-form-item>
          <el-form-item label="进品日期" :label-width="formLabelWidth">
            <el-date-picker
              v-model="date"
              align="right"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="进品数量" :label-width="formLabelWidth">
            <el-input
              v-model="device.device_count"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addDeviceLast">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div v-else>
      <el-empty description="目前并无可用设备详情"></el-empty>
    </div>
  </div>
</template>

<script>
import { getDeviceList } from "@/api/api_admin";
export default {
  name,
  data() {
    return {
      token: "",
      user_type: "",
      hasDevice: true,
      showAddDevice: false,
      index: 0,
      formLabelWidth: "120",
      date: "",
      uploadUrl: "http://127.0.0.1:9001/employee/saveDeviceBatch",
      fileList: [],
      device: {
        device_id: "1",
        device_name: "板蓝根",
        device_count: 100,
        device_state: true,
        device_room_no: 1,
        device_no: 1,
      },
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
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    uploadSuccess() {
      this.fileList = [];
      getDeviceList(this.token, this.user_type).then((res) => {
        if (res.data != null) {
          this.deviceList = res.data;
        }
      });
    },
    addDevice(index, row) {
      this.showAddDevice = true;
      this.index = index;
      console.log(index, row);
    },
    addDeviceLast() {
      this.deviceList[this.index].device_count = this.device.device_count;
      this.showAddDevice = false;
      this.$notify({
        type: "success",
        message: "登记成功",
      });
    },
  },
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
  margin: 0 15%;
}
</style>