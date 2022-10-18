import { IRegister } from '@/api/interface';
import { Col, Row, Button, Form, Input, Space, message } from 'antd';
import RegisterStep from "../common/registerStep";
import md5 from "js-md5";
import { useEffect, useState } from 'react';
import * as outerService from "api/modules/outer"
import { useNavigate } from 'react-router';


export default function Register() {

    const navigate = useNavigate();
    const [formEnable, setFormEnable] = useState<boolean>(true);
    const [captchaContent, setCaptchaContent] = useState("");

    const getCaptcha = () => {
        outerService.captcha().then(res => {
            if (res.code === 200) {
                const svgContent = res.data as string;
                setCaptchaContent(svgContent);
            }
        });
    }

    const registerForm = async (registerForm: IRegister.ReqRegisterForm) => {

        try {
            setFormEnable(true);
            registerForm.passwd = md5(registerForm.passwd);

            const res = await outerService.reg(registerForm);
            if (res.code === 200) {
                //注册成功

            }
            else {
                message.error(res.msg);
                getCaptcha();
            }
        } finally {
            setFormEnable(false);
        }

    }

    useEffect(() => {
        getCaptcha();
    }, []);

    return (
        <>
            <div className=''>
                <RegisterStep current={1} />
                <div>
                    <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        layout="horizontal"
                        onFinish={registerForm}
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
                            label="重复密码"
                            name="repeatPasswd"
                            rules={[
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('passwd') === value) {
                                            return Promise.resolve()
                                        }
                                        return Promise.reject("两次密码输入不一致")
                                    }
                                })
                            ]}
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
                                    注册
                                </Button>
                                <Button type="default" onClick={() => {
                                    navigate("/login");
                                }}>
                                    返回登录
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );

}