import React from 'react';

import './edit.css';
import house from '../../../../../../images/house.png';

export const Edit = ({item, onCancel}) => {
    const directions = ['Đông', 'Tây', 'Nam', 'Bắc', 'Đông Nam', 'Đông Bắc', 'Tây Nam', 'Tây Bắc'];
    return (
        <div className='view__detail'>
            <div>
                <img className='detail__image' src={house} alt='house' />
            </div>
            <div className='detail__info'>
                <div className='detail__category'>
                    <span>ID: </span>
                    <input type='text' value={item.id} readOnly />
                </div>
                <div className='detail__category'>
                    <input className='edit-title' type='text' value={item.title} />
                </div>
                <div className='detail__category'>
                    <span>Địa chỉ: </span>
                    <input type='text' value={item.address} />
                </div>
                <div className='detail__category'>
                    <span>Diện tích: </span>
                    <input type='text' value={item.area} />
                </div>
                <div className='detail__category'>
                    <span>Hướng nhà: </span>
                    <select value={item.direction}>
                        {directions.map((direction, index) => (
                            <option value={index}>{direction}</option>
                        ))}
                    </select>
                </div>
                <div className='detail__category'>
                    <span>Số tầng: </span>
                    <input type='number' value={item.floors} />
                </div>
                <div className='detail__category'>
                    <span>Thông tin chủ nhà: </span>
                    <input type='text' value={item.owner.name} />
                </div>
                <div className='detail__category'>
                    <span>Liên hệ: </span>
                    <input type='text' value={item.owner.phone} />
                </div>

                <div className='detail__info__control'>
                    <input className='cancelBtn' type='submit' value='Hủy' onClick={() => onCancel()} />
                    <input type='submit' value='Lưu'/>
                </div>
            </div>
        </div>
    )
}
