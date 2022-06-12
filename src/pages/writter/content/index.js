import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import ListPost from "./content-item/list-post";
import PostingPage from "./content-item/posting-page";
import './content.css';
import Statistic from "./content-item/stastistic";
import CheckInOut from "./content-item/check-in-out";

const columns = ['Mã bài đăng', 'Quan tâm', 'Ngày đăng', 'Trạng thái', ''];
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

export const Content = ({contentId}) => {
    const getContent = () => {
        switch (contentId)
        {
            case 0: return <ListPost data={data} columns={columns} />

            case 1: return <PostingPage />

            case 2: return <Statistic />

            case 3: return <CheckInOut />

            default: return null;
        }
    }

    return (
        <div>
            {getContent()}
        </div>
    )
}
