import { useEffect, useState } from 'react';
import SubItem from '../sub-item';
import './item.css';

const Item = ({
    id,
    title,
    icon,
    selected = false,
    subItem= [],
    onClick,
    expand = false
}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const showDropdownHandle = () => setShowDropdown(showDropdown => !showDropdown);

    const clickHanle = () => {
        onClick(id);
        showDropdownHandle();
    }

    useEffect(() => {
        setShowDropdown(selected);
    }, [selected])

    return (
        <div style={{position: 'relative'}}>
            <div className={`option ${selected ? 'selected' : 'unselected'}`} onClick={clickHanle} >
                <i className={icon} />
                {expand  && <p>{title}</p>}
                {expand && subItem.length > 0 && <i className={`fa ${showDropdown ? 'fa-chevron-down' : 'fa-chevron-left'} drop-down-btn`}/>}
            </div>
            {
                expand && selected && subItem.length > 0 && showDropdown &&
                <div className='drop-down-menu'>
                {
                    subItem.map(item => (
                        <SubItem key={item.id} title={item.title} icon={item.icon} />
                    ))
                }
                </div>
            }
        </div>
    )
}

export default Item;
