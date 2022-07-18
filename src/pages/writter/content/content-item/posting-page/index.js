import React from "react";
import './posting-page.css';

const PostingPage = () => {
    return (
        <div>
            <h3>Thông tin bất động sản</h3>
            <div className='add__category'>
                <span className='add__category__title'>Tên bất động sản</span>
                <div className='add__category__input'>
                    <input type='text' />
                </div>
            </div>
            <div className='add__category'>
                <span className='add__category__title'>Địa chỉ</span>
                <div className='add__category__input'>
                    <input type='text' />
                </div>
            </div>
            <div className='add__category '>
                <div className='add__category__inRow'>
                    <span className='add__category__title'>Giá</span>
                    <div className='add__category__input'>
                        <input type='text' />
                    </div>
                    <select>
                        <option value={0}>Tỷ</option>
                        <option value={1}>Triệu</option>
                    </select>
                </div>
                <div className='add__category__inRow'>
                    <span className='add__category__title'>Diện tích</span>
                    <div className='add__category__input'>
                        <input type='text' />
                    </div>
                    <span>m2</span>
                </div>
            </div>
            <div className='add__category'>
                <span className='add__category__title'>Mô tả</span>
                <div className='add__category__input'>
                    <textarea cols={70} rows={20} />
                </div>
            </div>
            <div className='add__category'>
                <span className='add__category__title'>Ảnh</span>
                <div className='add__category__input'>
                    <input type='file' />
                </div>
            </div>
            <h3 className='owner__info'>Thông tin chủ</h3>
            <div className='add__category'>
                <span className='add__category__title'>Tên</span>
                <div className='add__category__input'>
                    <input type='text' />
                </div>
            </div>
            <div className='add__category'>
                <span className='add__category__title'>Liên hệ</span>
                <div className='add__category__input'>
                    <input type='text' />
                </div>
            </div>
            <div className='add__category'>
                <span className='add__category__title'>Email</span>
                <div className='add__category__input'>
                    <input type='text' />
                </div>
            </div>
            <div className='add__category__btn__group'>
                <input type='submit' value='Đăng bài' />
                <input type='submit' value='Hủy' />
            </div>
        </div>
    )
}

export default PostingPage;
