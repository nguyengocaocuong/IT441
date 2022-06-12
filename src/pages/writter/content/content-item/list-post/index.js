import React, { useState } from 'react';
import { Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import './list-post.css';
import Care from './care';
import Edit from './edit';

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

    return (
        <div>
            <h2>Danh sách bài đăng</h2>
            <TableContainer style={{maxHeight: 500}}>
                <Table stickyHeader >
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((column, index) => <TableCell align="center" key={index}>{column}</TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{item.id}</TableCell>
                                    <TableCell align="center" className='caring__cell' onClick={() => handleOpenModal(0)}>{item.care}</TableCell>
                                    <TableCell align="center">{item.created_in}</TableCell>
                                    <TableCell align="center"><i className={`fa fa-circle ${item.status === 0 ? 'sold' : item.status === 1 ? 'waiting' : 'available'}`} /></TableCell>
                                    <TableCell align="center"><i className='fa fa-pencil-square-o' onClick={() => handleOpenModal(1)} /></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
            >
                <div className='paper__list__post'>
                    {getModalContent()}
                </div>
            </Modal>
        </div>
    )
}

export default ListPost;
