import './real-estate.css';
import house from '../../../../images/house.png';

const RealEstate = (props) => {
    const direction = ['Đông', 'Tây', 'Nam', 'Bắc', 'Đông Nam', 'Đông Bắc', 'Tây Nam', 'Tây Bắc'];

    const onClickHandle = () => props.onClick(props);

    return (
        <div className='real-estate' onClick={onClickHandle}>
            <img className='image' alt='house' src={house} />
            <div className='real-estate__info'>
                <div className='info__category'>
                    <span>ID: </span>
                    <span>{props.id}</span>
                </div>
                <div className='info__category'>
                    <span>Địa chỉ: </span>
                    <span>{props.address}</span>
                </div>
                <div className='info__category'>
                    <span>Diện tích: </span>
                    <span>{props.area}</span>
                    <span> m2</span>
                </div>
                <div className='info__category'>
                    <span>Hướng nhà: </span>
                    <span>{direction[props.direction]}</span>
                </div>
                <div className='info__category'>
                    <span>Số tầng: </span>
                    <span>{props.floors}</span>
                </div>
                <div className='info__category'>
                    <span>Số tầng: </span>
                    <span>{props.owner} </span>
                    (<span className='phone-number'>{props.phone}</span>)
                </div>
            </div>
        </div>
    )
}

export default RealEstate;
