import {get,post} from "@/api/env"

export const login = (params) => { return get("/Manager/login",params,null)}