<template>
  <div>
    <el-row style="height: 80px">
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
          >批量导入床位</el-button
        >
        <el-button
          style="margin-left: 10px"
          size="small"
          type="success"
          @click="submitUpload"
          >上传到服务器</el-button
        >
      </el-upload>
      <div style="display: inline-block; width: 200px; margin-right: 10px">
        <el-input
          placeholder="请输入搜索床号"
          prefix-icon="el-icon-search"
          v-model="bed_no"
        >
        </el-input>
      </div>
      <el-button type="primary" size="small" @click="findBed">搜索</el-button>
      <el-button
        style="margin-left: 10px"
        type="primary"
        size="small"
        @click="uploadSuccess"
        >刷新</el-button
      >
    </el-row>
    <el-table :data="bedList" style="width: 100%">
      <el-table-column label="房间号" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.bed_room_no }}</span>
        </template>
      </el-table-column>
      <el-table-column label="床位号" width="180" type="index">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>床号: {{ scope.row.bed_no }}</p>
            <p>床位类型: {{ scope.row.bed_room_type }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.bed_no }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="当前预订状态" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.bed_lock == true ? "客户已预订" : "空闲中"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="住宿老人编号" width="180">
        <template slot-scope="scope">
          <span
            style="margin-left: 10px"
            v-if="scope.row.bed_elder_id != null"
            >{{ scope.row.bed_elder_id }}</span
          >
          <span style="margin-left: 10px" v-if="scope.row.bed_elder_id == null"
            >暂无老人居住</span
          >
        </template>
      </el-table-column>
      <el-table-column label="床位状态" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.bed_state ? "良好可用" : "损坏弃用"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="restart(scope.$index, scope.row)"
            >启用</el-button
          >
          <el-button
            size="mini"
            type="primary"
            @click="disable(scope.$index, scope.row)"
            >弃用</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  deleteBedByBedNo,
  getBedByBedNo,
  getBedList,
  resetBedByBedNo,
} from "@/api/api_admin";

export default {
  name,
  data() {
    return {
      token: "",
      user_type: "",
      uploadUrl: "http://127.0.0.1:9001/employee/saveBedBatch",
      bed_no: "",
      fileList: [],
      bedList: [
        {
          bed_room_no: 1,
          bed_no: 1,
          bed_room_type: "待分配床位",
          bed_lock: false,
          bed_elder_id: null,
          bed_state: true,
        },
        {
          bed_room_no: 1,
          bed_no: 2,
          bed_room_type: "待分配床位",
          bed_lock: false,
          bed_elder_id: null,
          bed_state: true,
        },
        {
          bed_room_no: 1,
          bed_no: 3,
          bed_room_type: "待分配床位",
          bed_lock: false,
          bed_elder_id: null,
          bed_state: true,
        },
        {
          bed_room_no: 1,
          bed_no: 4,
          bed_room_type: "待分配床位",
          bed_lock: false,
          bed_elder_id: null,
          bed_state: true,
        },
        {
          bed_room_no: 1,
          bed_no: 5,
          bed_room_type: "待分配床位",
          bed_lock: false,
          bed_elder_id: null,
          bed_state: true,
        },
        {
          bed_room_no: 1,
          bed_no: 6,
          bed_room_type: "待分配床位",
          bed_lock: false,
          bed_elder_id: null,
          bed_state: true,
        },
        {
          bed_room_no: 1,
          bed_no: 7,
          bed_room_type: "待分配床位",
          bed_lock: false,
          bed_elder_id: null,
          bed_state: true,
        },
      ],
    };
  },
  mounted() {
    this.token = sessionStorage.getItem("token");
    this.user_type = sessionStorage.getItem("user_type");
    getBedList(this.token, this.user_type)
      .then((res) => {
        if (res.data != null) {
          this.bedList = res.data;
        }
      })
      .catch((e) => {
        console.log(e);
        this.$notify({
          type: "error",
          message: "服务器中断",
        });
      });
  },
  methods: {
    restart(index, row) {
      let bed_no = {
        bed_no: row.bed_no,
      };
      if (row.bed_state === true) {
        this.$notify({
          type: "error",
          message: "当前设备状态良好，无需维修启用",
        });
      } else {
        resetBedByBedNo(bed_no, this.token, this.user_type).then((res) => {
          if (res.data === true) {
            this.bedList[index].bed_state = true;
          } else {
            this.$message("您的权限不足，无法弃用");
          }
        });
      }
    },
    disable(index, row) {
      let bed_no = {
        bed_no: row.bed_no,
      };
      if (row.bed_state === true && row.bed_lock === true) {
        this.$notify({
          type: "error",
          message: "当前设备正在使用，不可弃用",
        });
      } else {
        deleteBedByBedNo(bed_no, this.token, this.user_type)
          .then((res) => {
            if (res.data === true) {
              this.bedList[index] = null;
            } else {
              this.$message("您的权限不足，无法弃用");
            }
          })
          .catch((e) => {
            console.log(e);
            this.$notify({
              type: "info",
              message: "服务器中断稍后重试",
            });
          });
      }
    },
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
      this.bed_no = null;
      getBedList(this.token, this.user_type).then((res) => {
        if (res.data != null) {
          this.bedList = res.data;
        }
      });
    },
    findBed() {
      let bed_no = {
        bed_no: this.bed_no,
      };
      getBedByBedNo(bed_no, this.token, this.user_type).then((res) => {
        if (res.data != null) {
          this.bedList = [res.data];
        } else {
          this.$notify({
            type: "info",
            message: "查询失败",
          });
        }
      });
    },
  },
};
</script>

<style>
</style>