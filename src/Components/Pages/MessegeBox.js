import React from 'react'
import {InfoBoxStyle} from './Styles'

const Messagebox = (props) => {

    return (
        <InfoBoxStyle>
            <p>{props.text}</p>
        </InfoBoxStyle>)
}
export default Messagebox;