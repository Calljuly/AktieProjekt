import React from 'react'
import Header from './Header'
import InfoBox from './InfoBox'

const maincomponent = (props) =>{

    const textStart = 'Välkommen Magnus! Ditt innehav blev senast uppdaterad ';
    const textEnd = '. Ta gärna en titt!'
    const fullText = textStart.concat( props.Date, textEnd)
    
    return (
        <div id="mainContent">
            <Header head="Hem"></Header>
            <InfoBox text={fullText} ></InfoBox>
        </div>
        )
}
export default maincomponent;