import { Col, Row, Button, Checkbox, Form, Input, Space } from 'antd';
import { useEffect, useState } from 'react';
import * as outerService from "api/modules/outer"


export default function Login() {

    const [captchaContent, setCaptchaContent] = useState("");
    const getCaptcha = () => {
        outerService.captcha().then(res => {
            if(res.code === 200) 
        })
    }


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
                                name="password"
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
                                        <Form.Item
                                            name="captcha"
                                            noStyle
                                            rules={[{ required: true, message: '请输入验证码.' }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Button>Get captcha</Button>
                                    </Col>
                                </Row>
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
                                <Space>
                                    <Button type="primary" htmlType="submit">
                                        登录
                                    </Button>
                                    <Button type="default">
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