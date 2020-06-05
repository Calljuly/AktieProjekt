import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid #DFE2EA;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin: 0px;

    :checked{
        background-color: darkgray;
        border: 1px solid #e8e8e8;
        
    }
`;

const StyledLabel = styled.label`
    margin: 10px;
    margin-right: 40px;
    vertical-align: center;
    line-height: 100%;
    
`;



const PreferenceItem = ({name, check, handleChange}) => {
    return (
        <React.Fragment>
            <td>
                <StyledInput 
                    defaultChecked = {check}
                    type = "checkbox" 
                    name = {name}
                    id = {name}
                    onChange = {(e) => handleChange(e, name)}
                    >
                </StyledInput>
            </td>

            <td>
                <StyledLabel 
                    htmlFor = {name}>{name}
                </StyledLabel>
            </td>
        </React.Fragment>
    )
}

export default PreferenceItem
