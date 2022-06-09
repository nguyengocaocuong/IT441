import React from 'react';

import './filter.css';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';

const Filter = ({handleChangeKey,options}) => {
    const [optionId, setOptionId] = useState(0)
    return (
        <div className='filter'>
            <div className="filter_search">
                <input type="text" name="" id="" placeholder='Search here...' />
                <i className='fa fa-search' ></i>
            </div>
            <div className="filter__options">
                <FormControl fullWidth >
                    {/* <InputLabel id="demo-simple-select-label">Lọc dữ liệu</InputLabel> */}
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={optionId}
                        label="options"
                        onChange={(e) => {setOptionId(e.target.value);handleChangeKey(e.target.value)}}
                    >
                        {
                            options.map(item => <MenuItem value={item.id}>{item.title}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Filter;
