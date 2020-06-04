import React from 'react'
import styled from 'styled-components'

const InfoBoxStyle = styled.div`
/* display:block; */
background-color: #FFD98D;
border-radius: 5px;
font-size: 1em;
padding: 1em;

/* padding-left: 20px; */
width: 100%;
/* float: left;  */
/* margin: 15px; */
/* margin-top:20px; */
/* text-align: left; */
 `;

const Infobox = (props) => {

    return (
        <InfoBoxStyle>
            <p>{props.text}</p>
        </InfoBoxStyle>)
}
export default Infobox;