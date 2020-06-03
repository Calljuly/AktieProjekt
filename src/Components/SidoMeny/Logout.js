import React from 'react'
import LogOutPic from '../../images/logout.svg'
import styled from 'styled-components'

const OptionsImgStyle = styled.img`
margin-right: 10px;
opacity: 1;
`;
const LogOutStyle = styled.div`
color: #C9B791;
width: 25%;
text-align: center;
opacity: 1;
padding: 2%;
font-size: x-large;
position: absolute;
left: 25%;
bottom: 4%;
border-top: 1px solid #C9B791;
`;

const LogOut = () => {
    
    return (
        <LogOutStyle>
            <p><OptionsImgStyle src={LogOutPic} alt="Log out "/>Logga ut</p>
        </LogOutStyle>
        )
    }
export default LogOut;