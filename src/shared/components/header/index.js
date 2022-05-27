import './header.css';

const Header = () => {
    return (
        <div className="header">
            <i className="fa fa-bars" />
            <div className='header__menu'>
                <div className='header__menu__control'>
                    <i class="fa fa-question-circle" />
                    <i class="fa fa-globe" />
                    <i class="fa fa-bell" />
                </div>
                <div className='header__menu__account'>
                    <p>Quản lý</p>
                    <i class="fa fa-user" />
                </div>
            </div>
        </div>
    )
}

export default Header;
