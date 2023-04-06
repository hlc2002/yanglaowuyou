import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import axios from "axios"
import elementUI from 'element-ui'
import * as echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(elementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
