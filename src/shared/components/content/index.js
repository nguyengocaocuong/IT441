import Header from "../header";
import './content.css';
import MainContent from "./main-content";

const Content = ({expandHandle, contentId=0}) => {
    return (
        <div className="content">
            <Header menuClickHandle={expandHandle}/>
            <MainContent contentId={contentId} />
        </div>
    )
}

export default Content;
