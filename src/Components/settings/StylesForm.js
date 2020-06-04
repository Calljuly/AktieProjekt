import React from 'react'
import styled from 'styled-components'

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