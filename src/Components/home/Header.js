import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.h1`
color: #656565;
opacity: 1;
float: left;
margin: 40px;
margin-bottom: 10px;
font-family: 'Poppins-Medium';
`;

const Header = (props) => {
        
        return (
                <div>
                        <HeaderStyle>{props.head}</HeaderStyle>
                </div>
                )
}                      
export default Header;