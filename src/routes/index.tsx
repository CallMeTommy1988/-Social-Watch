
import { createBrowserRouter } from "react-router-dom";
import Login from "@components/Login"

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    }
])