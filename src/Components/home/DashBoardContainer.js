import React from 'react';
import {MainContainer, SubContainer} from './StylesMain';
import HomeDashboardMyProfile from '../home/MyProfile/MyProfile';
import MyPossessionsContent from '../home/MyPossessions/MyPossessionsContent';

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