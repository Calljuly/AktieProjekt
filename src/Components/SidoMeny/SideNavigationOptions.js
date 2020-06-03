import React from 'react'
import styled from 'styled-components'

const Options = (props) => {

    const OptionsStyle = styled.button`
        background-color: #363636;
        color: #C9B791;
        border: none;
        font-size: x-large;
        width: 100%;
        text-align: left;
        padding: 20px;
        opacity: 1;
      
       &:hover{
        background-color: #292929;
        color: #FDCC6B;
    `;
    const OptionsImgStyle = styled.img`
        margin-right: 10px;
        opacity: 1;
    `;

    return (
        <OptionsStyle onClick={props.change}>
            <OptionsImgStyle src={props.bild} alt="meny button"/>
            {props.Name}
        </OptionsStyle>
    )
}
export default Options;