import { IHeader } from "@/api/interface/menu";
import { Divider, Row, Col, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { selectorUser } from "../../redux/reducer/user"
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


const HeaderView = (props: IHeader) => {

    const cName = `header header_${props.mode}`;
    const user = useSelector(selectorUser);
    console.log(user);
    if (!user || !user.id) {
        //清除token
        //清除state
        return <Navigate to="/login" replace={true} />;
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