import styled from 'styled-components'

export const LogInContainer = styled.div`
    background-color: #363636;
    margin:auto;
    width:40%;
    height:auto;
    border-radius:15px;
    margin-top:5%;
    padding:10px;
    display:block; 
    justify-content:center;
`;
export const ContentDiv = styled.div`
    background-color: white;
    width:95%;
    margin:auto;
    border-radius:5px;
    padding:5%;
    margin-bottom:3%;
    display:flex-box;
`;
export const LoggoStyle = styled.img`
margin:auto;
padding: 5%;
width: 80%;
height:280px;
`;

export const Form = styled.form`
    margin:auto;
    width:80%;
    
`;
export const Label = styled.label`
    display:block;
`;
export const Input = styled.input `
    width:80%;
    padding: 0.4em;
    border-radius: 4px;
    border: 1px solid #EBEDF2;
`;
export const Button = styled.button`
width:20%;
    dsiplay:block;
    padding:0.7em;
    margin:1em;
    border-radius:4px; 
    border: 1px solid #EBEDF2;
`;
export const P = styled.p`
    text-align: right;
    font-style:italic;
    padding-top:10%;
`;
export const Link = styled.a`
    text-decoration:none;
    &:hover{
        color:darkred;
        font-style:strong;
    }
`;