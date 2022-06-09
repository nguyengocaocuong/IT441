import React, { useState } from 'react';

import './main-content.css';
import List from '../../list';
import User from '../../list/list-item/user';
import Filter from '../../filter';
import CheckInOut from '../../../../pages/employee/checkin-out';
import Post from '../../../../pages/employee/post';
import Dashboard from '../../dashboard';
import { Table } from '@material-ui/core';
import Badge from '../../badge';

const items = [
    { id: 1, title: 'Nhà A', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 3, floors: 3, owner: 'Trần Thị B', phone: '06798132' },
    { id: 2, title: 'Nhà B', image: '', address: 'Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132' },
    { id: 3, title: 'Nhà C', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 4, floors: 3, owner: 'Trần Thị B', phone: '06798132' },
    { id: 4, title: 'Nhà D', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132' },
    { id: 5, title: 'Nhà E', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 2, floors: 3, owner: 'Trần Thị B', phone: '06798132' },
    { id: 6, title: 'Nhà F', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132' },
    { id: 7, title: 'Nhà G', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 1, floors: 3, owner: 'Trần Thị B', phone: '06798132' },
    { id: 8, title: 'Nhà H', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132' },
    { id: 9, title: 'Nhà I', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 5, floors: 3, owner: 'Trần Thị B', phone: '06798132' },
    { id: 10, title: 'Nhà J', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132' }
];
const optionValuesBDS = [
    { id: 0, title: "Tất cả" },
    { id: 1, title: "Đã bán" },
    { id: 2, title: "Chưa bán" },
    { id: 3, title: "Bị hủy" },
]
const optionValuesUser = [
    { id: 0, title: "Tất cả" },
    { id: 1, title: "Người bán" },
    { id: 2, title: "Người đăng" },
]
const users = [
    { id: 1, name: 'Nguyễn Văn A', phone: '098765432', dob: '1/1/1990', image: '' },
    { id: 2, name: 'Nguyễn Văn A', phone: '098765432', dob: '1/1/1990', image: '' },
    { id: 3, name: 'Nguyễn Văn A', phone: '098765432', dob: '1/1/1990', image: '' },
    { id: 4, name: 'Nguyễn Văn A', phone: '098765432', dob: '1/1/1990', image: '' },
    { id: 5, name: 'Nguyễn Văn A', phone: '098765432', dob: '1/1/1990', image: '' },
];
const dataValue = [
    { id: "BDS0022", idNV: "NV001", total: 12, date: '01/01/2022', status: 1 },
    { id: "BDS0122", idNV: "NV020", total: 212, date: '01/01/2022', status: 2 },
    { id: "BDS0401", idNV: "NV023", total: 124, date: '01/01/2022', status: 2 },
    { id: "BDS0201", idNV: "NV012", total: 12, date: '01/01/2022', status: 2 },
    { id: "BDS1002", idNV: "NV043", total: 0, date: '01/01/2022', status: 2 },
    { id: "BDS0202", idNV: "NV123", total: 2, date: '01/01/2022', status: 1 },
    { id: "BDS0305", idNV: "NV012", total: 20, date: '01/01/2022', status: 3 },
    { id: "BDS0019", idNV: "NV201", total: 76, date: '01/01/2022', status: 3 },
    { id: "BDS0204", idNV: "NV402", total: 45, date: '01/01/2022', status: 3 },
    { id: "BDS2202", idNV: "NV200", total: 23, date: '01/01/2022', status: 1 },
    { id: "BDS0211", idNV: "NV406", total: 1, date: '01/01/2022', status: 2 },
    { id: "BDS0513", idNV: "NV863", total: 21, date: '01/01/2022', status: 3 },
    { id: "BDS0002", idNV: "NV421", total: 43, date: '01/01/2022', status: 1 },
    { id: "BDS0452", idNV: "NV345", total: 21, date: '01/01/2022', status: 2 },
    { id: "BDS1202", idNV: "NV341", total: 43, date: '01/01/2022', status: 2 },
    { id: "BDS0002", idNV: "NV653", total: 12, date: '01/01/2022', status: 1 },
    { id: "BDS0104", idNV: "NV333", total: 54, date: '01/01/2022', status: 1 },
    { id: "BDS0401", idNV: "NV777", total: 86, date: '01/01/2022', status: 3 }
]

const headerBDS = ["Mã bài đăng", "Người đăng", "Quan tâm", "Ngày đăng", "Trạng thái"]

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderBody = (item, index) => {
    return (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.idNV}</td>
            <td>{new Intl.NumberFormat().format(item.total)}</td>
            <td>{item.date}</td>
            <td><Badge content={item.status === 1 ? "Đã bán" : (item.status == 2 ? "Chưa bán" : "Bị Hủy")} type={item.status === 1 ? "success" : (item.status == 2 ? "primary" : "danger")} /></td>
        </tr>
    )
}
const MainContent = ({ contentId = 0 }) => {
    const [data, setData] = useState(dataValue)
    const getDataByKey = (key) => {
        setData(dataValue.filter(item => key == 0 || key == item.status))
    }
    const getContent = () => {
        switch (contentId) {
            case 1:
                return (
                    <>
                        <Filter handleChangeKey={getDataByKey} options={optionValuesBDS} />
                        {/* <ListRealEstate data={[...data]}/> */}
                        <div className='list-real-estate'>
                            <Table
                                limit={8}
                                headeData={headerBDS}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={[...data]}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </>
                );

            case 2:
                return (
                    <>
                        <Filter options={optionValuesUser} />
                        <div className='list-real-estate'>
                            <Table
                                limit={8}
                                headeData={headerBDS}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={data}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </>
                );

            case 3:
                return (
                    <>
                        <CheckInOut />
                    </>
                );

            case 4:
                return (
                    <Post />
                );
            case 0:
                return (
                    <Dashboard items={items} />
                )
            default: return null;
        }
    }

    return (
        <div className='main-content'>
            {getContent()}
        </div>
    )
}

export default MainContent;