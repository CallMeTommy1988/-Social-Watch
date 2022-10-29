import { DesktopOutlined, BulbOutlined, ThunderboltOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem("关于", "about", <BulbOutlined />),
    getItem("监控状态", "watch_status", <ThunderboltOutlined />),
    getItem("日志", "logs", <DesktopOutlined />)
];

const mainMenuList = () => {
    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['about']}
            mode="inline"
            items={items}
        />
    );
}

export default mainMenuList;