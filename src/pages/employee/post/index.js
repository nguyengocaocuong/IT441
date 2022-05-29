import './post.css';

const Post = () => {
    return (
        <div className='post'>
            <h2>Đăng bài</h2>
            <div className='post__catogory'>
                <span>Tiêu đề: </span>
                <input className='post__title' type='text' />
            </div>
            <div className='post__catogory owner'>
                <h3>Thông tin chủ nhà</h3>
                <div className='owner__info' >
                    <span>Chủ nhà: </span>
                    <input type='text' />
                </div>
                <div className='owner__info' >
                    <span>Số điện thoại: </span>
                    <input type='text' />
                </div>
                <div className='owner__info' >
                    <span>Email: </span>
                    <input type='text' />
                </div>
                <div className='owner__info' >
                    <span>Địa chỉ: </span>
                    <input type='text' />
                </div>
            </div>
            <div className='post__catogory'>
                <h3>Thông tin bất động sản</h3>
                <div className='real__estate__info' >
                    <span>Diện tích: </span>
                    <input type='text' />
                </div>
                <div className='real__estate__info' >
                    <span>Mặt tiền: </span>
                    <input type='text' />
                </div>
                <div className='real__estate__info' >
                    <span>Số tầng: </span>
                    <input type='text' />
                </div>
                <div className='real__estate__info' >
                    <span>Phòng ngủ: </span>
                    <input type='text' />
                </div>
                <div className='real__estate__info' >
                    <span>Phòng vệ sinh: </span>
                    <input type='text' />
                </div>
                <div className='real__estate__info' >
                    <span>Hướng nhà: </span>
                    <input type='text' />
                </div>
                <div className='real__estate__info' >
                    <span>Địa chỉ: </span>
                    <input type='text' />
                </div>
                <div className='real__estate__info' >
                    <span>Giá: </span>
                    <input type='text' />
                    <span> tỷ</span>
                </div>
                <div className='real__estate__info' >
                    <span>Ảnh: </span>
                    <input type='file' />
                </div>
                <div className='description real__estate__info'>
                    <span>Mô tả: </span>
                    <textarea rows={10} />
                </div>
            </div>
            <div>
                <button className='post__action cancel'>Hủy</button>
                <button className='post__action publish'>Đăng</button>
            </div>
        </div>
    )
}

export default Post;
