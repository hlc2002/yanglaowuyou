import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:9001"
// 通用请求方法
const post= (url, params,token) => {
    return axios({
        method: "post",
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
        data: params,

    }).then(res => res.data);
}
const get = (url,params,token) => {
    return axios({
        method:"get",
        url:url,
        headers:{
            'Content-Type': 'application/json',
            'token':token
        },
        params: params
    }).then(res => res.data);
}

export {
    post,get
}