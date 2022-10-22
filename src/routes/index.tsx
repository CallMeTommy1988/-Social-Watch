
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import RegisterForm from "../components/Register/register.form"
import RegisterFinishForm from "../components/Register/finish"
import Forget from "../components/Forget";
import ForgetFinish from "../components/Forget/finish";
import OuterIndex from "../components/common/outer";
import SuccessCommon from "../components/common/success";

export const router = createBrowserRouter([
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
    }
])