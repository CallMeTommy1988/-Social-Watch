import { Col, Row, Button, Form, Input, Space, message } from 'antd';
import md5 from "js-md5"
import { useNavigate } from "react-router"
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/reducer/user';
import { useEffect, useState } from 'react';
import * as outerService from "api/modules/outer"
import { ILogin } from '@/api/interface';


export default function Login() {

    const [captchaContent, setCaptchaContent] = useState("");
    const [formEnable, setFormEnable] = useState<boolean>(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getCaptcha = () => {
        outerService.captcha().then(res => {
            if (res.code === 200) {
                const svgContent = res.data as string;
                setCaptchaContent(svgContent);
            }
        });
    }

    const loginIn = async (loginForm: ILogin.ReqLoginForm) => {

        try {

            setFormEnable(false);

            //md5加密
            console.log(loginForm.passwd);
            loginForm.passwd = md5(loginForm.passwd);
            console.log(loginForm.passwd);

            //提交
            const res = await outerService.login(loginForm);
            if (res.code === 200) {
                const token = res.data?.token;
                console.log(res);
                console.log(res.data)
                console.log(token);
                dispatch(setToken(token || ""));
                message.success("登录成功!");
                setTimeout(() => {
                    navigate("/main");
                }, 1000);
            }
            else {
                getCaptcha();
                message.error(res.msg);
            }

        }
        finally {
            setFormEnable(true);
        }

    }

    useEffect(() => {
        getCaptcha();
    }, []);

    return (
        <>
            <Row className="outerBody">
                <Col className="loginSection">
                    <h2>登录</h2>
                    <section className="loginForm">
                        <Form
                            name="basic"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 20 }}
                            layout="horizontal"
                            onFinish={loginIn}
                            disabled={!formEnable}
                        >
                            <Form.Item
                                label="邮箱"
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: '请输入正确的邮箱',
                                    },
                                    {
                                        required: true,
                                        message: '请输入正确的邮箱',
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="密码"
                                name="passwd"
                                rules={[{ required: true, message: '请输入密码!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="验证码"
                                name="captcha"
                                rules={[{ required: true, message: '请输入验证码' }]}
                                extra="我要确认是你不是机器人."
                            >
                                <Row gutter={8}>
                                    <Col span={12}>
                                        <Input />
                                    </Col>
                                    <Col span={12}>
                                        <section onClick={() => { getCaptcha(); }} dangerouslySetInnerHTML={{ __html: captchaContent }}></section>
                                    </Col>
                                </Row>
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
                                <Space>
                                    <Button type="primary" htmlType="submit">
                                        登录
                                    </Button>
                                    <Button type="default" onClick={() => {
                                        navigate("/reg");
                                    }}>
                                        注册
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </section>
                </Col>
            </Row>
        </>
    );

}