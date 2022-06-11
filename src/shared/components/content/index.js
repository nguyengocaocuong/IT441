import React from 'react';

import Header from "../header";
import './content.css';
import MainContent from "./main-content";

const Content = ({expandHandle, contentId=0, userData, onSignOut}) => {
    return (
        <div className="content">
            <Header userData={userData} menuClickHandle={expandHandle} onSignOut={onSignOut} />
            <MainContent contentId={contentId} />
        </div>
    )
}

export default Content;
