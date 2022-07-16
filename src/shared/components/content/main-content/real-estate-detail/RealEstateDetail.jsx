import React from 'react'
import './real-estate-detail.css'
import Table from '../../../table/index'
import jsonData from '../../../../../assets/jsonData/admin-main-content.json'
import Badge from '../../../badge'
import './real-estate-detail.css'
const head = [
    "",
    "Tên nhân viên",
    "Mã nhân viên",
    "Đăng nhập gần nhất",
    "Trạng thái"
]
const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderBodyUser = (item, index) => {
    return (
        <tr key={index}>
            {/* <td>{<img className='avatar-user' src={item.avatar} />}</td> */}
            <td><i className="fa fa-user-circle sample"></i></td>
            <td>{item.name}</td>
            <td>{item.idNV}</td>
            <td>{item.lastLogin}</td>
            <td><Badge content={item.status === 1 ? "Online" : "Ofline"} type={item.status === 1 ? "success" : "danger"} /></td>
        </tr>
    )
}
const RealEstateDetail = ({ realEstate }) => {
    const tmpPoster = jsonData.dataValueUser[0]
    const tmpSaler = [
        jsonData.dataValueUser[1],
        jsonData.dataValueUser[2],
        jsonData.dataValueUser[5],
        jsonData.dataValueUser[7],
        jsonData.dataValueUser[8],
        jsonData.dataValueUser[9],
    ]
    return (
        <div>
            <div className="real-estate__info">
                <h1>#RE0001</h1>
                <div className="real-estate__related-info">
                    <div className="poster-info">
                        <h3>Thông tin người đăng</h3>
                        <div className="poster-info__text">
                            <div className="poster-infot__text-left">
                                <p>Tên người đăng : <span>{tmpPoster.name}</span></p>
                                <p>Phone Number : <span>{tmpPoster.phone}</span></p>
                                <p>Email : <span>{tmpPoster.email}</span></p>
                            </div>
                            <div className="poster-infot__text-right">
                                <p>Ngày ngày đăng : <span>{realEstate.date}</span></p>
                                <p>Ngày chỉnh sửa : <span>{jsonData.dataValue[0].lastEdit}</span></p>
                                <p>Số người quan tâm: <span>{realEstate.total}</span></p>
                            </div>
                        </div>

                    </div>
                    <div className="saler-info">
                        <h3>Thông tin người bán</h3>
                        <Table
                            key={2}
                            limit={3}
                            headeData={head}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={tmpSaler}
                            renderBody={(item, index) => renderBodyUser(item, index)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RealEstateDetail