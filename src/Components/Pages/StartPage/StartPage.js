import React from 'react';
import {MainContainer, SubContainer} from '../Styles';
import Profile from './Profile/Profile';
import Possessions from './Possessions/Possessions';

const StartPage = ({userName}) =>{
    return(
        <MainContainer>
        <SubContainer>
            <Profile userName={userName}/>
        </SubContainer>
        <SubContainer>
            <Possessions userName = {userName}/>
        </SubContainer>
        </MainContainer>
    )
}

export default StartPage;