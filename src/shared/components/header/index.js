import { useState } from 'react';
import './header.css';

const Header = ({menuClickHandle}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const onMenuClickHandle = () => menuClickHandle();

    const accountMenuClickHandle = () => setShowDropdown(showDropdown => !showDropdown);

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
                    <p className='role-title' onClick={accountMenuClickHandle}>Quản lý</p>
                    <i className="fa fa-user" />
                    {
                        showDropdown &&
                        <div className='account__dropdown'>
                            <div className='account__option'>
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
