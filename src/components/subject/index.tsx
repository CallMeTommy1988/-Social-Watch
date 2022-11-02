import { Button, Table, PageHeader } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { getSubjectListAllAsync, listSelector } from "../../redux/reducer/subject";
import { subjectStatus, subjectTypes } from "../../enums/subjectEnum";
import { useNavigate } from 'react-router';

const cols = [
    {
        title: "索引",
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: "社交媒体编号",
        dataIndex: "subject_no",
        key: "subject_no"
    },
    {
        title: "类型",
        dataIndex: 'subject_type',
        key: 'subject_type',
        render: (type: number) => {
            switch (type) {
                case subjectTypes.SinaWeiBo: return "新浪微博";
                case subjectTypes.Douban: return "豆瓣";
                case subjectTypes.WeChatOfficialAccounts: return "微信公众号";
                default:
                    return "未知";
            }
        }
    },
    {
        title: "状态",
        dataIndex: 'status',
        key: 'status',
        render: (status: number) => {
            switch (status) {
                case subjectStatus.normal: return "正常";
                case subjectStatus.disable: return "禁用";
                default:
                    return "未知";
            }
        }
    },
    {
        title: '操作',
        render: () => {
            return <>
                <Button>删除</Button>
            </>
        }
    }
];

const WatchList = () => {

    const dispath = useDispatch();
    const list = useSelector(listSelector);
    const navigate = useNavigate();

    const getList = useCallback(() => {
        dispath(getSubjectListAllAsync());
    }, [dispath]);

    useEffect(() => {
        getList();
    }, [getList]);
    

    return (
        <>
            {/* <PageHeader className="site-page-header"
                onBack={() => null}
                title="监控"
                subTitle="列表" /> */}
            <section className="action_bar">
                <Button type='primary' onClick={() => { navigate("/watch/add") }}>添加</Button>
            </section>
            <Table pagination={false} columns={cols} dataSource={list} />
        </>
    );

}

export default WatchList;