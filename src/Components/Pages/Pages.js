import React from 'react';
import PageTitle from './PageTitle';
import MessageBox from './MessegeBox';
import StartPage from './StartPage/StartPage';
import SettingsPage from './SettingsPage/SettingsPage';
import BriefcasePage from './BriefcasePage/BriefcasePage';
import {MainDivStyle, HeaderContainer, DashBoardContainer} from './Styles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SideMenu from '../SideMenu/SideMenu';

const Pages = ({user}) =>{

    return (
      <BrowserRouter>
      <div>

      <SideMenu/>
      
      <Switch>
        <Route exact path="/">
          <MainDivStyle>
            <HeaderContainer>
              <PageTitle head="Hem"/>
              <MessageBox user={user}/>
            </HeaderContainer>
            <DashBoardContainer>
              <StartPage user={user}/>
            </DashBoardContainer>
          </MainDivStyle>
        </Route>

        <Route path="/portfolio">
          <MainDivStyle>
            <HeaderContainer>
              <PageTitle head="Portfolio"/>
            </HeaderContainer>
            <DashBoardContainer>
              <BriefcasePage user={user}/>
            </DashBoardContainer>
          </MainDivStyle>
        </Route>

        <Route path="/settings">
          <MainDivStyle>
            <HeaderContainer>
              <PageTitle head="Settings"/>
            </HeaderContainer>
            <DashBoardContainer>
              <SettingsPage user={user}/>
            </DashBoardContainer>
        </MainDivStyle>
        </Route>
        
        <Route>
          <h1>404 Not found</h1>
        </Route>

      </Switch>
      </div>
    </BrowserRouter>
  )
}
export default Pages;