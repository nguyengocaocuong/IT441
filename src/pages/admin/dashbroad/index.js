import { useState } from "react";
import Content from "../../../shared/components/content";
import Sidebar from "../../../shared/components/sidebar";
import './dashbroad.css';

const Dashbroad = ({userData, onSignOut}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [contentId, setContentId] = useState(0);

    const showSidebarHandle = () => setShowSidebar(showSidebar => !showSidebar);

    return (
        <div className="dashbroad">
            <Sidebar userData={userData} expand={showSidebar} expandHandle={showSidebarHandle} onChangeContent={(id) => setContentId(id)} />
            <Content userData={userData} expandHandle={showSidebarHandle} contentId={contentId} onSignOut={onSignOut} />
        </div>
    )
}

export default Dashbroad;
