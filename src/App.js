import React, {useState} from 'react';
import Main from './Components/home/MainContentComponent'
import Meny from './Components/SidoMeny/SideMenu'
import './App.css';
import HomeDashboardMyProfile from './Components/home/MyProfile/MyProfile';



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

  const dummyProfile = {
    name: 'John Doe',
    'social security number': '730605-9090',
    mail: 'john@gmail.com',
    adress: 'trätorget',
    zipCode: '456123',
    city: 'Göteborg',
    preferences: ['restaurang', 'djurhållning', 'it', 'Hitta nemo']
  }

  return (
    <HomeDashboardMyProfile person={dummyProfile}/>
    // <div className="App">
    // <Meny 
    // changeHome={homeButtonClicked}
    // changePortfolio={portfolioButtonClicked}
    // changeSettings={settingsButtonClicked}/>
    // <Main Date={date.date1}
    // homeScreen={homeClicked}
    // portfolioScreen={portfolioClicked}
    // settingsScreen={settingsClicked}/>
    // </div>
  );
}

export default App;
