import React, { useState } from "react";
import Profile from '../../../../../../assets/image/profile.png';
import './care.css';
import { Modal } from '@material-ui/core';

const Care = () => {
    const [detailInfo, setDetailInfo] = useState({ open: false });
    const [careList, setCareList] = useState([{ name: 'Nguyễn Lương Hải', address: 'Hồ Gươm', phoneNumer: '0818988577' }, { name: 'Nguyễn Đức Hiếu', address: 'Hải Dương', phoneNumber: '0812313123' }])
    const onCloseHandle = () => {
        setDetailInfo({ open: false })
    };
    const handleClick = (item) => {
        setDetailInfo({ item, open: true });
    }
    return (
        <div className='care-modal'>
            {
                careList.map((item, index) => (
                    <div key={index} className='caring-profile'>
                        <img alt='profile' src={Profile} className='profile__img' />
                        <span>{item.name}</span>
                        <span>{item.address}</span>
                    </div>
                ))
            }
            <div className="button-add-care-person">
                <button onClick={() => handleClick(null)}>Thêm người quan tâm</button>
            </div>
            <Modal
                open={detailInfo.open}
                onClose={onCloseHandle}
            >
                <div className='paper'>
                    <h3>Thêm người quan tâm mới</h3>
                    <div className="care-info">
                        <div className="input-group">
                            <span>Tên : </span>
                            <input type='text'/>
                        </div>
                        <div className="input-group">
                            <span>Địa chỉ : </span>
                            <input type='text'/>
                        </div>
                        <div className="input-group">
                            <span>Số điện thoại : </span>
                            <input type='text' maxLength={10} minLength={10}/>
                        </div>
                    </div>
                    <div className="flex-button">
                        <button>Lưu lại</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Care;
