import React from 'react';
import Profile from '../../../../../assets/image/profile.png';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import './check-in-out.css';

const weekDay = [
    { id: 1, title: 'Thứ 2' },
    { id: 2, title: 'Thứ 3' },
    { id: 3, title: 'Thứ 4' },
    { id: 4, title: 'Thứ 5' },
    { id: 5, title: 'Thứ 6' },
    { id: 6, title: 'Thứ 7' },
    { id: 7, title: 'Chủ nhật' },
];

const timeTable = [
    { id: 1, morning: true, afternoon: false, kpi: 5 },
    { id: 2, morning: true, afternoon: true, kpi: 5 },
    { id: 3, morning: false, afternoon: true, kpi: 5 },
    { id: 4, morning: false, afternoon: true, kpi: 5 },
    { id: 5, morning: true, afternoon: false, kpi: 5 },
    { id: 6, morning: true, afternoon: true, kpi: 2 },
    { id: 7, morning: false, afternoon: true, kpi: 5 },
    { id: 8, morning: true, afternoon: true, kpi: 5 },
    { id: 9, morning: true, afternoon: true, kpi: 0 },
    { id: 10, morning: false, afternoon: true, kpi: 5 },
    { id: 11, morning: true, afternoon: true, kpi: 5 },
    { id: 12, morning: false, afternoon: false, kpi: 5 },
    { id: 13, morning: true, afternoon: true, kpi: 5 },
    { id: 14, morning: true, afternoon: false, kpi: 5 },
    { id: 15, morning: true, afternoon: true, kpi: 1 },
    { id: 16, morning: false, afternoon: true, kpi: 5 },
    { id: 17, morning: true, afternoon: true, kpi: 5 },
    { id: 18, morning: true, afternoon: false, kpi: 5 },
    { id: 19, morning: true, afternoon: true, kpi: 5 },
    { id: 20, morning: true, afternoon: true, kpi: 0 },
    { id: 21, morning: false, afternoon: true, kpi: 5 },
    { id: 22, morning: true, afternoon: true, kpi: 5 },
    { id: 23, morning: false, afternoon: false, kpi: 5 },
    { id: 24, morning: true, afternoon: true, kpi: 5 },
    { id: 25, morning: true, afternoon: false, kpi: 5 },
    { id: 26, morning: true, afternoon: true, kpi: 1 },
    { id: 27, morning: false, afternoon: true, kpi: 5 },
    { id: 28, morning: false, afternoon: false, kpi: 5 },
    { id: 29, morning: true, afternoon: false, kpi: 5 },
    { id: 30, morning: true, afternoon: true, kpi: 5 },
];

const CheckInOut = ({ user = { id: 1, name: 'Nguyễn Văn A', dob: '1/1/1990', department: 'AB01', role: 0 } }) => {
    const preHandle = () => {
        const result = [];
        for (let i = 0; i <= Math.floor(timeTable.length / 7); i++) {
            const limit = i * 7 + 7;

            result.push(timeTable.slice(i * 7, limit > timeTable.length ? timeTable.length : limit));
        }

        return result;
    }

    return (
        <div className='check__in__out-container'>
            <div className='check__in__out'>
                <div className='check__form__container'>
                    <div className='check__form__column employee__info'>
                        <div>
                            <span>Mã nhân viên: </span>{user.id}
                        </div>
                        <div>
                            <span>Tên nhân viên: </span>{user.name}
                        </div>
                        <div>
                            <span>Ngày sinh: </span>{user.dob}
                        </div>
                        <div>
                            <span>Vai trò: </span>{user.role === 0 ? 'Quản lý' : 'Nhân viên'}
                        </div>
                    </div>
                    <div className='check__form check__form__column mid__column'>
                        <div className='check__form__category'>
                            <span>Ngày</span>
                            <input type='date' />
                        </div>
                        <div className='check__form__category'>
                            <span>Check in/out</span>
                            <select className='select__box'>
                                <option value={0}>Check in</option>
                                <option value={1}>Check out</option>
                            </select>
                        </div>
                        <button className='check__button'>Lưu</button>
                    </div>
                    <div className='check__form__column avatar__container'>
                        <img className='checkinout__avatar' alt='user' src={Profile} />
                    </div>
                </div>
                <div className='work__info'>
                    <div className='work__info-top'>
                        <div>
                            <span>Tháng </span>
                            <select value={5}>
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='work__info-top-status'>
                            <span className='circle worked'></span><p> Đi làm</p>
                            <span className='circle'> </span><p> Nghỉ</p>
                        </div>
                    </div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        weekDay.map(day => (
                                            <TableCell key={day.id} align='center'>{day.title}</TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    preHandle().map((week, index) => (
                                        <TableRow key={index} hover={false}>
                                            {
                                                week.map(day => (
                                                    <TableCell key={day.id} align='center'>
                                                        <div className='day'>
                                                            <span>{day.id}</span>
                                                            <div className={`work__item ${day.morning && 'worked'}`} >In</div>
                                                            <div className={`work__item ${day.afternoon && 'worked'}`} >Out</div>
                                                        </div>
                                                    </TableCell>
                                                ))
                                            }
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default CheckInOut;
