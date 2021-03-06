import React from 'react';

import './sub-item.css';

const SubItem = ({id, title, icon, selected=false}) => {
    return (
        <div className="sub-item">
            <i className={icon} />
            <p>{title}</p>
        </div>
    )
}

export default SubItem;
