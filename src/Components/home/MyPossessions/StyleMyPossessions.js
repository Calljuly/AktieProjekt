import styled from 'styled-components'

export const TitleButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    border-radius: 5px;
    background-color: rgb(70, 67, 67);
    color: white;
    border: none;
    padding: 1em;
    @media (max-width: 768px) {
        padding: 0.2em;
    }
`;

export const Main = styled.div`
    margin: 0.5em;
    padding: 2em;
`;

export const Total = styled.span`
    font-size: 38px;
    color: #3C4368;
`;

export const LastUpdated = styled.span`
    font-size: 13px;
    color: #A1A8C3;
    margin-left: 15px;

`;

export const TotalContainer = styled.p`
    margin: 35px 0px;
    /* margin-left: 0px; */

`;

export const BranchName = styled.span`
    font-size: 14px;  
    color: #3D4465;
`;

export const Companies = styled.span`
    font-size: 12px;
    color: #A1A8C3;
  `;

export const SEK = styled.span`
font-size: 14px;
color: #A1A8C3;
`;

export const Amount = styled.span`
font-size: 13px;
color: #646C9A;
`;