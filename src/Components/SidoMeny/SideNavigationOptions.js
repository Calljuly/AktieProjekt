import React from 'react'
import styled from 'styled-components'

const OptionsStyle = styled.button`
background-color: #363636;
color: #C9B791;
border: none;
font-size: 1rem;
width: 100%;
text-align: left;
padding: 20px;
opacity: 1;

&:hover{
background-color: #292929;
color: #FDCC6B;}
@media (max-width: 1000px) {
    font-size 1rem;
}
`;
const OptionsImgStyle = styled.img`
margin-right: 10px;
opacity: 1;
`;

const Options = (props) => {

    return (
        <OptionsStyle onClick={props.change}>
            <OptionsImgStyle src={props.bild} alt="meny button"/>
            {props.Name}
        </OptionsStyle>
    )
}
export default Options;