import React from 'react'
import {StyledInput, StyledLabel} from '../Styles'

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
