import './main-content.css';
import List from '../../list';
import RealEstate from '../../list/list-item/real-estate';
import Filter from '../../filter';

const items = [
    {id: 1, title: 'Nhà A', image: ''},
    {id: 2, title: 'Nhà B', image: ''},
    {id: 3, title: 'Nhà C', image: ''},
    {id: 4, title: 'Nhà D', image: ''},
    {id: 5, title: 'Nhà E', image: ''},
    {id: 6, title: 'Nhà F', image: ''},
    {id: 7, title: 'Nhà G', image: ''},
    {id: 8, title: 'Nhà H', image: ''},
    {id: 9, title: 'Nhà I', image: ''},
    {id: 10, title: 'Nhà J', image: ''}
];

const MainContent = () => {
    return (
        <div className='main-content'>
            <Filter />
            <List items={items} component={RealEstate}/>
        </div>
    )
}

export default MainContent;