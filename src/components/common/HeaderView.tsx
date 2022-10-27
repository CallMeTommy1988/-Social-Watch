import { selectorUserToken, selectorUser, fetchCurrentUser } from '../../redux/reducer/user';
import { Divider, Row, Col, message } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const HeaderView = () => {

    const cName = `header header_outer`;
    const dispatch = useDispatch();
    const user = useSelector(selectorUser);
    const token = useSelector(selectorUserToken);




    if (user && user.id && token) {
        console.log("header, user:", user);
        console.log("header, token:", token);
        message.info(`您已经登录过了`);
        return Navigate({ to: "/main", replace: true });
    }

    return (
        <>
            <header className={cName}>
                <Row>
                    <Col span={24}><h1>Subject Watch</h1></Col>
                </Row>
                <Divider className="dividers" />
            </header>
        </>
    )

}

export default HeaderView;