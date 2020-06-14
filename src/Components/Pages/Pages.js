import React from 'react';
import PageTitle from './PageTitle';
import MessageBox from './MessegeBox';
import StartPage from './StartPage/StartPage';
import SettingsPage from './SettingsPage/SettingsPage';
import BriefcasePage from './BriefcasePage/BriefcasePage';
import {MainDivStyle, HeaderContainer, DashBoardContainer} from './Styles'
import {Switch, Route} from 'react-router-dom'

const Pages = (props) =>{

    const textStart = 'Välkommen Magnus! Ditt innehav blev senast uppdaterad ';
    const textEnd = '. Ta gärna en titt!'
    const fullText = textStart.concat( props.Date, textEnd)

    return (
      <Switch>
        <Route exact path="/">
          <MainDivStyle>
            <HeaderContainer>
              <PageTitle head="Hem"/>
              <MessageBox text={fullText} ></MessageBox>;
            </HeaderContainer>
            <DashBoardContainer>
              <StartPage person={props.person}/> 
            </DashBoardContainer>
          </MainDivStyle>
        </Route>

        <Route path="/portfolio">
          <MainDivStyle>
            <HeaderContainer>
              <PageTitle head="Portfolio"/>
            </HeaderContainer>
            <DashBoardContainer>
              <BriefcasePage/>
            </DashBoardContainer>
          </MainDivStyle>
        </Route>

        <Route path="/settings">
          <MainDivStyle>
            <HeaderContainer>
              <PageTitle head="Settings"/>
            </HeaderContainer>
            <DashBoardContainer>
              <SettingsPage person={props.person}/>
            </DashBoardContainer>
        </MainDivStyle>
        </Route>
        
      </Switch>      
  )
}
export default Pages;