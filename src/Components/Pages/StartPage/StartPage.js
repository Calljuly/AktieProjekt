import React from 'react';
import {MainContainer, SubContainer} from '../Styles';
import Profile from './Profile/Profile';
import Possessions from './Possessions/Possessions';

const StartPage = ({person}) =>{
    return(
        <MainContainer>
        <SubContainer>
            <Profile person={person}/>
        </SubContainer>
        <SubContainer>
            <Possessions/>
        </SubContainer>
        </MainContainer>
    )
}

export default StartPage;