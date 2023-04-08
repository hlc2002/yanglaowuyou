<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-card :span="6"
          ><div>
            <el-image :src="src"></el-image> 老年人公园相伴唱歌
          </div></el-card
        >
        <el-card :span="6"
          ><div><el-image :src="src2"></el-image> 老年人遛鸟形象</div></el-card
        >
        <el-card :span="6"
          ><div><el-image :src="src3"></el-image> 老年人舞扇</div></el-card
        >
        <el-card :span="6"
          ><div><el-image :src="src8"></el-image> 老年人旅游</div></el-card
        >
      </el-row>
      <el-row :gutter="20">
        <el-card :span="6"
          ><div>
            <el-image :src="src4"></el-image> 老年人运动羽毛球
          </div></el-card
        >
        <el-card :span="6"
          ><div><el-image :src="src5"></el-image> 老人运动图片</div></el-card
        >
        <el-card :span="6"
          ><div><el-image :src="src6"></el-image> 老人跳舞图片</div></el-card
        >
        <el-card :span="6"
          ><div><el-image :src="src9"></el-image> 老年人遛弯</div></el-card
        >
          ><el-container>
            <el-main>
              <el-row :gutter="20">
                <el-card :span="6" class="box-card"
                  ><div>
                    <el-image :src="src2"></el-image>
                    <el-image :src="src"></el-image> 老年人公园相伴唱歌
                  </div></el-card
                >
                <el-card :span="6"
                  ><div>
                    <el-image :src="src2"></el-image> 老年人遛鸟形象
                  </div></el-card
                >
                <el-card :span="6"
                  ><div>
                    <el-image :src="src3"></el-image> 老年人舞扇
                  </div></el-card
                >
                <el-card :span="6"
                  ><div>
                    <el-image :src="src8"></el-image> 老年人旅游
                  </div></el-card
                >
              </el-row>
              <el-row :gutter="20">
                <el-card :span="6"
                  ><div>
                    <el-image :src="src4"></el-image> 老年人运动羽毛球
                  </div></el-card
                >
                <el-card :span="6"
                  ><div>
                    <el-image :src="src5"></el-image> 老人运动图片
                  </div></el-card
                >
                <el-card :span="6"
                  ><div>
                    <el-image :src="src6"></el-image> 老人跳舞图片
                  </div></el-card
                >
                <el-card :span="6"
                  ><div>
                    <el-image :src="src9"></el-image> 老年人遛弯
                  </div></el-card
                >
              </el-row>
            </el-main>
          </el-container>
        <el-card :span="6" class="box-card"
          ><div><el-image :src="src3"></el-image></div
        ></el-card>
        <el-card :span="6" class="box-card"
          ><div><el-image :src="src8"></el-image></div
        ></el-card>
      </el-row>
      <el-row :gutter="20">
        <el-card :span="6" class="box-card"
          ><div>
            <el-image :src="src4"></el-image></div
        ></el-card>
        <el-card :span="6" class="box-card"
          ><div><el-image :src="src5"></el-image></div
        ></el-card>
        <el-card :span="6" class="box-card"
          ><div><el-image :src="src6"></el-image></div
        ></el-card>
        <el-card :span="6" class="box-card"
          ><div><el-image :src="src9"></el-image></div
        ></el-card>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name,
  data() {
    return {
      src: 'https://img95.699pic.com/photo/50170/0436.jpg_wh860.jpg',
      src2: 'https://img95.699pic.com/photo/50171/4895.jpg_wh300.jpg!/fh/300/quality/90',
      src3: 'https://img95.699pic.com/photo/50099/3584.jpg_wh300.jpg!/fh/300/quality/90',
      src4: 'https://img95.699pic.com/photo/50099/5354.jpg_wh300.jpg!/fh/300/quality/90',
      src5: 'https://img95.699pic.com/photo/50136/1865.jpg_wh300.jpg',
      src6: 'https://img95.699pic.com/photo/50171/4975.jpg_wh300.jpg',
      src8: 'https://img95.699pic.com/photo/50171/4989.jpg_wh300.jpg',
      src9: 'https://ts1.cn.mm.bing.net/th/id/R-C.48d640b03850357c0abe53fae869eade?rik=j4FJfBgQtPInUw&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50140%2f8312.jpg_wh300.jpg&ehk=oAA0mIFWUR9biC30TEudrAn2Ap6kEyTNe%2fZxQZDrK9o%3d&risl=&pid=ImgRaw&r=0',
      src10: ''
    }
  }
}
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
