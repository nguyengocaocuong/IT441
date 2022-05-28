import Header from "../header";
import './content.css';
import MainContent from "./main-content";

const Content = ({expandHandle}) => {
    return (
        <div className="content">
            <Header menuClickHandle={expandHandle}/>
            <MainContent />
        </div>
    )
}

export default Content;
