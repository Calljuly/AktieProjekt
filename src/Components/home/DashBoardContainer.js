import React from 'react';
import styled from 'styled-components';
import HomeDashboardMyProfile from '../home/MyProfile/MyProfile';
import MyPossessionsContent from '../home/MyPossessions/MyPossessionsContent';

const MainContainer = styled.div`
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F6FAFB;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
        display: block;
    }
`;

const SubContainer = styled.div`
    height: 90%;
    width: 40%;
    background-color: white;
    border-radius: 10px;
    @media (max-width: 768px) {
        height: 100%;
        width: 100%;
    }
`;

const HomeDashBoardContainer = ({person}) =>{
    return(
        <MainContainer>
        <SubContainer>
            <HomeDashboardMyProfile person={person}/>
        </SubContainer>
        <SubContainer>
            <MyPossessionsContent/>
        </SubContainer>
        </MainContainer>
    )
}

export default HomeDashBoardContainer;