import React from 'react';

import './view.css';
import defaultAvatar from '../../../../../../images/default-avatar.png';
import { TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';

const info = [
    {id: 1, morning: true, afternoon: false, kpi: 5},
    {id: 2, morning: true, afternoon: true, kpi: 5},
    {id: 3, morning: false, afternoon: true, kpi: 5},
    {id: 4, morning: false, afternoon: true, kpi: 5},
    {id: 5, morning: true, afternoon: false, kpi: 5},
    {id: 6, morning: true, afternoon: true, kpi: 2},
    {id: 7, morning: false, afternoon: true, kpi: 5},
    {id: 8, morning: true, afternoon: true, kpi: 5},
    {id: 9, morning: true, afternoon: true, kpi: 0},
    {id: 10, morning: false, afternoon: true, kpi: 5},
    {id: 11, morning: true, afternoon: true, kpi: 5},
    {id: 12, morning: false, afternoon: false, kpi: 5},
    {id: 13, morning: true, afternoon: true, kpi: 5},
    {id: 14, morning: true, afternoon: false, kpi: 5},
    {id: 15, morning: true, afternoon: true, kpi: 1},
    {id: 16, morning: false, afternoon: true, kpi: 5},
    {id: 17, morning: true, afternoon: true, kpi: 5},
    {id: 18, morning: true, afternoon: false, kpi: 5},
    {id: 19, morning: true, afternoon: true, kpi: 5},
];

export const View = ({item, onEdit}) => {
    const total = {
        morning: info.reduce((cur, next) => cur + (next.morning ? 1 : 0), 0),
        afternoon: info.reduce((cur, next) => cur + (next.afternoon ? 1 : 0), 0),
        kpi: info.reduce((cur, next) => cur + next.kpi, 0)
    }

    return (
        <div className='user__view'>
            <div className='user--info'>
                <div>
                    <img className='user__view--avatar' alt='user' src={defaultAvatar} />
                </div>
                <div className='basic__info'>
                    <div className='basic__info__category'>
                        <span className='view__title' >ID: </span>
                        {item.id}
                    </div>
                    <div className='basic__info__category'>
                        <span className='view__title' >T??n: </span>
                        {item.name}
                    </div>
                    <div className='basic__info__category'>
                        <span className='view__title' >Ng??y sinh: </span>
                        {item.dob}
                    </div>
                    <div className='basic__info__category'>
                        <span className='view__title' >S??? ??i???n tho???i: </span>
                        {item.phone}
                    </div>

                    <button className='update--info__btn' onClick={() => onEdit()} ><i className='fa fa-pencil-square-o' /> C???p nh???t</button>
                </div>
            </div>
            <div>
                <h3>Th???i gian l??m vi???c:</h3>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Ng??y</TableCell>
                                <TableCell align='center'>S??ng</TableCell>
                                <TableCell align='center'>Chi???u</TableCell>
                                <TableCell align='center'>Doanh s???</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                info.map(i => (
                                    <TableRow key={i.id}>
                                        <TableCell align='center'>{i.id}</TableCell>
                                        <TableCell align='center'>{i.morning ? <i className="fa fa-circle-o" /> : <i className="fa fa-times" />}</TableCell>
                                        <TableCell align='center'>{i.afternoon ? <i className="fa fa-circle-o" /> : <i className="fa fa-times" />}</TableCell>
                                        <TableCell align='center'>{i.kpi}</TableCell>
                                    </TableRow>
                                ))
                            }
                            <TableRow>
                                <TableCell align='center'>T???ng</TableCell>
                                <TableCell align='center'>{total.morning}</TableCell>
                                <TableCell align='center'>{total.afternoon}</TableCell>
                                <TableCell align='center'>{total.kpi}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
