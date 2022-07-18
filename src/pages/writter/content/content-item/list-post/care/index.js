import React from "react";
import Profile from '../../../../../../assets/image/profile.png';
import './care.css';

const Care = ({careList = []}) => {
    return (
        <div className='care-modal'>
            {
                careList.map((item, index) => (
                    <div key={index} className='caring-profile'>
                        <img alt='profile' src={Profile} className='profile__img' />
                        <span>{item.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Care;
