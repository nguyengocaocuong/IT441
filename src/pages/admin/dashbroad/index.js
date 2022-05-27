import { useState } from "react";
import Content from "../../../shared/components/content";
import Sidebar from "../../../shared/components/sidebar";
import './dashbroad.css';

const Dashbroad = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const showSidebarHandle = () => setShowSidebar(showSidebar => !showSidebar);

    return (
        <div className="dashbroad">
            <Sidebar expand={showSidebar} expandHandle={showSidebarHandle} />
            <Content expandHandle={showSidebarHandle} />
        </div>
    )
}

export default Dashbroad;
