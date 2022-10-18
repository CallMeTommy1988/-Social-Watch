
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register"

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/reg",
        element: <Register />
    }
])