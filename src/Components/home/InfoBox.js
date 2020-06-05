import React from 'react'
import {InfoBoxStyle} from './StylesMain'

const Infobox = (props) => {

    return (
        <InfoBoxStyle>
            <p>{props.text}</p>
        </InfoBoxStyle>)
}
export default Infobox;