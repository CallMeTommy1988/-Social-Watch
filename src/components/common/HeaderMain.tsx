import { Divider, Row, Col, Button, Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectorUser, addToken, addUser } from '../../redux/reducer/user';

const HeaderView = () => {
    const cName = `header header_main`;
    const user = useSelector(selectorUser);
    const dispatch = useDispatch();
    const [loginOutDisable, setLoginOutDisable] = useState(false)

    const loginOut = () => {
        setLoginOutDisable(true);

        dispatch(addToken(""));
        dispatch(addUser(undefined));

        setLoginOutDisable(false);
    }

    return (
        <>
            <header className={cName}>
                <Link to="/login">去登录</Link>
                <Row>
                    <Col span={12}><h1>Subject Watch</h1></Col>
                    <Col span={12} style={{ textAlign: "right", marginTop: "8px" }}>
                        <Space>
                            {user?.email} <Button type="link" onClick={loginOut} disabled={loginOutDisable}>退出</Button>
                        </Space>
                    </Col>
                </Row>
                <Divider className="dividers" />
            </header>
        </>
    )

}

export default HeaderView;