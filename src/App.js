import React, {useState} from 'react';
import './App.css';
import Meny from './Components/SidoMeny/SideMenu'
import Main from './Components/SidoMeny/MainContentComponent'

function App() {
  const [date, setDate] = useState({
    date1 : '2020-05-28'
  })
  const [homeClicked, changeHomeState] = useState(false)
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

  return (
    <div className="App">
    <Meny 
    changeHome={homeButtonClicked}
    changePortfolio={portfolioButtonClicked}
    changeSettings={settingsButtonClicked}
    >
    </Meny>
    <Main homeScreen={homeClicked}
    portfolioScreen={portfolioClicked}
    settingsScreen={settingsClicked}></Main>
    </div>
  );
}

export default App;
