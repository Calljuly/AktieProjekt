import React from 'react';
import styled from 'styled-components';
import PortfolioTable from './PortfolioTable';

const Main = styled.div`
    min-width: 100%;
    min-height: 100%;
    background-color: white;
    border-radius: 5px;
`;

const PortfolioDashboard = () => {
    return(
        <Main>
            <PortfolioTable/>
        </Main>
    )
}

export default PortfolioDashboard;