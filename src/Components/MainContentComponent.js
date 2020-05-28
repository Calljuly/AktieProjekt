import React from 'react'
import Header from './Header'
import InfoBox from './InfoBox'

const maincomponent = () =>{
    
    const text = 'Välkommen Magnus! Ditt innehav blev senast uppdaterad 2020-02-26. Ta gärna en titt!';

    return (
        <div id="mainContent">
            <Header head="Hem"></Header>
            <InfoBox text={text}></InfoBox>
        </div>
        )
}
export default maincomponent;