import './main-content.css';
import List from '../../list';
import RealEstate from '../../list/list-item/real-estate';
import Filter from '../../filter';

const items = [
    {id: 1, title: 'Nhà A', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 2, title: 'Nhà B', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 3, title: 'Nhà C', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 4, title: 'Nhà D', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 5, title: 'Nhà E', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 6, title: 'Nhà F', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 7, title: 'Nhà G', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 8, title: 'Nhà H', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 9, title: 'Nhà I', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 10, title: 'Nhà J', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'}
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