import React, {useState} from 'react';
import Chart from "react-apexcharts";

const Statistic = () => {
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
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
                max: 100
            }
        },
        seriesMixedChart: [
            {
                name: "Quan tâm",
                type: "line",
                data: [20, 10, 20, 22, 15, 24, 49, 12, 28, 4, 25, 30]
            },
            {
                name: "Đã bán",
                type: "column",
                data: [5, 4, 12, 20, 12, 15, 34, 4, 15, 0, 20, 18]
            }
        ],

    })

    return (
        <div className='statistic'>
            <div>
                <h2>Thống kê bài đăng</h2>
                <span>Năm </span>
                <select>
                    {
                        [1, 2, 3, 4, 5].map(year => (
                            <option key={year}>{2022 - year}</option>
                        ))
                    }
                </select>
            </div>
            <div className='chart__main'>
                <Chart
                    options={chartOptions.optionsMixedChart}
                    series={chartOptions.seriesMixedChart}
                    type="line"
                    width="100%"
                    height="300px"
                />
            </div>
            <div>
                <h2>Thống kê bất động sản đã bán</h2>
                <span>Năm </span>
                <select>
                    {
                        [1, 2, 3, 4, 5].map(year => (
                            <option key={year}>{2022 - year}</option>
                        ))
                    }
                </select>
            </div>
            <div className='chart__main'>
                <Chart
                    options={chartOptions.optionsMixedChart}
                    series={chartOptions.seriesMixedChart}
                    type="line"
                    width="100%"
                    height="300px"
                />
            </div>
        </div>
    )
}

export default Statistic;
