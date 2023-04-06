import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import adminIndex from "@/views/admin/index"
import userIndex from "@/views/user/index"
import userBedList from '@/views/user/bed/bedList'
import userElder from '@/views/user/elder/elder'
import userOrder from '@/views/user/order/order'
import userEmployee from '@/views/user/employee/employee'
import userCustomer from '@/views/user/customer/customer'
import userDeviceList from '@/views/user/logistics/deviceList'
import userDevice from '@/views/user/logistics/device'
import userEmployeeInfo from '@/views/user/employee/employeeInfo'
import userHealth from '@/views/user/logistics/health'
import userService from '@/views/user/other/service'
import userLive from '@/views/user/other/live'
import userHapply from '@/views/user/other/happly'
import welcome from "@/views/welcome"
export default new Router({
    routes: [
        {
            path: '/',
            name: '欢迎页',
            component: welcome
        },
        {
            path: '/admin',
            name: '管理员首页',
            component: adminIndex,
            children: [

            ]
        },
        {
            path: '/user',
            name: '用户首页',
            component: userIndex,
            children: [
                {
                    path: '/user/bed',
                    name: '床位',
                    component: userBedList
                },
                {
                    path: '/user/elder',
                    name: '老人信息',
                    component: userElder
                },
                {
                    path: '/user/order',
                    name: '我的订单',
                    component: userOrder
                }, {
                    path: '/user/employee',
                    name: '服务护工',
                    component: userEmployee
                }, {
                    path: '/user/customer',
                    name: '客服咨询',
                    component: userCustomer
                }, {
                    path: '/user/device',
                    name: '医药计划',
                    component: userDevice

                }, {
                    path: '/user/deviceList',
                    name: '医药与用具',
                    component: userDeviceList
                }, {
                    path: '/user/employeeInfo',
                    name: '老人专属护工信息',
                    component: userEmployeeInfo
                }, {
                    path: '/user/health',
                    name: '健康报表',
                    component: userHealth
                }, {
                    path: '/user/service',
                    name: '服务清单',
                    component: userService
                }, {
                    path: '/user/live',
                    name: '养生定制',
                    component: userLive
                }, {
                    path: '/user/happly',
                    name: '文娱活动',
                    component: userHapply
                }
            ]
        }
    ]
})