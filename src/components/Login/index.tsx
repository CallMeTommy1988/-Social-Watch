import { Col, Row, Button, Form, Input, Space, message, Divider } from 'antd';
import md5 from "js-md5"
import { useNavigate, Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/reducer/user';
import { useState } from 'react';
import * as outerService from "api/modules/outer"
import { ILogin } from '@/api/interface';
import Captcha from '../common/captcha';


export default function Login() {

    const [formEnable, setFormEnable] = useState<boolean>(true);
    const [timespan, setTimespan] = useState<number>((new Date()).getTime());
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginIn = async (loginForm: ILogin.ReqLoginForm) => {

        try {

            setFormEnable(false);
            loginForm.passwd = md5(loginForm.passwd);

            outerService.login(loginForm).then(res => {
                const token = res.data?.token;
                dispatch(setToken(token || ""));
                message.success("登录成功!");
                setTimeout(() => {
                    navigate("/main");
                }, 1000);
            }, reject => {
                setTimespan((new Date()).getTime());
                //loginForm.captcha = "";
            })

        }
        catch (ex) {
            console.error(ex);
        }
        finally {
            setFormEnable(true);
        }

    }

    return (
        <>
            <section className="loginForm outerForm">

                <h1>登录</h1>

                <Form
                    name="basic"
                    layout="vertical"
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
                                <Captcha reflash={timespan} />
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                            <Link to="/forget">忘记密码?</Link>
                        </Space>
                    </Form.Item>
                    <Divider />
                    <p>
                        还没有账号? 点击<Link to="/reg">注册</Link>
                    </p>
                </Form>
            </section>
        </>
    );

}