import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const OptionsImgStyle = styled.img`
margin-right: 10px;
`;

export const LogOutStyle = styled.div`
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
justify-content:center;
`;
export const SideMenuStyle = styled.div`
display:flex;
flex-direction:column;
background-color: #3C3C3B;
position: fixed;
width: 20%;
height: 100%;
float: left;
`;
export const LoggoStyle = styled.img`
padding: 5%;
padding-top: 50px;
float: left;
width: 80%;
`;

export const OptionsStyle = styled.button`
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
    font-size: 1rem;
}
`;
export const SideMenuOptions= styled(NavLink)`
    text-decoration: none;
    background-color: #363636;
    color: #C9B791;
    border: none;
    font-size: 1rem;
    width: 100%;
    text-align: left;
    padding: 20px;
    opacity: 1;

    &:hover,
    &.active,
    &:active{
    background-color: #292929;
    color: #FDCC6B};

`;

export const SideMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#363636;
    text-align: left;
`;

  

  

  
  

