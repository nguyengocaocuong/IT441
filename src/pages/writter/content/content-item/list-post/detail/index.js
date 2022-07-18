import React, { useState } from 'react';
import Care from '../care';
import './detail.css';

const Detail = ({data, onExit}) => {
    const [onEditing, setOnEditing] = useState(false);
    const [name, setName] = useState('Nhà đẹp');
    const [name2, setName2] = useState('Nhà đẹp');
    const [address, setAddress] = useState('1 Trần Đại Nghĩa');
    const [address2, setAddress2] = useState('1 Trần Đại Nghĩa');
    const [price, setPrice] = useState(1.5);
    const [price2, setPrice2] = useState(1.5);
    const [area, setArea] = useState(30);
    const [area2, setArea2] = useState(30);
    const [describe, setDescibe] = useState('Nhà rất đẹp');
    const [describe2, setDescibe2] = useState('Nhà rất đẹp');
    const [nameOwner, setNameOwner] = useState('Nguyễn Văn A');
    const [nameOwner2, setNameOwner2] = useState('Nguyễn Văn A');
    const [contact, setContact] = useState('0123456789');
    const [contact2, setContact2] = useState('0123456789');
    const [email, setEmail] = useState('a@gmail.com');
    const [email2, setEmail2] = useState('a@gmail.com');
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmBox, setConfirmBox] = useState(false);

    const editingToggle = () => {
        if (onEditing)
        {
            onCancel();
        } else {
            setOnEditing(onEditing => !onEditing);
        }
    };

    const onSaveHandle = () => {
        onExit();
        setOnEditing(false);
        setShowConfirm(false);
        setConfirmBox(false);
    }

    const onCancel = () => {
        if (showConfirm) {
            setConfirmBox(true);
        } else {
            setOnEditing(false);
            setShowConfirm(false);
            setConfirmBox(false);
        }
    }

    const exitHandle = () => {
        if (showConfirm) {
            setConfirmBox(true);
        } else {
            setShowConfirm(false);
            setConfirmBox(false);
            onExit();
        }
    }

    const reset = () => {
        setName(name2);
        setName(name2);
        setName(name2);
        setName(name2);
        setName(name2);
        setName(name2);
        setName(name2);
    }

    return (
        <div className='item-detail'>
            <div className='edit-button-container'>
                {
                    !onEditing && <button className='edit-button' onClick={editingToggle}>Chỉnh sửa <i className='fa fa-pencil-square-o' /></button>
                }
                {
                    onEditing && <button className='edit-button' onClick={editingToggle}>Hủy <i className='fa fa-times' /></button>
                }
                <button className='edit-button' onClick={exitHandle}>Thoát <i className='fa fa-times' /></button>
            </div>
            {
                confirmBox && (
                    <div>
                        <span>Chưa lưu các thay đổi</span>
                        <button onClick={() => {
                            setOnEditing(false);
                            setConfirmBox(false);
                            setShowConfirm(false);
                        }}>Lưu</button>
                        <button onClick={reset}>Không lưu</button>
                    </div>
                )
            }
            <div className='item-detail__row'>
                <span className='item-detail__field'>Tên bất động sản</span>
                <div className='item-detail__value-field'>
                    {
                        onEditing ? (
                            <input type='text' value={name} onChange={e => {
                                setName(e.target.value);
                                setShowConfirm(true);
                            }} />
                        ) : (
                            <span>{name}</span>
                        )
                    }
                </div>
            </div>
            <div className='item-detail__row'>
                <span className='item-detail__field'>Địa chỉ</span>
                <div className='item-detail__value-field'>
                    {
                        onEditing ? (
                            <input type='text' value={address} onChange={e => {
                                setAddress(e.target.value);
                                setShowConfirm(true);
                            }} />
                        ) : (
                            <span>{address}</span>
                        )
                    }
                </div>
            </div>
            <div className='item-detail__row'>
                <div className='item-detail__row same-row'>
                    <span className='item-detail__field'>Giá</span>
                    <div className=''>
                        {
                            onEditing ? (
                                <input type='text' value={price} onChange={e => {
                                    setPrice(e.target.value);
                                    setShowConfirm(true);
                                }} />
                            ) : (
                                <span>{price}</span>
                            )
                        }
                    </div>
                </div>
                <div className='item-detail__row same-row'>
                    <span className='item-detail__field'>Diện tích</span>
                    <div className=''>
                        {
                            onEditing ? (
                                <input type='text' value={area} onChange={e => {
                                    setArea(e.target.value);
                                    setShowConfirm(true);
                                }} />
                            ) : (
                                <span>{area}</span>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='item-detail__row'>
                <span className='item-detail__field'>Mô tả</span>
                <div className='item-detail__value-field'>
                    {
                        onEditing ? (
                            <textarea cols={67} rows={20} value={describe} onChange={e => {
                                setDescibe(e.target.value);
                                setShowConfirm(true);
                            }} />
                            ) : (
                                <span>{describe}</span>
                        )
                    }
                </div>
            </div>
            <div className='item-detail__row'>
                <span className='item-detail__field'>Ảnh</span>
                <div className='item-detail__value-field'>
                    <input type='file' />
                </div>
            </div>
            <h3>Thông tin chủ</h3>
            <div className='item-detail__row'>
                <span className='item-detail__field'>Tên</span>
                <div className='item-detail__value-field'>
                    {
                        onEditing ? (
                            <input type='text' value={nameOwner} onChange={e => {
                                setNameOwner(e.target.value);
                                setShowConfirm(true);
                            }} />
                        ) : (
                            <span>{nameOwner}</span>
                        )
                    }
                </div>
            </div>
            <div className='item-detail__row'>
                <span className='item-detail__field'>Liên hệ</span>
                <div className='item-detail__value-field'>
                    {
                        onEditing ? (
                            <input type='text' value={contact} onChange={e => {
                                setContact(e.target.value);
                                setShowConfirm(true);
                            }} />
                        ) : (
                            <span>{contact}</span>
                        )
                    }
                </div>
            </div>
            <div className='item-detail__row'>
                <span className='item-detail__field'>Email</span>
                <div className='item-detail__value-field'>
                    {
                        onEditing ? (
                            <input type='text' value={email} onChange={e => {
                                setEmail(e.target.value);
                                setShowConfirm(true);
                            }} />
                        ) : (
                            <span>{email}</span>
                        )
                    }
                </div>
            </div>
            {
                onEditing ? (
                    <div>
                        <button className='item-detail__save-button' onClick={onSaveHandle} >Lưu</button>
                    </div>
                ) : (
                    <div>
                        <h3>Quan tâm</h3>
                        <Care />
                    </div>
                )
            }
        </div>
    );
}

export default Detail;
