import { Outlet } from "react-router";
import HeaderView from "./HeaderView";
import Footer from "./footer";

const OuterIndex = () => {

    return (
        <>
            <div className="main">
                <HeaderView />
                <section className="outer_content">
                    <Outlet />
                </section>
                <Footer />
            </div>
        </>
    )

}

export default OuterIndex;