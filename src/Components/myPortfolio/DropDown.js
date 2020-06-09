import React from 'react';
import {Select, Option}from './StylesMyPortfolio';


const DropDown = ({onChange, shares}) => {
    
    const createDisplayOptions = () => {
        const pageOption = shares.length > 10 ? 10 : shares.length;
        let result = [];
        for( let i = 1; i <= pageOption; i++){
            result.push(
                <Option key={i} value={i} selected={i === pageOption && 'selected'}>{i}</Option>
            )
        }
        return result;
    }
   
    return (
        <Select name="sharesPerPage" id="sharesPerPage" onChange={onChange}>
            {
                createDisplayOptions()
            }
        </Select>
    )
}

export default DropDown