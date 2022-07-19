import React from 'react';

import './filter.css';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';

const Filter = ({ handleChangeKey, options, key }) => {
    const [optionId, setOptionId] = useState(0)
    return (
        <div className='filter'>
            <div className="filter_search">
                <input type="text" name="" id="" placeholder='Search here...' value={key} onChange={(e) => handleChangeKey(e.target.value, 0)} />
                <i className='fa fa-search' ></i>
            </div>
            {
                options && <div className="filter__options">
                    <FormControl fullWidth >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={optionId}
                            label="options"
                            onChange={(e) => { setOptionId(e.target.value); handleChangeKey(e.target.value, 1) }}
                        >
                            {
                                options.map((item, index) => <MenuItem key={index} value={item.id}>{item.title}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </div>
            }
        </div>
    )
}


export default Filter;
