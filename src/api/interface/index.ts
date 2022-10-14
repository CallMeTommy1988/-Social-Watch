import { user } from "@api/interface/user"

// * 请求响应参数(不包含data)
export interface Result {
	code: number;
	msg: string;
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
	data?: T;
}

// * 分页响应参数
export interface ResPage<T> {
	datalist: T[];
	pageNum: number;
	pageSize: number;
	total: number;
}

// * 分页请求参数
export interface ReqPage {
	pageNum: number;
	pageSize: number;
}

// * 登录
export namespace ILogin {
	export interface ReqLoginForm {
		email: string;
		password: string;
        captcha: string
	}
	export interface ResLogin {
		token: string;
	}
	export interface ResUser {
		user: user;
	}
	
}

export namespace IRegister {
    export interface ReqRegisterForm {
        email: string;
        password: string;
        captcha: string;
    }
}
