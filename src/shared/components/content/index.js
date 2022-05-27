import Header from "../header";
import './content.css';

const Content = ({expandHandle}) => {
    return (
        <div className="content">
            <Header menuClickHandle={expandHandle}/>
        </div>
    )
}

export default Content;
