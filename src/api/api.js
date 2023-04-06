import { general_get, general_post, get, post } from "@/api/env"

export const login = (params) => {
    return general_get("/verify/login", params)
}

export const login_password_elderSon = (params) => {
    return general_get("/verify/login_password_elderSon", params)
}
export const register_elderSon = (elderSon) => {
    return general_post("verify/register_elderSon", elderSon)
}
export const getAllBed = (token, user_type) => {
    return get("/elderSon/getAllBed", null, token, user_type)
}
export const getBed = (elder_id, token, user_type) => {
    return get("/elderSon/getBed", elder_id, token, user_type);
}
export const getMealList = (token, user_type) => {
    return get("/elderSon/getMealList", null, token, user_type)
}
export const getOrder = (token, user_type) => {
    return get("/elderSon/getOrder", null, token, user_type)
}

export const getNormalEmployeeList = (token, user_type) => {
    return get("/elderSon/getNormalEmployeeList", null, token, user_type)
}

export const getEmployeeByEmployeeName = (employeeName, token, user_type) => {
    return get("/elderSon/getEmployeeByEmployeeName", employeeName, token, user_type)
}
export const selectBed = (orderData, token, user_type) => {
    return post("/elderSon/selectBed", orderData, token, user_type)
}
export const selectBedPayCallBack = (bed_no, token, user_type) => {
    return get("/elderSon/selectBedPayCallBack", bed_no, token, user_type)
}
export const getDeviceList = (device_name, token, user_type) => {
    return get("/elderSon/getDeviceList", device_name, token, user_type)
}
export const getElder = (elder_id, token, user_type) => {
    return get("/elderSon/getElder", elder_id, token, user_type);
}
export const saveElder = (elderData, token, user_type) => {
    return post("/elderSon/saveElder", elderData, token, user_type)
}
export const updateElder = (elderData, token, user_type) => {
    return post("/elderSon/updateElder", elderData, token, user_type)
}
export const deleteElder = (elder_name, token, user_type) => {
    return get("/elderSon/deleteElder", elder_name, token, user_type)
}

