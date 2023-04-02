import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import login from "@/views/login";
export default new Router({
    routes:[
        {
            path:'/',
            name:'登录',
            component: login
        },
    ]
})