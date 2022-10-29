import http from "../../api/index";
import { internal } from "../config/serviceName";
import { ILogin } from "../../api/interface";

export const fetchCurrentUser = () => {
    return http.get<ILogin.ResUser>(`${internal}/users/current`);
}