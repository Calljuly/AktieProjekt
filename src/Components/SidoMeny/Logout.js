import React from 'react'
import LogOutPic from '../../images/logout.svg'
import styled from 'styled-components'

const OptionsImgStyle = styled.img`
margin-right: 10px;
`;

const LogOutStyle = styled.div`
display: flex;
color: #C9B791;
width: 60%;
text-align: center;
opacity: 1;
padding: 2%;
font-size: 1rem;
position: absolute;
left: 20%;
bottom: 4%;
border-top: 1px solid #C9B791;
`;

const LogOut = () => {
    
    return (
        <LogOutStyle>
        <OptionsImgStyle src={LogOutPic} alt="Log out "/>
            <p>Logga ut</p>
        </LogOutStyle>
        )
    }
export default LogOut;