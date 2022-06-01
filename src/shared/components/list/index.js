import { Modal } from '@material-ui/core';
import { useState } from 'react';
import {View as RealEstateView} from './list-item/real-estate/detail/view';
import {Edit as RealEstateEdit} from './list-item/real-estate/detail/edit';
import {View as UserView} from './list-item/user/detail/view';
import {Edit as UserEdit} from './list-item/user/detail/edit';
import './list.css';

const List = ({items, component, user=false}) => {
    const PropComponent = component;

    const [detailInfo, setDetailInfo] = useState({open: false});
    const [edit, setEdit] = useState(false);

    const onOpenHandle = item => {
        setDetailInfo({...item, open: true});
    }

    const onCloseHandle = () => {
        setDetailInfo({open: false})
        setEdit(false);
    };

    const editHandle = () => setEdit(true);
    const cancelEditHandle = () => setEdit(false);

    const getDetailContent = () => {
        if (user) {
            if (edit)
                return <UserEdit item={detailInfo} onCancel={cancelEditHandle} />
            else
                return <UserView item={detailInfo} onEdit={editHandle} />
        } else {
            if (edit)
                return <RealEstateEdit item={detailInfo} onCancel={cancelEditHandle} />
            else
                return <RealEstateView item={detailInfo} onEdit={editHandle} />
        }
    }

    return (
        <div className='list-container'>
            <h3 className='result--number'>{items.length} kết quả</h3>
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
                <div className='paper'>
                    {getDetailContent()}
                </div>
            </Modal>
        </div>
    )
}

export default List;
