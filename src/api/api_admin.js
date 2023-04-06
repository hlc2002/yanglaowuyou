import { general_get, general_post } from "@/api/env";

export const login = (params) => {
    return general_get("/verify/login", params)
}
export const login_password_employee = (params) => {
    return general_get("/verify/login_password_elderSon", params)
}
export const register_employee = (employee) => {
    return general_post("/verify/register_elderSon", employee)
}
export const getBedList = () => {
    return general_get("/employee/getBedList")
}
export const getBedByBedNo = (bed_no) => {
    return general_get("/employee/getBedByBedNo", bed_no)
}
export const getBedByFalseLock = () => {
    return general_get("/employee/getBedByFalseLock")
}
export const getBedByTrueLock = () => {
    return general_get("/employee/getBedByTrueLock")
}
export const getBedByRoomNo = (room_no) => {
    return general_get("/employee/getBedByRoomNo", room_no)
}
export const getDeviceList = (device_name) => {
    return general_get("/employee/getDeviceList", device_name)
}
export const getElderList = () => {
    return general_get("/employee/getElderList")
}
export const getElder = (elder_name) => {
    return general_get("/employee/getElder", elder_name)
}
export const getEmployeeList = () => {
    return general_get("/employee/getEmployeeList")
}
export const getEmployeeByName = (employee_name) => {
    return general_get("/employee/getEmployeeByName", employee_name)
}
export const getOrderList = () => {
    return general_get("/employee/getOrderList")
}
export const getOrderByElderName = (elder_name) => {
    return general_get("/employee/getOrder", elder_name)
}
export const resetBedByBedNo = (bed_no) => {
    return general_get("/employee/resetBedByBedNo", bed_no)
}
export const restartDevice = (device_no) => {
    return general_get("/employee/restartDevice", device_no)
}
export const stopDevice = (device_no) => {
    return general_get("/employee/stopDevice", device_no)
}
export const updateEmployeeLevel = (params) => {
    return general_get("/employee/updateEmployeeLevel", params)
}
export const deleteBedByBedNo = (bed_no) => {
    return general_get("/employee/delBedByBedNo", bed_no)
}
export const delEmployee = (employee_name) => {
    return general_get("/employee/delEmployee/", employee_name)
}
export const deleteElderByElderName = (elder_name) => {
    return general_get("/employee/deleteElder", elder_name)
}  