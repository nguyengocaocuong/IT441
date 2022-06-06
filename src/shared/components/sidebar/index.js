import React from 'react';

import { useState } from 'react';
import Item from './sidebar-item';
import './sidebar.css';

const tabs = [
    {
        id: 0,
        title: 'Tổng quan',
        icon: 'fa fa-home'
    },
    {
        id: 1,
        title: 'Bất động sản',
        icon: 'fa fa-list',
    },
    {
        id: 2,
        title: 'Nhân viên',
        icon: 'fa fa-users',
    },
    {
        id: 3,
        title: 'Chấm công',
        icon: 'fa fa-briefcase',
    },
    {
        id: 4,
        title: 'Đăng bài',
        icon: 'fa fa-plus'
    }
]

const Sidebar = ({ expand = true, expandHandle, onChangeContent, userData }) => {
    const [selectTab, setSelectedTab] = useState(0);

    const changeTabHandle = (id) => {
        setSelectedTab(id);
        onChangeContent(id);
    };

    const expandClickHandle = () => {
        if (!expand) expandHandle();
    };

    return (
        <div className={`sidebar ${expand ? 'expand' : 'shrink'}`} onClick={expandClickHandle}>
            <div className='title'>
                <i className="fa fa-home" />
                {expand && <h2>BĐS</h2>}
            </div>
            <div className='account-info'>
                <i className="fa fa-user-circle account-info__avatar" />
                <div className='info'>
                    {
                        expand &&
                        <div className='upper__info'>
                            <p>{userData.username}</p>
                        </div>
                    }
                    {
                        expand &&
                        <div className='below__info'>
                            <div>
                                <i className="fa fa-circle status--active" />
                                <span>Online</span>
                            </div>
                            <div>
                                <i className="fa fa-bell notification" />
                                <span>Thông báo</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='options'>
                {
                    tabs.map(tab => (
                        <Item
                            key={tab.id}
                            id={tab.id}
                            title={tab.title}
                            icon={tab.icon}
                            subItem={tab.subItem}
                            onClick={(id) => changeTabHandle(id)}
                            selected={selectTab === tab.id}
                            expand={expand}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;
