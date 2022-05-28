import './real-estate.css';
import house from '../../../images/house.png';

const RealEstate = (props) => {
    return (
        <div className='real-estate'>
            <img className='image' alt='house' src={house} />
            <div>
                <p>{props.id}</p>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default RealEstate;
