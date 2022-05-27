import './header.css';

const Header = () => {
    return (
        <div className="header">
            <i className="fa fa-bars" />
            <div className='header__menu'>
                <div className='header__menu__control'>
                    <i className="fa fa-question-circle" />
                    <i className="fa fa-globe" />
                    <i className="fa fa-bell" />
                </div>
                <div className='header__menu__account'>
                    <p>Quản lý</p>
                    <i className="fa fa-user" />
                </div>
            </div>
        </div>
    )
}

export default Header;
