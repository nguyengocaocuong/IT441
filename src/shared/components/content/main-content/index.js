import './main-content.css';
import List from '../../list';
import RealEstate from '../../list/list-item/real-estate';
import User from '../../list/list-item/user';
import Filter from '../../filter';
import CheckInOut from '../../../../pages/employee/checkin-out';

const items = [
    {id: 1, title: 'Nhà A', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 3, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 2, title: 'Nhà B', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 3, title: 'Nhà C', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 4, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 4, title: 'Nhà D', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 5, title: 'Nhà E', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 2, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 6, title: 'Nhà F', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 7, title: 'Nhà G', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 1, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 8, title: 'Nhà H', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 9, title: 'Nhà I', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 5, floors: 3, owner: 'Trần Thị B', phone: '06798132'},
    {id: 10, title: 'Nhà J', image: '', address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', area: 30, direction: 0, floors: 3, owner: 'Trần Thị B', phone: '06798132'}
];

const users = [
    {id: 1, name: 'Nguyễn Văn A', phone: '098765432', dob: '1/1/1990', image: ''},
    {id: 2, name: 'Nguyễn Văn A', phone: '098765432', dob: '1/1/1990', image: ''},
    {id: 3, name: 'Nguyễn Văn A', phone: '098765432', dob: '1/1/1990', image: ''},
    {id: 4, name: 'Nguyễn Văn A', phone: '098765432', dob: '1/1/1990', image: ''},
    {id: 5, name: 'Nguyễn Văn A', phone: '098765432', dob: '1/1/1990', image: ''},
];

const MainContent = ({contentId=0}) => {
    const getContent = () => {
        switch (contentId) {
            case 0:
                return (
                    <>
                        <Filter />
                        <List items={items} component={RealEstate} />
                    </>
                );

            case 1:
                return (
                    <>
                        <Filter />
                        <List items={users} component={User} />
                    </>
                )

            case 2:
                return (
                    <>
                        <CheckInOut />
                    </>
                )

            default: return null;
        }
    }

    return (
        <div className='main-content'>
            {getContent()}
        </div>
    )
}

export default MainContent;