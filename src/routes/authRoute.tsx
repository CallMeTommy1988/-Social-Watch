import { useLocation, Navigate } from "react-router";
import whiteList from "./config";
import { selectorUserToken } from "../redux/reducer/user"
import { useSelector } from "react-redux";
import { message } from "antd";

const AuthRouter = (props: { children: JSX.Element }) => {

    const { pathname } = useLocation();
    if (process.env.NODE_ENV === "development") {
        console.log("路由信息")
        console.log(pathname);
    }

    const token = useSelector(selectorUserToken);
    if (whiteList.includes(pathname)) {
        return props.children;
    }

    if (!!token)
        return props.children;
    else {
        message.error("没有找到登录信息,跳转到登录界面")
        return <Navigate to="/login" replace={true} />;
    }

};

export default AuthRouter;