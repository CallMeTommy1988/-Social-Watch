import http from "..";
import { outer } from "../config/serviceName";
import { ILogin, IRegister } from "@api/interface";

export const login = (params: ILogin.ReqLoginForm) => {
    return http.post<ILogin.ResLogin>(`${outer}/login`, params);
}

export const reg = (params: IRegister.ReqRegisterForm) => {
    return http.post(`${outer}/reg`, params);
}

// 是否需要限制访问?
export const captcha = () => {
    return http.get(`${outer}/captcha`);
}