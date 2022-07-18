import React from "react";
import RealEstate from "../../../../../shared/components/list/list-item/real-estate";
import List from '../../../../../shared/components/list';
// import data from '../../../../../assets/jsonData/real-estate.json';
// import ListPost from "../../../../writter/content/content-item/list-post";

const columns = ['Mã bài đăng', 'Quan tâm', 'Ngày đăng', 'Trạng thái'];
const data = [
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 1
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 1
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 1
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 0
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 2
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 2
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 1
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 0
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 0
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 0
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 0
    },
    {
        id: 1000002,
        care: 10,
        created_in: '01/01/2022',
        status: 0
    }
]

const ListPost = () => {
    return (
        <div>
            {/* <ListPost data={data} columns={columns} /> */}
        </div>
    )
}

export default ListPost;
