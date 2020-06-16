import React from 'react';
import {MainContainer, SubContainer} from '../Styles';
import Profile from './Profile/Profile';
import Possessions from './Possessions/Possessions';

const StartPage = ({user}) =>{
    return(
        <MainContainer>
        <SubContainer>
            <Profile user={user}/>
        </SubContainer>
        <SubContainer>
            <Possessions/>
        </SubContainer>
        </MainContainer>
    )
}

export default StartPage;