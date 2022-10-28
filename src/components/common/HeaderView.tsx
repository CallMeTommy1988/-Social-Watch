import { selectorUserToken } from '../../redux/reducer/user';
import { Divider, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const HeaderView = () => {

    const cName = `header header_outer`;
    const token = useSelector(selectorUserToken);

    if (!!token) {
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