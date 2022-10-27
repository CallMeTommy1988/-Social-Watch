import { Divider, Row, Col, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCurrentUser, selectorUser } from "../../redux/reducer/user"
import { Navigate } from "react-router";

const menu = (
    <Menu
        items={[
            {
                label: '1st menu item',
                key: '1',
                icon: <UserOutlined />,
            },
            {
                label: '2nd menu item',
                key: '2',
                icon: <UserOutlined />,
            },
            {
                label: '3rd menu item',
                key: '3',
                icon: <UserOutlined />,
            },
        ]}
    />
);


const HeaderView = () => {

    const cName = `header header_main`;
    const user = useSelector(selectorUser);
    const dispatch = useDispatch();

    const getCurUser = () => {
        dispatch(fetchCurrentUser);
    };

    if (!user || !user.id) {
        getCurUser();
    }



    return (
        <>
            <header className={cName}>
                <Row>
                    <Col span={12}><h1>Subject Watch</h1></Col>
                    <Col span={12} style={{ textAlign: "right", marginTop: "8px" }}>
                        <Dropdown.Button overlay={menu} icon={<UserOutlined />}></Dropdown.Button>
                    </Col>
                </Row>
                <Divider className="dividers" />
            </header>
        </>
    )

}

export default HeaderView;