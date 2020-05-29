import React, {useState} from 'react';
import './App.css';
import Meny from './Components/SidoMeny/SideMenu'
import Main from './Components/home/MainContentComponent'

function App() {
  const [date, setDate] = useState({
    date1 : '2020-05-28'
  })
  const [homeClicked, changeHomeState] = useState(true)
  const [portfolioClicked, changePortfolioState] = useState(false)
  const [settingsClicked, changeSettingsState] = useState(false)
  const show = null;

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

  return (
    <div className="App">
    <Main Date={date.date1}
    homeScreen={homeClicked}
    portfolioScreen={portfolioClicked}
    settingsScreen={settingsClicked}/>
    <Meny 
    changeHome={homeButtonClicked}
    changePortfolio={portfolioButtonClicked}
    changeSettings={settingsButtonClicked}/>
    </div>
  );
}

export default App;
