import { Divider, Row, Col, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectorUser } from '../../redux/reducer/user';

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

    return (
        <>
            <header className={cName}>
                <Link to="/login">去登录</Link>
                <Row>
                    <Col span={12}><h1>Subject Watch</h1></Col>
                    <Col span={12} style={{ textAlign: "right", marginTop: "8px" }}>
                        <Dropdown.Button overlay={menu} icon={<UserOutlined />}>{user?.email}</Dropdown.Button>
                    </Col>
                </Row>
                <Divider className="dividers" />
            </header>
        </>
    )

}

export default HeaderView;