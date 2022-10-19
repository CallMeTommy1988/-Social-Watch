import { Result, Button } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const Finish = () => {

    const navigate = useNavigate();
    const [result, setResult] = useState(0);
    const { id, time, content } = useParams();

    if (!!id && !!time && !!content) {

        //连接确认参数
        //设置等待返回

    }
    else {
        setResult(2);
    }

    return (
        <>
            {result === 1 && <Result
                status="success"
                title="注册成功"
                subTitle="感谢您的注册"
                extra={[
                    <Button type="primary" onClick={() => { navigate('/login') }} key="console">
                        回到登录
                    </Button>
                ]}
            />}

            {result === 2 && <Result
                status="error"
                title="参数实效或错误"
                subTitle="请重新发送邮件，您可以在登录试试"
                extra={[
                    <Button type="primary" onClick={() => { navigate('/login') }} key="console">
                        回到登录
                    </Button>
                ]}
            />}
        </>
    )
}

export default Finish