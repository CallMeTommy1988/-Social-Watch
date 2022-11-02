import {
    Routes,
    Route
} from "react-router-dom";

import Login from "../components/Login";
import RegisterForm from "../components/Register/register.form"
import RegisterFinishForm from "../components/Register/finish"
import Forget from "../components/Forget";
import ForgetFinish from "../components/Forget/finish";
import OuterIndex from "../components/common/outer";
import MainIndex from "../components/common/main";
import SuccessCommon from "../components/common/success";
import About from "../components/about";
import WatchList from "../components/subject";
import WatchAdd from "../components/subject/add";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<OuterIndex />}>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reg" element={<RegisterForm />} />
                <Route path="/reg/finish" element={<RegisterFinishForm />} />
                <Route path="/forget" element={<Forget />} />
                <Route path="forget/finish" element={<ForgetFinish />} />
                <Route path="result/success" element={<SuccessCommon />} />
            </Route>
            <Route path="/" element={<MainIndex />}>
                <Route index element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/watch" element={<WatchList />} />
                <Route path="/watch/add" element={<WatchAdd />} />
            </Route>
        </Routes>
    );
}

//export default Router;
