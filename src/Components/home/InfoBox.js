import React from 'react'
import styled from 'styled-components'

const Infobox = (props) => {

    const InfoBoxStyle = styled.div`
    background-color: #FFD98D;
    font-size: x-large;
    padding: 20px;
    padding-left: 20px;
    width: 95%;
    float: left; 
    margin: 40px;
    margin-top:20px;
    text-align: left;
     `;

    return (
        <InfoBoxStyle>
            <p>{props.text}</p>
        </InfoBoxStyle>)
}
export default Infobox;