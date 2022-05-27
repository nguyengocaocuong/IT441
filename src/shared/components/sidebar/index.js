import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='title'>
                <h2>BĐS</h2>
            </div>
            <div className='account-info'>
                <i class="fa fa-user-circle account-info__avatar" />
                <div className='info'>
                    <div className='upper__info'>
                        <p>Nguyễn Văn A</p>
                    </div>
                    <div className='below__info'>
                        <div>
                            <i class="fa fa-circle status--active" />
                            <span>Online</span>
                        </div>
                        <div>
                            <i class="fa fa-bell notification" />
                            <span>Thông báo</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='options'>
                <div className='option selected'>
                    <i className='fa fa-home' />
                    <p>Trang chủ</p>
                </div>
                <div className='option unselected'>
                    <i className='fa fa-home' />
                    <p>Trang chủ</p>
                </div>
                <div className='option unselected'>
                    <i className='fa fa-home' />
                    <p>Trang chủ</p>
                </div>
                <div className='option unselected'>
                    <i className='fa fa-home' />
                    <p>Trang chủ</p>
                </div>
                <div className='option unselected'>
                    <i className='fa fa-home' />
                    <p>Trang chủ</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
