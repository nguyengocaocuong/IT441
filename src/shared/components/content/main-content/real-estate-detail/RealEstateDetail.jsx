import React from 'react'
import './real-estate-detail.css'
import jsonData from '../../../../../assets/jsonData/admin-main-content.json'
import './real-estate-detail.css'

const RealEstateDetail = ({ realEstate }) => {
    const tmpPoster = jsonData.dataValueUser[0]
    const tmpSeller = jsonData.dataValueUser[1]

    return (
        <div>
            <div className="real-estate__info">
                <h1>#RE0001</h1>
                <div className="real-estate__related-info">
                    <div className="poster-info bg">
                        <h3>Thông tin người đăng</h3>
                        <div className="poster-info__text">
                            <div className="poster-infot__text-left">
                                <p>Người Đăng : <span>{tmpPoster.name}</span></p>
                                <p>Số điện thoại : <span>{tmpPoster.phone}</span></p>
                                <p>Địa chỉ Email : <span>{tmpPoster.email}</span></p>
                            </div>
                            <div className="poster-infot__text-right">
                                <p>Ngày ngày đăng : <span>{realEstate.date}</span></p>
                                <p>Ngày chỉnh sửa : <span>{jsonData.dataValue[0].lastEdit}</span></p>
                            </div>
                        </div>

                    </div>
                    <div className="saler-info bg">
                        <h3>Thông tin người bán</h3>
                        <div className="poster-info__text">
                            <div className="poster-infot__text-left">
                                <p>Người bán : <span>{tmpSeller.name}</span></p>
                                <p>Số điện thoại : <span>{tmpSeller.phone}</span></p>
                                <p>Địa chỉ Email : <span>{tmpSeller.email}</span></p>
                            </div>
                            <div className="poster-infot__text-right">
                                <p>Ngày nhận bán : <span>{realEstate.date}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='estate-info bg'>
                        <h3>Trạng thái bất động sản</h3>
                        <div className="poster-info__text">
                            <div className="poster-infot__text-left">
                                <p>Tên bất động sản : <span>{'Bất động sản nhà vườn'}</span></p>
                                <p>Loại bất động sản : <span>{'Nhà đất'}</span></p>
                                <p>Địa chỉ : <span>{'33 Hồ Gươm Hà Nội'}</span></p>
                            </div>
                            <div className="poster-infot__text-right">
                                <p>Trạng thái : <span>{'Đang bán'}</span></p>
                                <p>Số người quan tâm : <span>{2}</span></p>
                                <p>Giá tối thiểu : <span>{'$2.000.000'}</span></p>
                                <p>Giá bán thực tế : <span>{'chưa có số liệu'}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RealEstateDetail