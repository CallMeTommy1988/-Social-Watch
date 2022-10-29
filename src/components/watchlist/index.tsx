import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table';

const cols = [
    {
        title: "编号",
        dataIndex: 'no',
        key: 'no'
    },
    {
        title: "类型",
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: "状态",
        dataIndex: 'status',
        key: 'status',
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

    return (
        <>
            <Table columns={cols} />
        </>
    );

}

export default WatchList;