<template>
  <div>
    <div v-if="hasOrer">
      <el-card class="box-card">
        <el-descriptions title="我的订单">
          <el-descriptions-item label="订单编号">{{
            order.order_id
          }}</el-descriptions-item>
          <el-descriptions-item label="订单时间戳">{{
            order.order_time_step
          }}</el-descriptions-item>
          <el-descriptions-item label="订单支付状态">{{
            order.order_pay_state ? "已支付" : "未支付"
          }}</el-descriptions-item>
          <el-descriptions-item label="老人编号">{{
            order.order_elder_id
          }}</el-descriptions-item>
          <el-descriptions-item label="老人姓名">{{
            elder_name
          }}</el-descriptions-item>
          <el-descriptions-item label="下单时间">{{
            order.order_in_time
          }}</el-descriptions-item>
          <el-descriptions-item label="出院时间">{{
            order.order_out_time
          }}</el-descriptions-item>
          <el-descriptions-item label="支付金额">{{
            order.order_receipt + "元人民币"
          }}</el-descriptions-item>
          <el-descriptions-item label="床位信息">{{
            order.order_room_no + "号房间" + order.order_bed_no + "号床位"
          }}</el-descriptions-item>
          <el-descriptions-item
            v-show="this.order.order_pay_state == false"
            label="点击支付"
            ><el-button type="primary" round size="small" @click="pay"
              >支付</el-button
            ></el-descriptions-item
          >
        </el-descriptions>
      </el-card>
    </div>
    <div v-else>
      <el-empty description="您目前并未存在订单"></el-empty>
    </div>
  </div>
</template>

<script>
import { getElder, getOrder, selectBedPayCallBack } from "@/api/api";
export default {
  name,
  data() {
    return {
      token: "",
      user_type: "",
      hasOrer: true,
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
      elder_name: "老人",
    };
  },
  mounted() {
    this.token = sessionStorage.getItem("token");
    this.user_type = sessionStorage.getItem("user_type");
    getOrder(this.token, this.user_type).then((res) => {
      if (res.data != null) {
        this.order = res.data;
        this.hasOrer = true;
      } else {
        this.hasOrer = false;
      }
    });
    let elder_id = {
      elder_id: sessionStorage.getItem("elder_id"),
    };
    setTimeout(function () {
      console.log("init order");
    }, 100);
    getElder(elder_id, this.token, this.user_type).then((res) => {
      if (res.code === 200) {
        this.elder_name = res.data.elder_name;
      }
    });
  },
  methods: {
    pay() {
      let params = {
        bed_no: this.order.order_bed_no,
        elder_id: sessionStorage.getItem("elder_id"),
      };
      selectBedPayCallBack(params, this.token, this.user_type)
        .then((res) => {
          if (res.code === 200 && res.data == true) {
            this.order.order_pay_state = true;
            this.$notify({
              type: "success",
              message: "支付成功",
            });
          } else {
            this.$notify({
              type: "error",
              message: "支付失败，请联系客服咨询相关问题",
            });
          }
        })
        .catch((e) => {
          console.log(e);
          this.$notify({
            type: "error",
            message: "请检测您的网络环境",
          });
        });
    },
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