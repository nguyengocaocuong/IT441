import React, { useState } from 'react';
import { Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import './list-post.css';
import Care from './care';
import Edit from './edit';
import Detail from './detail';

const careList = [
    {id: 100001, name: 'Nguyễn Văn A'},
    {id: 100001, name: 'Nguyễn Văn A'},
    {id: 100001, name: 'Nguyễn Văn A'},
    {id: 100001, name: 'Nguyễn Văn A'},
    {id: 100001, name: 'Nguyễn Văn A'},
]

const ListPost = ({columns, data}) => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(0);
    const [editId, setEditId] = useState(undefined);

    const handleOpenModal = (type) => {
        setShowModal(true);
        setModalType(type);
    }

    const getModalContent = () => {
        switch (modalType) {
            case 0: return <Care careList={careList} />;
            case 1: return <Edit />;
            default: return null;
        }
    }

    const editHandle = (id) => {
        setEditId(id);
    }

    const getAssignee = (assignee) => {
        switch (assignee)
        {
            case 'Bạn phụ trách':
                return (<span className='self'>{assignee}</span>);

            case '':
                return (<span><button className='take'>Nhận bán</button></span>);

            default: return (<span className='other'>{assignee}</span>)
        }
    }

    return (
        <div className='list-container'>
            <div  className='list'>
                <TableContainer style={{maxHeight: 500, width: editId ? '50%' : '100%'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    columns.map((column, index) => <TableCell style={{color: '#fff', fontSize: 'medium'}} align="center" key={index}>{column}</TableCell>)
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.map((item, index) => (
                                    <TableRow key={index} onClick={() => editHandle(item.id)}>
                                        <TableCell align="center">{item.id}</TableCell>
                                        <TableCell align="center" className='caring__cell'>{item.care}</TableCell>
                                        <TableCell align="center">{item.created_in}</TableCell>
                                        <TableCell align="center"><i className={`fa fa-circle ${item.status === 0 ? 'sold' : item.status === 1 ? 'waiting' : 'available'}`} /></TableCell>
                                        <TableCell align='center'>{getAssignee(item.assignee)}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                {
                    editId && (
                        <div className='detail'>
                            <Detail onExit={() => setEditId(undefined)} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ListPost;
