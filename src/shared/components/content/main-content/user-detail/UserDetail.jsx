import React from 'react'
import jsonData from '../../../../../assets/jsonData/admin-main-content.json'
import Chart from "react-apexcharts";
import './user-detail.css'
import { useState } from 'react';

const UserDetail = ({ user }) => {
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

    const [role, setRole] = useState(user.rule);
    const [editRole, setEditRole] = useState(false);

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
                            <p>Rule: 
                                {
                                    !editRole ? <span onClick={() => setEditRole(true)}>{user.rule == 2 ? 'Người bán' : 'Người đăng'}</span> : (
                                        <select value={role} onChange={(e) => {
                                                setRole(e.target.value)
                                                setEditRole(false)
                                            }
                                        }>
                                            <option value={1}>Người bán</option>
                                            <option value={2}>Người đăng</option>
                                        </select>
                                    )
                                }
                            </p>
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
    )
}
export default UserDetail