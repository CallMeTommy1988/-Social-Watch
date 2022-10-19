import { Result, Button } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { regVaild } from "../../api/modules/outer"

const Finish = () => {

    const navigate = useNavigate();
    const [result, setResult] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const content = searchParams.get("content");
    const time = searchParams.get("time");

    useEffect(() => {

        if (!!id && !!time && !!content) {

            regVaild({ id, time, content }).then(res => {
                setResult(res.code === 200 ? 1 : 2);
            }, reject => {
                setResult(2);
            })

        }
        else {
            setResult(2);
        }

    }, [id, time, content])

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