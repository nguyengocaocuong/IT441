import React, { useEffect, useState } from 'react';
import './main-content.css';
import tabs from '../../../../assets/jsonData/sidebar-items.json'

const MainContent = ({ content, contentId }) => {
    const ImportedContent = content;
    const user = JSON.parse(localStorage.getItem('user'))
    const title = tabs[user.role].find((i) => i.id == contentId).title
    return (
        <div className='main-content'>
            <h1>{title}</h1>
            <ImportedContent contentId={contentId} />
        </div>
    )
}

export default MainContent;