import React, {useState, useEffect} from 'react';
import PageTitle from './PageTitle';
import MessageBox from './MessegeBox';
import StartPage from './StartPage/StartPage';
import SettingsPage from './SettingsPage/SettingsPage';
import BriefcasePage from './BriefcasePage/BriefcasePage';
import {MainDivStyle, HeaderContainer, DashBoardContainer} from './Styles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SideMenu from '../SideMenu/SideMenu';

const Pages = ({user}) =>{

  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);


    async function fetchUserInfo () {
      const response = await fetch(`http://localhost:4001/customer/${user}`);
      const json = await response.json();
      
      setUserInfo(JSON.parse(json.PersonalInformation));
      setLoading(false);

    }

    useEffect( () => {
      fetchUserInfo();
    }, []);

    return (
      <BrowserRouter>
      <div>

      <SideMenu/>
      
      <Switch>
        <Route exact path="/">
          <MainDivStyle>
            <HeaderContainer>
              <PageTitle head="Hem"/>
              <MessageBox user={userInfo}></MessageBox>;
            </HeaderContainer>
            <DashBoardContainer>
            {
              loading ? <p>Loading...</p> : <StartPage person={userInfo}/>
            }
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
            {
              loading ? <p>Loading...</p> : <SettingsPage person={userInfo}/>
            }
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