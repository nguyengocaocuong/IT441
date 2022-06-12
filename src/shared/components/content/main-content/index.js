import React, { useEffect, useState } from 'react';
import './main-content.css';

const MainContent = ({content, contentId}) => {
    const ImportedContent = content;

    return (
        <div className='main-content'>
            <ImportedContent contentId={contentId} />
        </div>
    )
}

export default MainContent;