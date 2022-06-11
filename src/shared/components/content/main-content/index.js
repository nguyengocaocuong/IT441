import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

import './main-content.css';
import Filter from '../../filter';
import CheckInOut from '../../../../pages/employee/checkin-out';
import Post from '../../../../pages/employee/post';
import Dashboard from '../../dashboard';
import Badge from '../../badge';
import Table from '../../table/index'
import { Modal } from '@material-ui/core';
import jsonData from '../../../../assets/jsonData/admin-main-content.json'

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const MainContent = ({ contentId = 0 }) => {
    const [detailInfo, setDetailInfo] = useState({ open: false });
    const [data, setData] = useState(jsonData.dataValue)
    const [dataUser, setDataUser] = useState(jsonData.dataValueUser)
    const [key, setKey] = useState(0)
    useEffect(() => {
        if (contentId == 1) setData(jsonData.dataValue.filter(item => key == 0 || item.status == key))
        if (contentId == 2) setDataUser(jsonData.dataValueUser.filter(item => key == 0 || item.status == key))
    }, [key])


const MainContent = ({content, contentId}) => {
    const ImportedContent = content;
    // const getContent = () => {
    //     switch (contentId) {
    //         case 1:
    //             return (
    //                 <>
    //                     <Filter />
    //                     <List items={items} component={RealEstate} />
    //                 </>
    //             );

    //         case 2:
    //             return (
    //                 <>
    //                     <Filter />
    //                     <List items={users} component={User} user />
    //                 </>
    //             );

    const onCloseHandle = () => {
        setDetailInfo({ open: false })
    };
    const getDetailUser = (user) => {
        const max = 90;
        const min = 30;
        let newMixedSeries = []
        jsonData.dataValueUser[0].chartOptions.seriesMixedChart.forEach((s) => {
            const data = s.data.map(() => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            });
            newMixedSeries.push({ data: data, type: s.type });
        })
        jsonData.dataValueUser[0].chartOptions.seriesMixedChart = newMixedSeries
        return <div>
            <div className='user__info'>
                <div className='user__info-left'>
                    <div className='info__header'>
                        <h2>{user.name}</h2>
                        <h4>Ngày đăng nhập cuối : <span>{user.lastLogin}</span></h4>
                    </div>
                    <div className='info__body'>
                        <div className='info__body-left'>
                            <p>Date of Birth : <span>{user.dob}</span></p>
                            <p>Phone Number : <span>{user.phone}</span></p>
                            <p>Email : <span>{user.email}</span></p>
                            <p>Address: <span>{user.address}</span></p>
                        </div>
                        <div className='info__body-right'>
                            <p>Rule: <span>{user.rule == 2 ? 'Người bán' : 'Người đăng'}</span></p>
                            <p>Trạng thái: <span>{user.status == 1 ? 'Online' : 'Ofline'}</span></p>
                        </div>
                    </div>
                </div>
                <div className='user__info-right'>
                    <div className='user__avatar'>
                        <img src={user.avatar} />
                    </div>
                </div>
            </div>
            <div className='chart__kpi'>
                <h3>Thống kê</h3>
                <Chart
                        options={jsonData.dataValueUser[0].chartOptions.optionsMixedChart}
                        series={jsonData.dataValueUser[0].chartOptions.seriesMixedChart}
                        type="line"
                        width="100%"
                        height="300px"
                    />
            </div>
        </div>
    }
    const getDetailBDS = (bds) => {

    }
    const getDetailContent = () => (
        detailInfo.open ? getDetailUser(detailInfo.item) : <></>
    )

    const handleClick = (item) => {
        setDetailInfo({item, open: true });
    }
    const renderBody = (item, index) => {
        return (
            <tr key={index} onClick={() => handleClick(item)}>
                <td>{item.id}</td>
                <td>{item.idNV}</td>
                <td>{new Intl.NumberFormat().format(item.total)}</td>
                <td>{item.date}</td>
                <td><Badge content={item.status === 1 ? "Đã bán" : (item.status == 2 ? "Chưa bán" : "Bị Hủy")} type={item.status === 1 ? "success" : (item.status == 2 ? "primary" : "danger")} /></td>
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
                <td>{item == 2 ? 'Người bán' : 'Người đăng'}</td>
                <td>{item.lastLogin}</td>
                <td><Badge content={item.status === 1 ? "Online" : "Ofline"} type={item.status === 1 ? "success" : "danger"} /></td>
            </tr>
        )
    }
    const getContent = () => {
        switch (contentId) {
            case 1:
                return (
                    <>
                        <Filter handleChangeKey={setKey} options={jsonData.optionValuesBDS} />
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
                    </>
                );

            case 2:
                return (
                    <>
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

                    </>
                );

    //         case 3:
    //             return (
    //                 <>
    //                     <CheckInOut />
    //                 </>
    //             );

    //         case 4:
    //             return (
    //                 <Post />
    //             );

    //         case 0:
    //             return (
    //                 <Dashboard items={items}/>
    //             )   
    //         default: return null;
    //     }
    // }

    return (
        <div className='main-content'>
            <ImportedContent contentId={contentId} />
            case 4:
                return (
                    <Post />
                );
            case 0:
                return (
                    <Dashboard />
                )
            default: return null;
        }
    }

    return (
        <div className='main-content'>
            {getContent()}
            <Modal
                open={detailInfo.open}
                onClose={onCloseHandle}
            >
                <div className='paper'>
                    {/* <div className='paper__header'>
                        <h3>Title</h3>
                        <i class="fa fa-window-close" onClick={onCloseHandle}></i>
                    </div> */}
                    {getDetailContent()}
                </div>
            </Modal>
        </div>
    )
}

export default MainContent;