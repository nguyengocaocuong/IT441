import React from 'react'
import jsonData from '../../../../../assets/jsonData/admin-main-content.json'
import Chart from "react-apexcharts";
import './user-detail.css'
import { useEffect } from 'react';
import { useState } from 'react';

const UserDetail = ({ user }) => {
    const max = 90;
    const min = 30;
    // let newMixedSeries = []
    // jsonData.dataValueUser[0].chartOptions.seriesMixedChart.forEach((s) => {
    //     const data = s.data.map(() => {
    //         return Math.floor(Math.random() * (max - min + 1)) + min;
    //     });
    //     newMixedSeries.push({ data: data, type: s.type });
    // })
    // jsonData.dataValueUser[0].chartOptions.seriesMixedChart = newMixedSeries

    const [mixedSeries, setMixedSeries] = useState([]);
    const [newData, setNewData] = useState({ month: 1, data: undefined });

    useEffect(() => {
        const newMixedSeries = []
        jsonData.dataValueUser[0].chartOptions.seriesMixedChart.forEach((s) => {
            const data = s.data.map(() => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            });
            newMixedSeries.push({ data: data, type: s.type });
        })

        setMixedSeries(newMixedSeries);
    }, []);

    const editKpiHandle = () => {
        const temp_MixedSeries = mixedSeries;
        const newDatas = temp_MixedSeries[2].data.map((month, index) => {
            if (index === newData.month - 1) {
                return Number(newData.data);
            } else {
                return month;
            }
        });

        temp_MixedSeries[2].data = newDatas;

        setMixedSeries([...temp_MixedSeries]);
    }

    return (
        <div>
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
                            <p>Role: <span>{user.rule == 2 ? 'Người bán' : 'Người đăng'}</span></p>
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
            <div className='add-kpi'>
                <h3>Add KPI</h3>
                <div className='add-kpi-content'>
                    <div>
                        <span className='field-name kpi-date'>Tháng: </span>
                        <select className='date' onChange={e => console.log(e.target.value)}>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => <option key={month} value={month - 1}>{month}</option>)
                            }
                        </select>
                        <span className='field-name kpi-date'>Năm: </span>
                        <select className='date'>
                            {
                                [2020, 2021, 2022, 2023].map(year => <option key={year}>{year}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <span className='field-name'>KPI: </span>
                        <input type='number' onChange={e => setNewData({ ...newData, data: e.target.value })} />
                        <span>{user.rule === 1 ? 'Bài' : 'Căn'}</span>
                    </div>
                    <div>
                        <input className='submit-btn-kpi' type='submit' value='Lưu' onClick={editKpiHandle} />
                    </div>
                </div>
            </div>
            <div className='chart__kpi'>
                <h3>Thống kê</h3>
                <Chart
                    key={1}
                    options={jsonData.dataValueUser[0].chartOptions.optionsMixedChart}
                    series={jsonData.dataValueUser[0].chartOptions.seriesMixedChart}
                    type="line"
                    width="100%"
                    height="300px"
                />
            </div>
        </div>
    )
}
export default UserDetail