import http from "../../api/index";
import { internal } from "../config/serviceName";
import { ISubject } from "../../api/interface/subject";

export const getAllSubjectList = () => {
    return http.get<ISubject.Res[]>(`${internal}/subjects/list`);
}

export const addSubject = (params: ISubject.Req) => {
    return http.post<ISubject.Res>(`${internal}/subjects/add`, params);
}

export const deleteSubject = (params: ISubject.Delete) => {
    return http.delete<ISubject.Res>(`${internal}/subjects/list`);
}