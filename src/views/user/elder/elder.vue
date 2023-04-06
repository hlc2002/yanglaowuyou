<template>
  <div>
    <el-descriptions v-show="showElder" title="老人信息" direction="vertical" :column="4" border>
        <el-descriptions-item label="老人姓名">{{elder.elder_name}}</el-descriptions-item>
        <el-descriptions-item label="老人编号">{{ elder.elder_id}}</el-descriptions-item>
        <el-descriptions-item label="老人赡养人家庭住址">{{elder.elder_home_address}}</el-descriptions-item>
        <el-descriptions-item label="赡养人编号">{{elder.elder_son_id}}</el-descriptions-item>
        <el-descriptions-item label="本院居住床位">{{ bed_no !=""? bed_room_no+"号房间"+bed_no+"号床位":"暂无位置" }}</el-descriptions-item>
        <el-descriptions-item label="负责护工编号">{{ employee_id != ""?employee_id :"暂无护工" }}</el-descriptions-item>
        <el-descriptions-item label="医养健康计划情况">状况良好</el-descriptions-item>
        <el-descriptions-item label="近期营养均衡情况">摄食情况良好</el-descriptions-item>
        <el-descriptions-item label="心理放松程度">一般</el-descriptions-item>
        <el-descriptions-item label="运动保持情况">良好</el-descriptions-item>
        <el-descriptions-item label="参与院内娱乐活动情况">经常参与文娱活动</el-descriptions-item>
        <el-descriptions-item label="赡养人联系情况">建议赡养人时常陪伴</el-descriptions-item>
    </el-descriptions>
    <el-dialog title="填写关联老人信息" :visible.sync="showAddElder">
        <el-form :model="elder">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="elder.elder_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
              <el-input v-model="elder.elder_sex" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
              <el-input v-model="elder.elder_age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="家庭住址" :label-width="formLabelWidth">
              <el-input v-model="elder.elder_home_address" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addElder">确 定</el-button>
        </div>
  </el-dialog>
  </div>
</template>

<script>
import { getBed, getElder,saveElder } from '@/api/api'

export default {
  name,
  data() {
    return {
      token:"",
      user_type:"",
      showElder: false,
      showAddElder:false,
      formLabelWidth:'80px',
      elder:{
        elder_id:"",
        elder_name:'',
        elder_age:"",
        elder_sex:"",
        elder_home_address:"",
        elser_son_id:""
      },
      bed_no:"",
      bed_room_no:"",
      employee_id:""
    }
  },
  mounted(){
      this.token = sessionStorage.getItem("token")
      this.user_type = sessionStorage.getItem("user_type")
      let elder_id = sessionStorage.getItem("elder_id")
      if(elder_id  === null || elder_id == ""){
        this.$message('您未关联老人，需要先进行老人信息的登记！')
        this.showAddElder = true
        this.showElder = false
      }else{
        let params ={
          elder_id: elder_id
        }
        getElder(params,this.token,this.user_type).then(res =>{
            if(res.code === 200){
              this.elder = res.data
              this.showElder = true
            }
        })
        getBed(params,this.token,this.user_type).then(res =>{
          if(res.code === 200){
             this.bed_no = res.data.bed_no
             this.bed_room_no = res.data.bed_room_no
          }
        })
      }
  },
  methods:{
      addElder(){
        let elderData = {
          elder_name: this.elder.elder_name,
          elder_sex: this.elder.elder_sex,
          elder_age: this.elder.elder_age,
          elder_home_address: this.elder.elder_home_address
        }
        saveElder(elderData,this.token,this.user_type).then(res =>{
          if(res.code === 200){
              this.elder = res.data
              sessionStorage.setItem("elder_id",this.elder.elder_id)
              this.showAddElder = false
              this.showElder = true
          }
        })
      }
  }
}
</script>

<style></style>