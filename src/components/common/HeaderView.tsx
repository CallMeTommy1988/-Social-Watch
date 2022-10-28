import { selectorUserToken } from '../../redux/reducer/user';
import { Divider, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HeaderView = () => {

    
    const token = useSelector(selectorUserToken);
    const cName = `header header_outer`;
    const naviagete = useNavigate();

    if (!!token) {
        console.log("有token，跳转到 main");
        setTimeout(() => {
            naviagete("/main", { replace: true });    
        }, 100);
        
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