<template>
  <div>
    <el-container>
      <el-main>
        <el-table :data="tableData" border>
          <!-- 修改 -->
          <el-table-column prop="ServiceType" label="服务类型" width="120" />
          <el-table-column prop="ServiceName" label="服务名称" width="121" />
          <el-table-column prop="ServiceItem" label="服务项目" width="200" />
          <el-table-column prop="price" label="价格" width="123" />
          <el-table-column prop="Servicecontent" label="服务内容" width="250" />
          <el-table-column
            prop="ApplicablePopulation"
            label="适用人群"
            width="250"
          />
        </el-table>
      </el-main>
    </el-container>
    <el-empty description="本院暂未开放服务清单"></el-empty>
  </div>
</template>

<script>
export default {
  name,
  data() {
    const tableData = [
      {
        ServiceType: '餐饮服务',
        ServiceName: '早餐',
        ServiceItem: '包子、豆浆、油条',
        price: '5元/人',
        Servicecontent: '提供每日早餐',
        ApplicablePopulation: '所有老人'
      },
      {
        ServiceType: '餐饮服务',
        ServiceName: '午餐',
        ServiceItem: '米饭、青菜、肉类',
        price: '15元/人',
        Servicecontent: '提供每日午餐',
        ApplicablePopulation: '所有老人'
      },
      {
        ServiceType: '餐饮服务',
        ServiceName: '晚餐',
        ServiceItem: '面条、炒菜、汤条',
        price: '10元/人',
        Servicecontent: '提供每日晚餐',
        ApplicablePopulation: '所有老人'
      },
      {
        ServiceType: '健康服务',
        ServiceName: '健康体检',
        ServiceItem: '血压测量、心电图、化验',
        price: '200元/次',
        Servicecontent: '定期体检',
        ApplicablePopulation: '所有老人'
      },
      {
        ServiceType: '健康服务',
        ServiceName: '护理服务',
        ServiceItem: '护理员全天看护',
        price: '800元/月',
        Servicecontent: '包括清洁、换药等',
        ApplicablePopulation: '行动不便、生活不能自理的老人'
      },
      {
        ServiceType: '娱乐服务',
        ServiceName: '活动室开放时间',
        ServiceItem: '10:00-18:00',
        price: '-',
        Servicecontent: '提供娱乐活动和社交交流场所',

        ApplicablePopulation: '所有老人'
      },
      {
        ServiceType: '娱乐服务',
        ServiceName: '活动组织',
        ServiceItem: '每周1-2次',
        price: '-',
        Servicecontent: '安排丰富多彩的文艺娱乐活动',
        ApplicablePopulation: '所有老人'
      },
      {
        ServiceType: '清洁服务',
        ServiceName: '房间清洁',
        ServiceItem: '隔二天保洁',
        price: '100元/月',
        Servicecontent: '维护老人居住环境卫生',
        ApplicablePopulation: '所有老人'
      },
      {
        ServiceType: '管理服务',
        ServiceName: '入住管理',
        ServiceItem: '入住手续及维护',
        price: '1000元',
        Servicecontent: '管理入住程度',
        ApplicablePopulation: '所有老人'
      }
    ]

    return {
      tableData
    }
  }
}
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-button {
  background: linear-gradient(120deg, 0%, #8ec5fc 100%);
}
</style>
