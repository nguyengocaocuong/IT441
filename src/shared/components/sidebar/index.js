import { useState } from 'react';
import Item from './sidebar-item';
import './sidebar.css';

const tabs = [
    {id: 0, title: 'Trang chủ', icon: 'fa fa-home'},
    {id: 1, title: 'A', icon: 'fa fa-home'},
    {id: 2, title: 'B', icon: 'fa fa-bell', subItem: [{id: 1, title: 'sub-A', icon: 'fa fa-home'}]},
    {id: 3, title: 'C', icon: 'fa fa-home'},
    {id: 4, title: 'D', icon: 'fa fa-home'},
    {id: 5, title: 'E', icon: 'fa fa-home'},
    {id: 6, title: 'E', icon: 'fa fa-home'},
    {id: 7, title: 'E', icon: 'fa fa-home'},
    {id: 8, title: 'E', icon: 'fa fa-home'},
    {id: 9, title: 'E', icon: 'fa fa-home'},
    {id: 10, title: 'E', icon: 'fa fa-home'},
    {id: 11, title: 'E', icon: 'fa fa-home'},
    {id: 12, title: 'E', icon: 'fa fa-home'},
]

const Sidebar = ({expand = true, expandHandle}) => {
    const [selectTab, setSelectedTab] = useState(0);

    const changeTabHandle = (id) => setSelectedTab(id);

    const expandClickHandle = () => {
        if (!expand) expandHandle();
    };

    return (
        <div className={`sidebar ${expand ? 'expand' : 'shrink'}`} onClick={expandClickHandle}>
            <div className='title'>
                <h2>BĐS</h2>
            </div>
            <div className='account-info'>
                <i className="fa fa-user-circle account-info__avatar" />
                <div className='info'>
                    {
                        expand &&
                        <div className='upper__info'>
                            <p>Nguyễn Văn A</p>
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
