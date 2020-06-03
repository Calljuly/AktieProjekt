import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.h1`
/* display:block; */
color: #656565;
/* opacity: 1; */
/* float: left; */
text-align: left;
margin: 15px;
/* margin-bottom: 10px; */
/* font-family: 'Poppins-Medium'; */
`;

const Header = (props) => <HeaderStyle>{props.head}</HeaderStyle>;
                  
export default Header;