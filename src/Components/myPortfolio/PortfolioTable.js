import React from 'react';
import styled from 'styled-components';


const Table = styled.table`
    min-height: 100%;
    min-width: 100%;
`;

const Th = styled.th`
    text-align:left;
    font-weight: lighter;
    
`;

const PortfolioTable = ({person}) => {
    const addRows = () =>{
        console.log('hej');
    }

    return (
        <Table>
            <tr>
                <Th>Företag</Th>
                <Th>Innehav</Th>
                <Th>Antal aktier</Th>
                <Th>Industri</Th>
            </tr>
            {addRows()}
        </Table>
    )
}

export default PortfolioTable;