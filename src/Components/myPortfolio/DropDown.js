import React from 'react';
import {OptionContainer}from './StylesMyPortfolio';


const DropDown = ({onChange, shares}) => {
    
    const createDisplayOptions = () => {
        const pageOption = shares.length > 10 ? 10 : shares.length;
        let result = [];
        for( let i = 1; i <= pageOption; i++){
            result.push(
                <option key={i} value={i} selected={i === pageOption && 'selected'}>{i}</option>
            )
        }
        return result;
    }
   
    return (
        <OptionContainer id='sharesPerPageForm'>
            <select name="sharesPerPage" id="sharesPerPage" onChange={onChange}>
                {
                    createDisplayOptions()
                }
            </select>
        </OptionContainer>
        
    )
}

export default DropDown