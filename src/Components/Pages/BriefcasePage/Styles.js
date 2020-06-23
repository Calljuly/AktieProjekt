import styled from 'styled-components';

export const Main = styled.div`
    min-width: 100%;
    min-height: 100%;
    background-color: white;
    border-radius: 5px;
`;

export const Button = styled.button`
    background-color: #FEEBC4;
    border: none;
    margin: 1px;
    padding: 10px;
`;

export const P = styled.p`
    margin: 1px;
    padding: 10px;
`;

export const TableContainer = styled.div`
    padding: 1em;
    max-height: 400px;
    overflow:scroll;
    overflow-x: hidden;
`;

export const Table = styled.table`
    min-width: 100%;
    text-align:left;
    font-size:1em;

`;

export const Th = styled.th`
    color: #A1A8C3;
    padding-bottom: 1.25em;

`;

export const Td = styled.td`
    color: #3C3C3B;
    border-bottom: 1px solid #EEF3FF;
    padding: 0.25em;
`;

export const ButtonContainer = styled.div`
    width: 80%;
    padding: 10px;
    display: flex;
    bottom: 5px;
    justify-content: space-between;
    position: fixed;
    left: 20%;
    bottom: 0;
`;

export const SectionBtnCont = styled.div`
    display: inline-flex;
`;

export const Select = styled.select`
    background-color:#FEEBC4;
    border:none;
    padding:10px;
`;

export const Option = styled.option`
    background-color:white;
`;

export const NavigatingButton = styled(Button)`
    background-color: ${props => props.selected ? "#FDCC6B" : "white"};
    display: ${props => props.shouldDisplay ? "block" : "none"};

`;
