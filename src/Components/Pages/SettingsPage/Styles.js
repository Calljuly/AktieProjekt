import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


export const Form = styled.form`
    width: 100%;
`;

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const PaddedContainer = styled.div`
    width: 100%;
    margin-bottom: 1em;

`;

export const PaddedContainerRightMargin = styled(PaddedContainer)`
    margin-right: 1em;

`;

export const Label = styled.label `
    display: block;
`;

export const Input = styled.input `
    width:100%;
    padding: 0.4em;
    border-radius: 4px;
    border: 1px solid #EBEDF2;

`;
export const Main = styled.div`
    width: 50%;
    padding: 15px;
    text-align: left;
`;

export const Button = styled.button`
    background-color: #FDCC6B;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 1em;
    margin-top: 0.1em;
`;
export const ContainerButton = styled.div`
    display: flexbox;
    border-top: 1px solid #EBEDF2;
    background-color: white;
    justify-content: flex-end;
    padding-top: 10px;
    `;
export const MainDashBoard = styled.div`
    color: #3C4368;
    border-radius: 5px;
    background-color: #ffffff;
    width: 100%;
    @media (max-width: 768px) {
        display: inline-block;
    }
`;
export const ButtonNavBar = styled.button`
    border: none;
    border-bottom: 1px solid #EBEDF2;
    font-size: 1em;
    background-color: white;
    padding: 1em;

    &:hover
    {
        color:#FDCC6B;
        border-bottom: 1px solid #FDCC6B;
    }
`;
export const NavBarContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #EBEDF2;
    background-color: white;
`;

export const NavLinkSettings = styled(NavLink)`
border: none;
border-bottom: 1px solid #EBEDF2;
font-size: 1em;
background-color: white;
padding: 1em;
text-decoration:none;

&:link,
&:visited
{
    color: grey;
}

&:hover,
&.active
{
    color:#FDCC6B;
    border-bottom: 1px solid #FDCC6B;
}

`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 20px 0px;
    font-size: 14px;
    color: #3D4465;
`;

export const StyledTable = styled.table`
    text-align: left;
    
`;

export const GrayP = styled.p`
    color: #A1A8C3;
    font-size: 13px;
`;

export const Link = styled.a`
    color: #FDCC6B;
`;

export const StyledInput = styled.input`
    border: 1px solid #DFE2EA;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin: 0px;

    :checked{
        background-color: darkgray;
        border: 1px solid #e8e8e8;
        
    }
`;

export const StyledLabel = styled.label`
    margin: 10px;
    margin-right: 40px;
    vertical-align: center;
    line-height: 100%;
    
`;

export const PreferenceContainer = styled.div`
    width: 100%;
    height: 500px;
    padding: 40px;
    overflow: auto;
  `;
