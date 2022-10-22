import { Result, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {

    const navigate = useNavigate();

    const Stateparams = useLocation()
    const { title, subTitle } = Stateparams.state

    return (
        <>
            <Result
                status="success"
                title={title || "成功"}
                subTitle={subTitle}
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