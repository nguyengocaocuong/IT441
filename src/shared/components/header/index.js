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
    const clickOutside = useRef(null);
    const clickAccountBtn = useRef(null);

    useEffect(() => {
        const clickOutsideHandle = e => {
            if (clickAccountBtn.current && clickAccountBtn.current.contains(e.target)) {
                if (showDropdown)
                    setShowDropdown(false)
            } else {
                if (clickOutside.current && !clickOutside.current.contains(e.target)) {
                    setShowDropdown(false);
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
                    <i className="fa fa-bell" />
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
        </div>
    )
}

export default Header;
