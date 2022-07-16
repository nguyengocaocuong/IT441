import React, { useState, useEffect } from 'react';
import { Modal } from '@material-ui/core';

import CheckInOut from './content-item/check-in-out';
import Dashboard from '../../../shared/components/dashboard';
import Table from '../../../shared/components/table';
import Filter from '../../../shared/components/filter';
import jsonData from '../../../assets/jsonData/admin-main-content.json';
import UserDetail from '../../../shared/components/content/main-content/user-detail/UserDetail';
import RealEstateDetail from '../../../shared/components/content/main-content/real-estate-detail/RealEstateDetail';
import Badge from '../../../shared/components/badge';
import './model.css'
const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

export const Content = ({ contentId }) => {
    const [key, setKey] = useState(0);
    const [detailInfo, setDetailInfo] = useState({ open: false });
    const [data, setData] = useState(jsonData.dataValue)
    const [dataUser, setDataUser] = useState(jsonData.dataValueUser);

    const handleChangeKey = (key,tag)=>{
        if(tag == 0){
            setKey(key)
            setDataUser([...jsonData.dataValueUser.slice(3,11)])
        }
           
    }

    useEffect(() => {
        if (contentId === 1) setData(jsonData.dataValue.filter(item => key === 0 || item.status === key))
        if (contentId === 2) setDataUser(jsonData.dataValueUser.filter(item => key === 0 || item.status === key))
    }, [key])

    const getContent = () => {
        switch (contentId) {
            case 0:
                return (
                    <Dashboard />
                )

            case 1:
                return (
                    <div>
                        <Filter handleChangeKey={handleChangeKey} options={jsonData.optionValuesBDS} value={key} />
                        <div className='list-real-estate'>
                            <Table
                                key={1}
                                limit={8}
                                headeData={jsonData.headerBDS}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={data}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div>
                        <Filter options={jsonData.optionValuesUser} handleChangeKey={setKey} />
                        <div className='list-real-estate'>
                            <Table
                                key={2}
                                limit={8}
                                headeData={jsonData.headeUser}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={dataUser}
                                renderBody={(item, index) => renderBodyUser(item, index)}
                            />
                        </div>

                    </div>
                );

            case 3:
                return (
                    <div>
                        <CheckInOut />
                    </div>
                );

            // case 4:
            //     return (
            //         <Post />
            //     ); 
            default: return null;
        }
    }

    const onCloseHandle = () => {
        setDetailInfo({ open: false })
    };


    const getDetailContent = () => (
        detailInfo.open ? (contentId === 2 ? <UserDetail user={detailInfo.item} /> : <RealEstateDetail realEstate={detailInfo.item} />) : <div></div>
    )

    const handleClick = (item) => {
        setDetailInfo({ item, open: true });
    }

    const renderBody = (item, index) => {
        return (
            <tr key={index} onClick={() => handleClick(item)}>
                <td>{item.id}</td>
                <td>{item.idNV}</td>
                <td>{new Intl.NumberFormat().format(item.total)}</td>
                <td>{item.date}</td>
                <td><Badge content={item.status === 1 ? "Đã bán" : (item.status === 2 ? "Chưa bán" : "Bị Hủy")} type={item.status === 1 ? "success" : (item.status === 2 ? "primary" : "danger")} /></td>
            </tr>
        )
    }

    const renderBodyUser = (item, index) => {
        return (
            <tr key={index} onClick={() => handleClick(item)}>
                {/* <td>{<img className='avatar-user' src={item.avatar} />}</td> */}
                <td><i className="fa fa-user-circle sample"></i></td>
                <td>{item.name}</td>
                <td>{item.idNV}</td>
                <td>{item === 2 ? 'Người bán' : 'Người đăng'}</td>
                <td>{item.lastLogin}</td>
                <td><Badge content={item.status === 1 ? "Online" : "Ofline"} type={item.status === 1 ? "success" : "danger"} /></td>
            </tr>
        )
    }

    return (
        <div>
            {getContent(contentId)}
            <Modal
                open={detailInfo.open}
                onClose={onCloseHandle}
            >
                <div className='paper'>
                    {/* <div className='paper__header'>
                    <h3>Title</h3>
                    <i className="fa fa-window-close" onClick={onCloseHandle}></i>
                </div> */}
                    {getDetailContent()}
                </div>
            </Modal>
        </div>
    )
}
