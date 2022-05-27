import Content from "../../../shared/components/content";
import Header from "../../../shared/components/header";
import Sidebar from "../../../shared/components/sidebar";
import './dashbroad.css';

const Dashbroad = () => {
    return (
        <div className="dashbroad">
            <Sidebar />
            {/* <Header /> */}
            <Content />
        </div>
    )
}

export default Dashbroad;
