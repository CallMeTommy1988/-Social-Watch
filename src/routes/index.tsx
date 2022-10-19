
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../components/Login";
import RegisterWorkFlow from "../components/Register"
import RegisterForm from "../components/Register/register.form"
import RegisterSuccessForm from "../components/Register/success";
import RegisterFinishForm from "../components/Register/"

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/reg",
        element: <RegisterWorkFlow />,
        children: [
            {
                path: '',
                element: <Navigate to="info" />
            },
            {
                path: 'info',
                element: <RegisterForm />
            },
            {
                path: 'success',
                element: <RegisterSuccessForm />
            },
            {
                path: 'finish',
                element: <RegisterFinishForm />
            }
        ]
    }
])