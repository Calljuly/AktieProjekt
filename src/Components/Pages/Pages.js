import React from 'react';
import PageTitle from './PageTitle';
import MessageBox from './MessegeBox';
import StartPage from './StartPage/StartPage';
import SettingsPage from './SettingsPage/SettingsPage';
import BriefcasePage from './BriefcasePage/BriefcasePage';
import {MainDivStyle, HeaderContainer, DashBoardContainer} from './Styles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SideMenu from '../SideMenu/SideMenu';

const Pages = ({username, setUserName}) =>{

    return (
      <BrowserRouter>
      <div>
      
      <SideMenu setUserName={setUserName} />
      <Switch>
        <Route exact path="/">
          <MainDivStyle>
            <HeaderContainer>
              <PageTitle head="Hem"/>
              <MessageBox username={username}/>
            </HeaderContainer>
            <DashBoardContainer>
              <StartPage username={username}/>
            </DashBoardContainer>
          </MainDivStyle>
        </Route>

        <Route path="/portfolio">
          <MainDivStyle>
            <HeaderContainer>
              <PageTitle head="Portfolio"/>
            </HeaderContainer>
            <DashBoardContainer>
              <BriefcasePage username={username}/>
            </DashBoardContainer>
          </MainDivStyle>
        </Route>

        <Route path="/settings">
          <MainDivStyle>
            <HeaderContainer>
              <PageTitle head="Settings"/>
            </HeaderContainer>
            <DashBoardContainer>
              <SettingsPage username={username} setUserName = {setUserName}/>
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