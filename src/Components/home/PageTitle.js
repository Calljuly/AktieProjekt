import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.h1`
  color: #656565;
  text-align: left;
  font-size: 1.5em;
`;

const PageTitle = (props) => <HeaderStyle>{props.head}</HeaderStyle>;
                  
export default PageTitle;