import { Col, Row, Button, Form, Input, Space, message } from 'antd';
import md5 from "js-md5";
import { useState } from 'react';
import * as outerService from "api/modules/outer"
import { useNavigate } from 'react-router';
import { IRegister } from '@/api/interface';
import Captcha from '../common/captcha'

const RegisterForm = () => {

    const navigate = useNavigate();
    const [formEnable, setFormEnable] = useState<boolean>(true);
    const [timespan, setTimespan] = useState<number>((new Date()).getTime());

    const registerForm = async (registerForm: IRegister.ReqRegisterForm) => {

        try {
            setFormEnable(false);
            registerForm.passwd = md5(registerForm.passwd);

            outerService.reg(registerForm).then(res => {
                navigate("/reg/success");
            }, reject => {
                setTimespan((new Date()).getTime());
            })
        }
        catch(ex) {
            console.log(ex);
        } 
        finally {
            setFormEnable(true);
        }
    }

    return (
        <>
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
                            <Captcha reflash={timespan} />
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
        </>
    );
}

export default RegisterForm;