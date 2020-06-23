import React from 'react';
import PageTitle from './PageTitle';
import MessageBox from './MessegeBox';
import StartPage from './StartPage/StartPage';
import SettingsPage from './SettingsPage/SettingsPage';
import BriefcasePage from './BriefcasePage/BriefcasePage';
import {Main, HeaderContainer, DashBoardContainer} from './Styles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SideMenu from '../SideMenu/SideMenu';

const Pages = ({userName, setUserName}) =>{

    return (
      <BrowserRouter>
      <div>
      
      <SideMenu setUserName={setUserName} />
      <Switch>
        <Route exact path="/">
          <Main>
            <HeaderContainer>
              <PageTitle head="Hem"/>
              <MessageBox userName={userName}/>
            </HeaderContainer>
            <DashBoardContainer>
              <StartPage userName={userName}/>
            </DashBoardContainer>
          </Main>
        </Route>

        <Route path="/portfolio">
          <Main>
            <HeaderContainer>
              <PageTitle head="Portfolio"/>
            </HeaderContainer>
            <DashBoardContainer>
              <BriefcasePage userName={userName}/>
            </DashBoardContainer>
          </Main>
        </Route>

        <Route path="/settings">
          <Main>
            <HeaderContainer>
              <PageTitle head="Inställningar"/>
            </HeaderContainer>
            <DashBoardContainer>
              <SettingsPage userName={userName} setUserName = {setUserName}/>
            </DashBoardContainer>
        </Main>
        </Route>
        
        <Route>
          <h1 style = {{margin: '0px'}}>Error 404</h1>
        </Route>

      </Switch>
      </div>
    </BrowserRouter>
  )
}
export default Pages;