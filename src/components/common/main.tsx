import { Outlet } from "react-router";
import HeaderView from "./HeaderView";
import Footer from "./footer";
import MainMenu from "./menu";
import { Row, Col } from "antd";

const OuterIndex = () => {

    return (
        <>
            <div className="main">
                <HeaderView mode="main" />
                <section className="main_content">
                    <Row>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                            <MainMenu />
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
                            <section className="main_content">
                                <Outlet />
                            </section>
                        </Col>
                    </Row>
                </section>
                <Footer />
            </div>
        </>
    )

}

export default OuterIndex;