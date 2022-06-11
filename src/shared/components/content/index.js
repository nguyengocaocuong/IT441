import React from 'react';

import Header from "../header";
import './content.css';
import MainContent from "./main-content";

const Content = ({expandHandle, contentId = 1, userData, onSignOut, content}) => {
    return (
        <div className="content">
            <Header userData={userData} menuClickHandle={expandHandle} onSignOut={onSignOut} />
            <MainContent contentId={contentId} content={content} />
        </div>
    )
}

export default Content;
