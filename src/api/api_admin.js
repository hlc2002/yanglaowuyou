import { general_get, general_post, get } from "@/api/env";

export const login = (params) => {
    return general_get("/verify/login", params)
}
export const login_password_employee = (params) => {
    return general_get("/verify/login_password_employee", params)
}
export const register_employee = (employee) => {
    return general_post("/verify/register_employee", employee)
}
export const getBedList = (token, user_type) => {
    return get("/employee/getBedList", null, token, user_type)
}
export const getBedByBedNo = (bed_no, token, user_type) => {
    return get("/employee/getBedByBedNo", bed_no, token, user_type)
}
export const getBedByFalseLock = (token, user_type) => {
    return get("/employee/getBedByFalseLock", null, token, user_type)
}
export const getBedByTrueLock = (token, user_type) => {
    return get("/employee/getBedByTrueLock", null, token, user_type)
}
export const getBedByRoomNo = (room_no, token, user_type) => {
    return get("/employee/getBedByRoomNo", room_no, token, user_type)
}
export const getDeviceList = (device_name, token, user_type) => {
    return get("/employee/getDeviceList", device_name, token, user_type)
}
export const getElderList = (token, user_type) => {
    return get("/employee/getElderList", null, token, user_type)
}
export const getElder = (elder_name, token, user_type) => {
    return get("/employee/getElder", elder_name, token, user_type)
}
export const getEmployeeList = (token, user_type) => {
    return get("/employee/getEmployeeList", null, token, user_type)
}
export const getEmployeeByName = (employee_name, token, user_type) => {
    return get("/employee/getEmployeeByName", employee_name, token, user_type)
}
export const getOrderList = (token, user_type) => {
    return get("/employee/getOrderList", null, token, user_type)
}
export const getOrderByElderName = (elder_name, token, user_type) => {
    return get("/employee/getOrder", elder_name, token, user_type)
}
export const resetBedByBedNo = (bed_no, token, user_type) => {
    return get("/employee/resetBedByBedNo", bed_no, token, user_type)
}
export const restartDevice = (device_no, token, user_type) => {
    return get("/employee/restartDevice", device_no, token, user_type)
}
export const stopDevice = (device_no, token, user_type) => {
    return get("/employee/stopDevice", device_no, token, user_type)
}
export const updateEmployeeLevel = (params, token, user_type) => {
    return get("/employee/updateEmployeeLevel", params, token, user_type)
}
export const deleteBedByBedNo = (bed_no, token, user_type) => {
    return get("/employee/delBedByBedNo", bed_no, token, user_type)
}
export const delEmployee = (employee_name, token, user_type) => {
    return get("/employee/delEmployee/", employee_name, token, user_type)
}
export const deleteElderByElderName = (elder_name, token, user_type) => {
    return get("/employee/deleteElder", elder_name, token, user_type)
}  