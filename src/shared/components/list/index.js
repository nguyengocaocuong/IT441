import './list.css';

const List = ({items, component}) => {
    const PropComponent = component;

    return (
        <div className="list">
            {
                items.map((item, index) => (
                    <PropComponent key={index} {...item} />
                ))
            }
        </div>
    )
}

export default List;
