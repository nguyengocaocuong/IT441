import { Modal } from '@material-ui/core';
import { useState } from 'react';
import View from './list-item/real-estate/detail/view';
import './list.css';

const List = ({items, component}) => {
    const PropComponent = component;

    const [detailInfo, setDetailInfo] = useState({open: false})

    const onOpenHandle = item => {
        setDetailInfo({...item, open: true});
    }

    const onCloseHandle = () => setDetailInfo({open: false});

    return (
        <div className='list-container'>
            <p className='result--number'>{items.length} kết quả</p>
            <div className='list'>
                {
                    items.map((item, index) => (
                        <PropComponent key={index} {...item} onClick={(item) => onOpenHandle(item)} />
                    ))
                }
            </div>
            <Modal
                open={detailInfo.open}
                onClose={onCloseHandle}
            >
                <div style={{outline: 'none'}}>
                    <View item={detailInfo} />
                </div>
            </Modal>
        </div>
    )
}

export default List;
