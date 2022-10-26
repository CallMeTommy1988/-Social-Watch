
import { createBrowserRouter, useRoutes } from "react-router-dom";
import Login from "../components/Login";
import RegisterForm from "../components/Register/register.form"
import RegisterFinishForm from "../components/Register/finish"
import Forget from "../components/Forget";
import ForgetFinish from "../components/Forget/finish";
import OuterIndex from "../components/common/outer";
import MainIndex from "../components/common/main";
import SuccessCommon from "../components/common/success";
import About from "../components/about";


const rootRouter = [
    {
        path: "/",
        element: <OuterIndex />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'reg',
                element: <RegisterForm />
            },
            {
                path: 'reg/finish',
                element: <RegisterFinishForm />
            },
            {
                path: 'forget',
                element: <Forget />
            },
            {
                path: 'forget/finish',
                element: <ForgetFinish />
            },
            {
                path: 'result/success',
                element: <SuccessCommon />
            },
        ]
    },
    {
        path: "/",
        element: <MainIndex />,
        children: [
            {
                path: "main",
                element: <About />
            }
        ]
    }
]

//export const router = createBrowserRouter(routes)

const Router = () => {
    const routes = useRoutes(rootRouter);
    return routes;
};

export default Router;
