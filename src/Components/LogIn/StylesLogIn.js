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
height:auto;
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
    width:100px;
    height:auto;
    padding:0.7em;
    margin:1em;
    border-radius:4px; 
    border: 1px solid #EBEDF2;
    @media (max-width: 500px) {
        display:block;
        width:80%;
        margin:auto;
        margin-top:4px;
    }
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