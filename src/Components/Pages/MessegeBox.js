import React from 'react'
import {InfoBoxStyle} from './Styles'

const Messagebox = ({user, date}) => {

    return (
        <InfoBoxStyle>
            <p>Välkommen {user && user.fName}! Ditt innehav blev senast uppdaterat 2020-05-31. Ta gärna en titt!</p>
        </InfoBoxStyle>)
}
export default Messagebox;