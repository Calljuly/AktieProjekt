import React, {useState} from 'react';
import Main from './Components/home/MainContentComponent'
import SideMenu from './Components/SidoMeny/SideMenu'
import './App.css';
import PersonalInfo from './Data/PersonalInformation.json'

function App() {
  const [date, setDate] = useState({
    date1 : '2020-05-28'
  })
  const [homeClicked, changeHomeState] = useState(true)
  const [portfolioClicked, changePortfolioState] = useState(false)
  const [settingsClicked, changeSettingsState] = useState(false)
 

  const homeButtonClicked = () =>{
    if(!homeClicked){
      changeHomeState(true);
      changePortfolioState(false);
      changeSettingsState(false);
    }
  }
  const portfolioButtonClicked = () =>{
    if(!portfolioClicked){
      changePortfolioState(true);
      changeHomeState(false);
      changeSettingsState(false);

    }
  }
  const settingsButtonClicked = () =>{
    if(!settingsClicked){
      changeSettingsState(true);
      changeHomeState(false);
      changePortfolioState(false);
    }
  }

  const dummyProfile = PersonalInfo;

  return (
    <div className="App">
      <SideMenu
      changeHome={homeButtonClicked}
      changePortfolio={portfolioButtonClicked}
      changeSettings={settingsButtonClicked}/>

      <Main Date={date.date1}
      homeScreen={homeClicked}
      portfolioScreen={portfolioClicked}
      settingsScreen={settingsClicked}
      person={dummyProfile}/>
    </div>
  );
}

export default App;
