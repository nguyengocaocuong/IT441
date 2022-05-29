import { useState } from "react";
import Content from "../../../shared/components/content";
import Sidebar from "../../../shared/components/sidebar";
import './dashbroad.css';

const Dashbroad = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [contentId, setContentId] = useState(0);

    const showSidebarHandle = () => setShowSidebar(showSidebar => !showSidebar);

    return (
        <div className="dashbroad">
            <Sidebar expand={showSidebar} expandHandle={showSidebarHandle} onChangeContent={(id) => setContentId(id)} />
            <Content expandHandle={showSidebarHandle} contentId={contentId} />
        </div>
    )
}

export default Dashbroad;
