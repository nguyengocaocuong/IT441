import { Badge, Modal } from '@material-ui/core';
import React from 'react';

import { useState, useRef, useEffect } from 'react';
import './header.css';

const roleTranslate = [
    {id: 0, title: 'Quản lý'},
    {id: 1, title: 'Môi giới'},
    {id: 2, title: 'Đăng bài'}
];

const Header = ({menuClickHandle, userData, onSignOut}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const clickOutside = useRef(null);
    const clickAccountBtn = useRef(null);

    useEffect(() => {
        const clickOutsideHandle = e => {
            if (clickAccountBtn.current && clickAccountBtn.current.contains(e.target)) {
                if (showDropdown)
                    setShowDropdown(false);
                    setShowDropdown2(false);
            } else {
                if (clickOutside.current && !clickOutside.current.contains(e.target)) {
                    setShowDropdown(false);
                    setShowDropdown2(false);
                }
            }
        }

        document.addEventListener("mousedown", clickOutsideHandle);
        return () => {
            document.removeEventListener("mousedown", clickOutsideHandle);
        }
    }, [clickOutside, clickAccountBtn])

    const onMenuClickHandle = () => menuClickHandle();

    const accountMenuClickHandle = () => setShowDropdown(showDropdown => {
        if (showDropdown) {
            return false;
        }
        return true;
    });

    const logOutClickHandle = () => {
        onSignOut();
        setShowDropdown(false);
    }

    return (
        <div className="header">
            <i className="fa fa-bars" onClick={onMenuClickHandle} />
            <div className='header__menu'>
                <div className='header__menu__control'>
                    <i className="fa fa-question-circle" />
                    <i className="fa fa-globe" />
                    <Badge badgeContent={3} color='error'>
                        <i className="fa fa-bell" onClick={() => setShowDropdown2(true)} />
                    </Badge>
                    {
                        showDropdown2 &&
                        <div className='notification__dropdown'>
                            <div className='account__option' ref={clickOutside} onClick={() => {}}>
                                {
                                    userData.role !== 0 && (
                                        <>
                                            <div className='notification__option'>
                                                <div>Admin đã chỉ định bạn xử lí bất động sản <span className='link' onClick={() => {
                                                    setShowModal(true);
                                                    setShowDropdown2(false);
                                                }}>ABC-001</span></div>
                                                <div className='button-group'>
                                                    <button className='accept-btn'>Chấp nhận</button>
                                                    <button className='deny-btn'>Không chấp nhận</button>
                                                </div>
                                            </div>
                                            <div className='notification__option'>
                                                <div>Admin đã chỉ định bạn xử lí bất động sản <span className='link' onClick={() => {
                                                    setShowModal(true);
                                                    setShowDropdown2(false);
                                                }}>ABC-001</span></div>
                                                <div className='button-group'>
                                                    <button className='accept-btn'>Chấp nhận</button>
                                                    <button className='deny-btn'>Không chấp nhận</button>
                                                </div>
                                            </div>
                                            <div className='notification__option'>
                                                <div>Admin đã chỉ định bạn xử lí bất động sản <span className='link' onClick={() => {
                                                    setShowModal(true);
                                                    setShowDropdown2(false);
                                                }}>ABC-001</span></div>
                                                <div className='button-group'>
                                                    <button className='accept-btn'>Chấp nhận</button>
                                                    <button className='deny-btn'>Không chấp nhận</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className='header__menu__account'>
                    <p className={`role-title ${showDropdown && 'show--dropdown'}`} onClick={accountMenuClickHandle} ref={clickAccountBtn}>{roleTranslate[userData.role].title}</p>
                    <i className="fa fa-user" />
                    {
                        showDropdown &&
                        <div className='account__dropdown'>
                            <div className='account__option' ref={clickOutside} onClick={logOutClickHandle}>
                                <p>Đăng xuất</p>
                                <i className='fa fa-sign-out' />
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Modal
                open={showModal && userData.role !== 0}
                onClose={() => setShowModal(false)}
            >
                <div className='detail-modal'>
                    <div className='category'>
                        <span>Địa chỉ:</span>
                        <span> số 1 Trần Đại Nghĩa</span>
                    </div>
                    <div className='category'>
                        <span>Diện tích:</span>
                        <span> 100m2</span>
                    </div>
                    <div className='category'>
                        <span>Số phòng:</span>
                        <span> 2PN - 1WC</span>
                    </div>
                    <div className='category'>
                        <span>Hướng:</span>
                        <span>Đông Nam</span>
                    </div>
                    <div className='category'>
                        <span>Giá bán:</span>
                        <span> 2.5 tỷ</span>
                    </div>
                    <div className='category'>
                        <span>Thông tin thêm:</span>
                        <span> Nhà có sổ đỏ, nội thất đầy đủ</span>
                    </div>
                    <div className='button-group'>
                        <button className='accept-btn' onClick={() => setShowModal(false)}>Chấp nhận</button>
                        <button className='deny-btn' onClick={() => setShowModal(false)}>Không chấp nhận</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Header;
