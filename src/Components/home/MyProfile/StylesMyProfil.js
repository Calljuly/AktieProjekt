import styled from 'styled-components'

export const Table = styled.table`
    width:100%;
    padding: 0.5em;
`;

export const Caption = styled.caption`
    width:70%;
    text-align: left;
    color: rgb(170, 167, 167);
    padding: 0.5em;
`;

export const Th = styled.th`
    text-align: left;
`;

export const Td = styled.td`
    text-align: left;
`;

export const Main = styled.div`
    margin: 0.5em;
    padding: 2em;
`;

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

export const ImageSummaryContainer = styled.div`
    display: flex;
`;

export const Container = styled.div`
    text-align: left;
    margin: 1em;
    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const Name = styled.p`
    font-size: 1.25em;
    font-weight: bold;
    margin: 5px;
`;

export const NumbersDescription = styled.p`
    font-size: 0.85em;
    color: rgb(170, 167, 167);
    margin: 5px;
`;

export const Numbers = styled.p`
    margin: 5px;
`;