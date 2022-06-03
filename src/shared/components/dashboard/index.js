import React, { useState } from 'react'
import './dashboard.css'
import { Box, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import Table from '../table/index'
const carditems = [
    { title: "Số BDS bán", value: 300, unit: "BĐS", icon: "fa fa-home" },
    { title: "Bị hủy", value: 80, unit: "BĐS", icon: "fa fa-ban" },
    { title: "Được quan tâm", value: 120, unit: "BĐS", icon: "fa fa-eye" },
    { title: "Chưa bán", value: 220, unit: "BĐS", icon: "fa fa-link" },
]

const headerItems = ["Id", "Tên BDS", "Địa chỉ", "Chủ nhà"]
const renderHeader = (item, index) => (
    <th key={index}>{item}</th>
)
const renderItem = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.address}</td>
        <td>{item.owner}</td>
    </tr>
)
const Dashboard = ({ items }) => {
    const [location, setLocation] = useState(items[0].id)
    return (
        <div className='dashboard__content'>
            <div className='dashboard__header'>
                <div className='time'>
                    <div className='icon-calender'><i className="fa fa-calendar"></i></div>
                    <div className='time-line'>
                        <div>
                            <span>20/3/2000</span>-
                            <span>20/3/2000</span>
                        </div>

                        <div>
                            <i className="fa fa-arrow-circle-o-down"></i>
                        </div>
                    </div>
                </div>
                <div className='location'>
                    <FormControl fullWidth id="form-control">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            {
                                items.map(item => <MenuItem value={item.id} id={item.id}>{item.address}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='dashboard__card'>
                {
                    carditems.map(item => (
                        <div className='card-item'>
                            <div class="left-content">
                                <h3>{item.title}</h3>
                                <p>{item.value} <span>{item.unit}</span></p>
                            </div>
                            <div class="right-content">
                                <i class={item.icon}></i>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='main'>
                <div className='list-content'>
                    <h3>Danh sách BDS mới nhất</h3>
                    <Table
                        limit="10"
                        headeData={headerItems}
                        renderHead={(item, index) => renderHeader(item, index)}
                        bodyData={items}
                        renderBody={(item, index) => renderItem(item, index)}
                    />
                </div>
            </div>
        </div>
    )
}
export default Dashboard