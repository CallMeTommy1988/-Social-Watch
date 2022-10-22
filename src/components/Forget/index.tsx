import { Col, Row, Button, Form, Input, Space, message, Divider } from 'antd';
import md5 from "js-md5"
import { useNavigate, Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/reducer/user';
import { useState } from 'react';
import * as outerService from "api/modules/outer"
import { IForget, ILogin } from '@/api/interface';
import Captcha from '../common/captcha';


export default function Login() {

    const [formEnable, setFormEnable] = useState<boolean>(true);
    const [timespan, setTimespan] = useState<number>((new Date()).getTime());
    const navigate = useNavigate();

    const forgetPwd = async (forgetForm: IForget.ReqForgetForm) => {

        try {

            setFormEnable(false);

            outerService.forgetPasswd(forgetForm).then(res => {
                setTimeout(() => {
                    navigate("/result/success", { state: { title: "忘记密码邮件发送成功", subTitle: "如果没有收到, 请重新开始流程" } });
                }, 1000);
            }, reject => {
                setTimespan((new Date()).getTime());
                //forgetForm.captcha = "";
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
            <section className="outerForm">

                <h1>忘记密码</h1>

                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={forgetPwd}
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
                                发送邮件
                            </Button>
                            <Link to="/login">登录?</Link>
                        </Space>
                    </Form.Item>
                    <Divider />
                </Form>
            </section>
        </>
    );

}