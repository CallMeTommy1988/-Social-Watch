import http from "../../api/index";
import { internal } from "../config/serviceName";
import { ILogin } from "../../api/interface";

export const fetchCurrentUser = () => {
    return http.post<ILogin.ResUser>(`${internal}/users/current`);
}