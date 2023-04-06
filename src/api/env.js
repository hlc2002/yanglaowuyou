import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:9001"

const post = (url, params, token, user_type) => {
    return axios({
        method: "post",
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'token': token,
            'user_type': user_type
        },
        data: params,

    }).then(res => res.data);
}
const general_post = (url, params) => {
    return axios({
        method: "post",
        url: url,
        headers: {
            'Content-Type': 'application/json',
        },
        data: params,

    }).then(res => res.data);
}
const get = (url, params, token, user_type) => {
    return axios({
        method: "get",
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'token': token,
            'user_type': user_type
        },
        params: params
    }).then(res => res.data);
}
const general_get = (url, params) => {
    return axios({
        method: "get",
        url: url,
        headers: {
            'Content-Type': 'application/json',
        },
        params: params
    }).then(res => res.data);
}
export {
    post, get, general_post, general_get
}