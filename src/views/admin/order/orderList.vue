<template>
  <div>
    <div v-if="hasOrer">
      <el-col v-for="(item, index) in orderList" :key="index">
        <div>
          <el-card class="box-card">
            <el-descriptions>
              <el-descriptions-item label="订单编号">
                {{ item.order_id }}
              </el-descriptions-item>
              <el-descriptions-item label="订单时间戳">{{
                item.order_time_step
              }}</el-descriptions-item>
              <el-descriptions-item label="订单支付状态">{{
                item.order_pay_state ? "已支付" : "未支付"
              }}</el-descriptions-item>
              <el-descriptions-item label="老人编号">{{
                item.order_elder_id
              }}</el-descriptions-item>
              <el-descriptions-item label="下单时间">{{
                item.order_in_time
              }}</el-descriptions-item>
              <el-descriptions-item label="出院时间">{{
                item.order_out_time
              }}</el-descriptions-item>
              <el-descriptions-item label="支付金额">{{
                item.order_receipt + "元人民币"
              }}</el-descriptions-item>
              <el-descriptions-item label="床位信息">{{
                item.order_room_no + "号房间" + item.order_bed_no + "号床位"
              }}</el-descriptions-item>
            </el-descriptions>
          </el-card>
        </div>
      </el-col>
    </div>
    <div v-else>
      <el-empty description="您目前并未存在订单"></el-empty>
    </div>
  </div>
</template>

<script>
import { getOrderList } from "@/api/api_admin";
export default {
  name,
  data() {
    return {
      token: "",
      user_type: "",
      hasOrer: true,
      orderList: [],
      order: {
        order_id: "1",
        order_time_step: "",
        order_pay_state: false,
        order_elder_id: "",
        order_in_time: "",
        order_out_time: "",
        order_receipt: "",
        order_room_no: "",
        order_bed_no: "",
        order_meal_id: "",
      },
    };
  },
  mounted() {
    this.token = sessionStorage.getItem("token");
    this.user_type = sessionStorage.getItem("user_type");
    getOrderList(this.token, this.user_type).then((res) => {
      if (res.data != null) {
        this.orderList = res.data;
        this.hasOrer = true;
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