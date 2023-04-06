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
import welcome from "@/views/welcome"
export default new Router({
    routes: [
        {
            path: '/',
            name,
            component: welcome
        },
        {
            path: '/admin',
            name: '首页',
            component: adminIndex,
            children: [

            ]
        },
        {
            path: '/user',
            name,
            component: userIndex,
            children: [
                {
                    path: '/user/bed',
                    name,
                    component: userBedList
                },
                {
                    path: '/user/elder',
                    name,
                    component: userElder
                },
                {
                    path: '/user/order',
                    name,
                    component: userOrder
                }, {
                    path: '/user/employee',
                    name,
                    component: userEmployee
                }, {
                    path: '/user/customer',
                    name,
                    component: userCustomer
                }, {
                    path: '/user/device',
                    name,
                    component: userDeviceList
                }
            ]
        }
    ]
})