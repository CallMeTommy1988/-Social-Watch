
import { Col, message, Row, } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import RegisterStep from "../common/registerStep";

const stepOneInfoPath = "/reg/info";
const stepTwoSuccessPath = "/reg/success";
const stepThreeFinishPath = "/reg/finish";
const keyIndexs = [stepOneInfoPath, stepTwoSuccessPath, stepThreeFinishPath];

export default function RegisterWorkFlow() {

    const [step, setStep] = useState(1);
    const location = useLocation();

    useEffect(() => {

        console.log(location.pathname);
        console.log(keyIndexs);

        const index = keyIndexs.indexOf(location.pathname) + 1;
        if (index <= 0) {
            throw new Error("步骤出错,请确认参数");
        }

        setStep(index);

    }, [location.pathname])

    return (
        <>
            <Row className='registerSection'>
                <Col className="content" xs={24} sm={20} md={18} lg={18}>
                    <RegisterStep className="registerStep" current={step} />
                    <div className="outletContent">
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </>
    );

}