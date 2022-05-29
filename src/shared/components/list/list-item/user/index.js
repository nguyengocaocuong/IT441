import './user.css';
import defaultAvatar from '../../../../images/default-avatar.png';

const User = (props) => {
    const onClickHandle = () => props.onClick(props);
    
    return (
        <div className='user' onClick={onClickHandle}>
            <div>
                <img className='user-avatar' alt='user' src={defaultAvatar} />
            </div>
            <div className='user-info'>
                <div className='user-info__category'>
                    <span>ID: {props.id}</span>
                </div>
                <div className='user-info__category'>
                    <span>Tên: {props.name}</span>
                </div>
                <div className='user-info__category'>
                    <span>Ngày sinh: {props.dob}</span>
                </div>
                <div className='user-info__category'>
                    <span>Số điện thoại: {props.phone}</span>
                </div>
            </div>
        </div>
    )
}

export default User;
