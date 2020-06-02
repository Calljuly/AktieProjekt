import React from 'react';
import styled from 'styled-components';
import HomeDashboardMyProfile from '../home/MyProfile/MyProfile';

const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: grey;
    height: 100%;
    width: 100%;
`;

const SubContainer = styled.div`
    height: 90%;
    width: 40%;
    background-color: white;
`;

const HomeDashBoardContainer = ({person}) =>{
    return(
        <MainContainer>
        <SubContainer>
            <HomeDashboardMyProfile person={person}/>
        </SubContainer>
        <SubContainer>
            <HomeDashboardMyProfile person={person}/>
        </SubContainer>
        </MainContainer>
    )
}

export default HomeDashBoardContainer;