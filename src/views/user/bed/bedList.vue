<template>
  <div>
    <el-row style="margin-left: 60%">
      <el-select v-model="bed_lock" placeholder="请选择类床位类型">
        <el-option
          v-for="item in options"
          :key="item.index"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        style="margin-left: 10px"
        type="primary"
        size="small"
        @click="findBedListByLock"
        >搜索</el-button
      >
      <el-button
        style="margin-left: 10px"
        type="primary"
        size="small"
        @click="getAllBed"
        >刷新</el-button
      >
    </el-row>
    <el-table :data="show_bedList" style="width: 100%">
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
      <el-table-column label="当前已有预订" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.bed_lock == true ? "已被使用" : "未被使用"
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
          <span style="margin-left: 10px">{{ scope.row.bed_state }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="getMeal(scope.$index, scope.row)"
            >查看详情</el-button
          >
          <el-button
            size="mini"
            type="primary"
            @click="getOrder(scope.$index, scope.row)"
            >预订床位</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="床位可用套餐清单" :visible.sync="showMeal">
      <el-table :data="MealList">
        <el-table-column
          property="meal_id"
          label="套餐编号"
          width="150"
        ></el-table-column>
        <el-table-column
          property="meal_time_count"
          label="套餐可用时长/月"
          width="200"
        ></el-table-column>
        <el-table-column
          property="meal_receipt"
          label="套餐价格/元"
        ></el-table-column>
      </el-table>
    </el-dialog>

    <el-dialog title="订单填写" :visible.sync="addOrder">
      <el-form :model="order">
        <el-form-item label="床位信息" :label-width="formLabelWidth">
          {{
            "养老无忧敬老院：" +
            order.bed_room_no +
            "号房间" +
            order.bed_no +
            "号床位"
          }}
        </el-form-item>
        <el-form-item label="套餐编号" :label-width="formLabelWidth">
          <el-input v-model="order.meal_id" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addOrder = false">取 消</el-button>
        <el-button type="primary" @click="insertOrder">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getAllBed, getOrder, selectBed } from "@/api/api";
import { getMealList } from "@/api/api";
export default {
  name,
  data() {
    return {
      token: "",
      user_type: "",
      isOrder: false,
      bed_lock: null,
      options: [
        {
          index: 1,
          label: "未被使用",
          value: false,
        },
        {
          index: 2,
          label: "已被使用",
          value: true,
        },
      ],
      bedList: [
        {
          bed_room_no: 1,
          bed_no: 1,
          bed_room_type: "待分配床位",
          bed_lock: false,
          bed_elder_id: null,
          bed_state: true,
        },
      ],
      show_bedList: [],
      copy_bedList: [
        {
          bed_room_no: 1,
          bed_no: 1,
          bed_room_type: "待分配床位",
          bed_lock: false,
          bed_elder_id: null,
          bed_state: true,
        },
      ],
      MealList: [],
      order: {
        bed_room_no: "",
        bed_no: "",
        meal_id: "",
      },
      showMeal: false,
      addOrder: false,
      formLabelWidth: "80px",
    };
  },
  mounted() {
    this.token = sessionStorage.getItem("token");
    this.user_type = sessionStorage.getItem("user_type");
    getAllBed(this.token, this.user_type).then((res) => {
      if (res.code === 200) {
        this.bedList = res.data;
        this.show_bedList = this.bedList;
      }
    });
    getOrder(this.token, this.user_type).then((res) => {
      if (res.data != null) {
        this.isOrder = res.data.order_pay_state;
      }
    });
  },
  methods: {
    getMeal(index, row) {
      console.log(index, row);
      this.showMeal = true;
      getMealList(this.token, this.user_type).then((res) => {
        if (res.code === 200) {
          this.MealList = res.data;
        }
      });
    },
    getOrder(index, row) {
      if (
        this.bedList[index].bed_lock === "true" ||
        this.bedList[index].bed_lock === true
      ) {
        this.$notify({
          type: "info",
          message: "该床位已经被预定",
        });
      } else if (this.isOrder == false) {
        this.$notify({
          type: "error",
          message: "您存在未支付订单",
        });
      } else if (this.isOrder == true) {
        this.$notify({
          type: "error",
          message: "您已预订床位，不可重复预订",
        });
      } else {
        this.addOrder = true;
        console.log(index, row);
        this.order.bed_no = this.bedList[index].bed_no;
        this.order.bed_room_no = this.bedList[index].bed_room_no;
      }
    },
    insertOrder() {
      this.addOrder = false;
      let orderData = {
        meal_id: this.order.meal_id,
        bed_no: this.order.bed_no,
      };
      selectBed(orderData, this.token, this.user_type).then((res) => {
        if (res.code === 200) {
          this.$notify({
            type: "success",
            message: "预订成功，待支付",
          });
        } else {
          this.$notify({
            type: "error",
            message: "您还未填写关联老人信息，无法预订本院床位",
          });
        }
      });
    },
    findBedListByLock() {
      this.copy_bedList = this.bedList.forEach((element) => {
        if (element.bed_lock !== this.bed_lock) {
          element = {};
        }
      });
      this.show_bedList = this.copy_bedList;
    },
    getAllBed() {
      this.show_bedList = this.bedList;
      this.bed_lock = null;
    },
  },
};
</script>

<style>
</style>