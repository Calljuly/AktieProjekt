import React from 'react'
import styled from 'styled-components'

const InfoBoxStyle = styled.div`
/* display:block; */
background-color: #FFD98D;
border-radius: 5px;
font-size: 1em;
padding: 0.7em;
/* padding-left: 20px; */
width: 95%;
/* float: left;  */
margin: 1em;
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