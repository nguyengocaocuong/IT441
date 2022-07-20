import React, { useEffect, useState } from 'react';
import CheckInOut from '../../writter/content/content-item/check-in-out';
import ListPost from "../../writter/content/content-item/list-post";
import './check-in-out.css';
import Statistic from './content-items/statistic';
import PostingPage from "../../writter/content/content-item/posting-page";

const columns = ['Mã bài đăng', 'Quan tâm', 'Ngày đăng', 'Trạng thái', 'Người phụ trách'];
const data = [
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 1,
        status2: 1,
        assignee: ''
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 1,
        status2: 1,
        assignee: ''
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 1,
        status2: 1,
        assignee: ''
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 0,
        status2: 0,
        assignee: 'Bạn phụ trách'
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 2,
        status2: 2,
        assignee: 'Bạn phụ trách'
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 2,
        status2: 2,
        assignee: 'Nguyễn Văn A'
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 1,
        status2: 1,
        assignee: ''
    },
    {
        id: 1000002,
        care: 10,
        created_n: '01/01/2022',
        status: 2,
        status2: 0,
        assignee: 'Bạn phụ trách'
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 0,
        status2: 2,
        assignee: 'Nguyễn Văn A'
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 2,
        status2: 1,
        assignee: ''
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 0,
        status2: 2,
        assignee: 'Nguyễn Văn A'
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 0,
        status2: 0,
        assignee: 'Bạn phụ trách'
    }
]

const dataFilter = [
    {
        id: 0,
        text: 'Đã bán'
    },
    {
        id: 1,
        text: 'Bị hủy'
    },
    {
        id: 2,
        text: 'Chưa bán'
    },
]

const dataFilter2 = [
    {
        id: 0,
        text: 'Bạn phụ trách'
    },
    {
        id: 1,
        text: 'Chưa được phụ trách'
    },
    {
        id: 2,
        text: 'Người khác phụ trách'
    },
]

export const Content = ({contentId}) => {
    const [filterType, setFilter] = useState(dataFilter);
    const [filteredData, setData] = useState(data);
    const [currentFilter, setCurrentFilter] = useState(0);


    const onFilterTypeChange = (e) => {
        if (e.target.value === 0)
        {
            setFilter(dataFilter);
            setCurrentFilter(0);
        } else {
            setFilter(dataFilter2);
            setCurrentFilter(1);
        }
    }

    const onFilterType2Change = (e) => {
        if (currentFilter === 0) {
            const filtered = data.filter(item => item.status == e.target.value);
            setData(filtered);
        } else {
            const filtered = data.filter(item => item.status2 == e.target.value);
            setData(filtered);
        }
    }

    const getContent = () => {
        switch(contentId) {
            case 0: return (
                <>
                    <div>
                        <select onChange={onFilterTypeChange}>
                            <option value={0}>Trạng thái</option>
                            <option value={1}>Người phụ trách</option>
                        </select>
                        <select onChange={onFilterType2Change}>
                            {
                                filterType.map(item => <option key={item.id} value={item.id}>{item.text}</option>)
                            }
                        </select>
                    </div>
                    <ListPost data={filteredData} columns={columns} />
                </>
            );
            case 1: return <PostingPage />;
            case 2: return <Statistic />;
            case 3: return <CheckInOut />;

            default: return null;
        }
    }
    return (
        <div>
            {getContent()}
        </div>
    )
}