import { Button, Divider, Form, Radio, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback, useState } from 'react';
import { addSubjectAsync } from "../../redux/reducer/subject";
import { subjectStatus, subjectTypes } from "../../enums/subjectEnum";
import { useNavigate } from 'react-router';
import { subjectTypesData } from '../../data/subject';

const WatchList = () => {


    const navigate = useNavigate();
    const dispath = useDispatch();
    const [formEnable, setFormEnable] = useState(true);

    //dispath(addSubjectAsync());

    const addWatchForm = function () {



    }

    return (
        <>
            <section className="detail_form">
                <h1>添加监控</h1>

                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={addWatchForm}
                    disabled={!formEnable}
                >
                    <Form.Item
                        label="类型"
                        name="subject_type"
                        rules={[
                            {
                                required: true,
                                message: '请选择类型',
                            }
                        ]}
                    >
                        <Radio.Group options={subjectTypesData} optionType="button" />
                    </Form.Item>
                    <Form.Item
                        label="监控地址"
                        name="subject_no"
                        rules={[
                            {
                                required: true,
                                message: '请填写地址',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            添加监控
                        </Button>

                        <Button type='link' onClick={() => { navigate("/watch") }}>返回</Button>
                    </Form.Item>
                </Form>
            </section>
        </>
    );

}

export default WatchList;