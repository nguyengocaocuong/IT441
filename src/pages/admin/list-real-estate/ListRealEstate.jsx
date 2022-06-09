import React from 'react'
import Table from '../../../shared/components/table/index'
import Badge from '../../../shared/components/badge/index'
import './listRealEstate.css'
const header = ["Mã bài đăng", "Người đăng", "Quan tâm", "Ngày đăng", "Trạng thái"]


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
export const ListRealEstate = ({data}) => {
    return (
        <div className='list-real-estate'>
            <Table
                limit={8}
                headeData={header}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={data}
                renderBody={(item, index) => renderBody(item, index)}
            />
        </div>
    )
}
