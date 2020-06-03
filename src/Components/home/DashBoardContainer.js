import React from 'react';
import styled from 'styled-components';
import HomeDashboardMyProfile from '../home/MyProfile/MyProfile';
import MyPossessionsContent from '../home/MyPossessions/MyPossessionsContent';

const MainContainer = styled.div`
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    background-color: #F6FAFB;
    height: fit-content;
    width: 100%;
    @media (max-width: 768px) {
        display: inline-block;
    }
`;

const SubContainer = styled.div`
    min-height: 100%;
    width: 40%;
    background-color: white;
    border-radius: 10px;
    @media (max-width: 768px) {
        height: 50%;
        width: 90%;
        margin:auto;
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