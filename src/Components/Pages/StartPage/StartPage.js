import React from 'react';
import {MainContainer, SubContainer} from '../Styles';
import Profile from './Profile/Profile';
import Possessions from './Possessions/Possessions';

const StartPage = ({username}) =>{
    return(
        <MainContainer>
        <SubContainer>
            <Profile username={username}/>
        </SubContainer>
        <SubContainer>
            <Possessions username = {username}/>
        </SubContainer>
        </MainContainer>
    )
}

export default StartPage;