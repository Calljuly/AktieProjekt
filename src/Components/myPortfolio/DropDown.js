import React from 'react';
import {OptionContainer}from './StylesMyPortfolio';


const DropDown = ({onChange, sharesPerPage}) => {
    
    const createDisplayOptions = () => {
        let result = [];
        for( let i = 1; i <= sharesPerPage; i++){
            result.push(
                <option key={i} value={i} selected={i === sharesPerPage && 'selected'}>{i}</option>
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