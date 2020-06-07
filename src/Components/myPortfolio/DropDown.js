import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const DropDown = (props) => {

    const handleChange = () =>{
        const e = document.getElementById("sharesPerPage");
        const num = e.options[e.selectedIndex].text;
        const numAsNum = parseInt(num);
        console.log(numAsNum);
        props.updateSharesPerPage(numAsNum);
        props.updateLastButton(Math.ceil(props.shares.length/numAsNum))
        

    }
    
    return (
        <form id='sharesPerPageForm'>
            <select name="sharesPerPage" id="sharesPerPage" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2" >2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4" selected="selected">5</option>
            </select>
        </form>
        
    )
}

export default DropDown