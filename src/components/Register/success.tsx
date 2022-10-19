import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Success = () => {

    const navigate = useNavigate();

    return (
        <>
            <Result
                status="success"
                title="注册成功，请到邮件检查注册邮件"
                subTitle="如果没有收到邮件，请登录或者忘记密码"
                extra={[
                    <Button type="primary" onClick={() => { navigate("/login") }} key="console">
                        回到登录
                    </Button>
                ]}
            />
        </>
    )
}

export default Success