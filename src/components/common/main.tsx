import { Outlet } from "react-router";
import HeaderMain from "./HeaderMain";
import Footer from "./footer";
import MainMenu from "./menu";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { fetchCurrentUser, selectorUser, selectorUserToken } from "../../redux/reducer/user"

const OuterIndex = () => {

    const user = useSelector(selectorUser);
    const token = useSelector(selectorUserToken);
    const dispatch = useDispatch();

    const getCurUser = useCallback(() => {
        console.log(getCurUser);
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    useEffect(() => {
        getCurUser();
    }, [token, getCurUser])

    return (
        <>
            <div className="main">
                {<>
                    <HeaderMain />
                    <section style={{ width: `100%`, padding: "20px" }}>
                        <Row>
                            <Col xs={24} sm={24} md={6} lg={5} xl={4} xxl={4} style={{ marginBottom: "20px" }}>
                                <MainMenu />
                            </Col>
                            <Col xs={24} sm={24} md={18} lg={19} xl={20} xxl={20}>
                                <section className="main_content">
                                    <Outlet />
                                </section>
                            </Col>
                        </Row>
                    </section>
                    <Footer />
                </>}
            </div>
        </>
    )

}

export default OuterIndex;