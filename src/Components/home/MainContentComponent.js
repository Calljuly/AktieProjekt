import React from 'react';
import PageTitle from './PageTitle';
import InfoBox from './InfoBox';
import HomeDashBoardContainer from '../home/DashBoardContainer';
import SettingsDashBoardContainer from '../settings/DashBoardContainer';
import PortfolioDashboard from '../myPortfolio/Dashboard';
import {MainDivStyle, HeaderContainer, DashBoardContainer} from './StylesMain'
import {Switch, Route} from 'react-router-dom'

const MainComponent = (props) =>{

    const textStart = 'Välkommen Magnus! Ditt innehav blev senast uppdaterad ';
    const textEnd = '. Ta gärna en titt!'
    const fullText = textStart.concat( props.Date, textEnd)

    return (
      <Switch>
        <Route exact path="/" render={() => {
          return <MainDivStyle>
          <HeaderContainer>
            <PageTitle head="Hem"/>
            <InfoBox text={fullText} ></InfoBox>;
          </HeaderContainer>
          <DashBoardContainer>
            <HomeDashBoardContainer person={props.person}/> 
          </DashBoardContainer>
        </MainDivStyle>
        }} />
        <Route path="/portfolio" render={() => {
          return <MainDivStyle>
          <HeaderContainer>
            <PageTitle head="Portfolio"/>
            
          </HeaderContainer>
          <DashBoardContainer>
          <PortfolioDashboard/>
          </DashBoardContainer>
        </MainDivStyle>
        }} />
        <Route path="/settings" render={() => {
          return <MainDivStyle>
          <HeaderContainer>
            <PageTitle head="Settings"/>
            
          </HeaderContainer>
          <DashBoardContainer>
          <SettingsDashBoardContainer person={props.person}/>
          </DashBoardContainer>
        </MainDivStyle>
        }} />

      </Switch>
        
        )
}
export default MainComponent;