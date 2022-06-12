import React from 'react';
import CheckInOut from '../../writter/content/content-item/check-in-out';
import ListPost from './content-items/list-post';
import './check-in-out.css';

export const Content = ({contentId}) => {
    const getContent = () => {
        switch(contentId) {
            case 0: return <ListPost />;
            case 2: return <CheckInOut />;

            default: return null;
        }
    }
    return (
        <div>
            {getContent()}
        </div>
    )
}