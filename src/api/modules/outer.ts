import http from "..";
import { outer } from "../config/serviceName";
import { ICommon } from "../../api/interface/common";
import { ILogin, IRegister } from "../interface";

export const login = (params: ILogin.ReqLoginForm) => {
    return http.post<ILogin.ResLogin>(`${outer}/login`, params);
}

export const reg = (params: IRegister.ReqRegisterForm) => {
    return http.post(`${outer}/reg`, params);
}

export const regVaild = (params: ICommon.DecryptionTimeSpan) => {
    return http.get(`${outer}/reg/finish`, params)
}

// 是否需要限制访问?
// 目前直接返回链接就可以了
export const captcha = () => {
    return http.get<string>(`${outer}/captcha`);
}