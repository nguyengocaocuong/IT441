import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import Table from "../../components/table/index";
import './dashboard.css';
const header = ["Mã", "Người bán", "Lợi nhuận", "Thời gian bán"]
const headerLevel = ["Mã", "Tên", "KPI"]
const data = [
    { id: "0001", name: "Nguyễn Ngô Cao Cường", total: 32000000, date: "20/10/2019" },
    { id: "0002", name: "Nguyễn Đình Cảnh", total: 12300000, date: "15/12/2020" },
    { id: "0003", name: "Nguyễn Xuân Nghĩa", total: 1400000, date: "20/10/2021" },
    { id: "0004", name: "Nguyễn Thị Cẩm Li", total: 21000000, date: "18/03/2022" },
    { id: "0005", name: "Đào Duy Quang", total: 2000000, date: "20/11/2019" },
]
const data1 = [
    { id: "1000", name: "Nguyễn Ngô Cao Cường", KPI: 33, role: 1 },
    { id: "2300", name: "Lê Minh Quân", KPI: 26, role: 1 },
    { id: "3100", name: "Nguyễn Đinh Minh", KPI: 25, role: 2 },
    { id: "1020", name: "Nguyễn Xuân Nghĩa", KPI: 22, role: 1 },
    { id: "1021", name: "La Thanh Hà", KPI: 16, role: 2 },
    { id: "3112", name: "Tạ Đăng Tạ", KPI: 15, role: 1 },
    { id: "1023", name: "Nguyễn Đình Cảnh", KPI: 13, role: 2 },
    { id: "2122", name: "Hoàng Thế Bảo", KPI: 10, role: 2 },
    { id: "0123", name: "Hà Quế Phong", KPI: 9, role: 1 },
    { id: "3001", name: "Bạch Thái Sơn", KPI: 7, role: 2 }
]
const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderBody = (item, index) => {
    return (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{"$" + new Intl.NumberFormat().format(item.total)}</td>
            <td>{item.date}</td>
        </tr>
    )
}
const renderBody1 = (item, index) => {
    return (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.KPI}</td>
        </tr>
    )
}
const Dashboard = () => {
    const [chartOptions, setChartOptions] = useState({
        optionsMixedChart: {
            chart: {
                id: "basic-bar",
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "50%"
                }
            },
            stroke: {
                width: [4, 0, 0]
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            markers: {
                size: 6,
                strokeWidth: 3,
                fillOpacity: 0,
                strokeOpacity: 0,
                hover: {
                    size: 8
                }
            },
            yaxis: {
                tickAmount: 5,
                min: 0,
                max: 100,
                title : {
                    text: "Số bất động sản"
                }
            }
        },
        seriesMixedChart: [
            {
                name: "Doanh thu",
                type: "line",
                data: [30, 40, 25, 50, 49, 21, 70, 51, 33, 51, 35, 23]
            },
            {
                name: "Đã bán",
                type: "column",
                data: [23, 12, 54, 61, 32, 56, 81, 19, 52, 2, 45, 45]
            },
            {
                name: "Mới",
                type: "column",
                data: [62, 12, 45, 55, 76, 41, 23, 43, 12, 77, 34, 12]
            }
        ],

    })
    const [year, setYear] = useState(2020)
    const [role, setRole] = useState(0)
    const [topKpi, setTopKpi] = useState(data1.slice(0, 5))
    useEffect(() => {
        if (role == 0) {
            setTopKpi(data1.slice(5))
            return
        }
        setTopKpi(data1.slice(0, 2))
    }, [role])
    const handleChange = (e) => {
        const max = 90;
        const min = 30;
        const newMixedSeries = [];
        chartOptions.seriesMixedChart.forEach((s) => {
            const data = s.data.map(() => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            });
            newMixedSeries.push({ data: data, type: s.type });
        });
        setChartOptions({ ...chartOptions, ['seriesMixedChart']: newMixedSeries })
        setYear(e.target.value)
    }
    return (
        <div className='dashboard__content'>
            <div className='dashboard__content-list-card'>
                <div className='list-card-item'>
                    <i className="fa fa-money"></i>
                    <div>
                        <p>Doanh thu</p>
                        <p>120.000.000</p>
                    </div>
                </div>
                <div className='list-card-item'>
                    <i className="fa fa-users"></i>
                    <div>
                        <p>Tổng nhân viên</p>
                        <p>3071</p>
                    </div>
                </div>
                <div className='list-card-item'>
                    <i className="fa fa-newspaper-o"></i>
                    <div>
                        <p>Tổng BDS mới</p>
                        <p>71</p>
                    </div>
                </div>
                <div className='list-card-item'>
                    <i className="fa fa-paypal"></i>
                    <div>
                        <p>Tổng BDS đã bán</p>
                        <p>201</p>
                    </div>
                </div>
            </div>
            <div className='chart__content card'>
                <div className='chart__header'>
                    <FormControl sx={{ m: 1, minWidth: 120 }} id="form">
                        <InputLabel id="demo-simple-select-helper-label">Chọn thời gian</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={year}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='chart__main'>
                    <Chart
                        key={2}
                        options={chartOptions.optionsMixedChart}
                        series={chartOptions.seriesMixedChart}
                        type="line"
                        width="100%"
                        height="300px"
                    />

                </div>
            </div>
            <div className='dashboard__list'>
                <div className='card'>
                    <div className='card__header'>
                        <h2>Danh sách nhà mới bán</h2>
                    </div>
                    <div className='card__body'>
                        <Table
                            headeData={header}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={data}
                            renderBody={(item, index) => renderBody(item, index)}
                        />
                    </div>
                </div>
                <div className='card'>
                    <div className='card__header'>
                        <h2>Xếp hạng nhân viên</h2>
                        <FormControl sx={{ m: 1, minWidth: 120 }} id="form">
                            {/* <InputLabel id="demo-simple-select-helper-label">Year</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={role}
                                label="Age"
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <MenuItem value={0}>All</MenuItem>
                                <MenuItem value={1}>Seller</MenuItem>
                                <MenuItem value={2}>Poster</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='card__body'>
                        <Table
                            headeData={headerLevel}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={topKpi}
                            renderBody={(item, index) => renderBody1(item, index)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard