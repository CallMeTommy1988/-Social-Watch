import { Col, Row, Button, Form, Input, Space, Result } from 'antd';
import md5 from "js-md5";
import Captcha from '../common/captcha';
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { regVaild, forgetPasswdConfirm } from "../../api/modules/outer";
import { IForget } from '../../api/interface';

const Finish = () => {

    const navigate = useNavigate();
    const [result, setResult] = useState(0);
    const [formEnable, setFormEnable] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const [timespan, setTimespan] = useState<number>((new Date()).getTime());
    const id = searchParams.get("id");
    const content = searchParams.get("content");
    const time = searchParams.get("time");

    const forgetPwdForm = (params: IForget.ReqForgetPwdForm) => {

        setFormEnable(true)
        params.passwd = md5(params.passwd);

        forgetPasswdConfirm(params).then(res => {

            navigate("/result/success", {
                state: {
                    title: "修改密码成功",
                    subTitle: "请重新登录"
                },
                replace: true
            })

        }, reject => {
            setTimespan((new Date()).getTime())
            //params.captcha = "";
            setFormEnable(false)
        })

    }

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
            {result === 1 && <section className='outerForm'>
                <h1>确认密码</h1>
                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={forgetPwdForm}
                    disabled={formEnable}
                >
                    <Form.Item
                        label="id"
                        name="id"
                        hidden={true}
                        initialValue={id}
                        rules={[{ required: true, message: '没有ID!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="time"
                        name="time"
                        hidden={true}
                        initialValue={time}
                        rules={[{ required: true, message: '没有time!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="content"
                        name="content"
                        hidden={true}
                        initialValue={content}
                        rules={[{ required: true, message: '没有content!' }]}
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

                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                修改密码
                            </Button>
                            <Link to="/login">返回登录</Link>
                        </Space>
                    </Form.Item>
                </Form>
            </section>}

            {result === 2 && <Result
                status="error"
                title="参数实效或错误"
                subTitle="请重新尝试忘记密码"
                extra={[
                    <Button type="primary" onClick={() => { navigate('/forget') }} key="console">
                        重新尝试
                    </Button>
                ]}
            />}
        </>
    )
}

export default Finish