import React, {useState} from 'react';
import Main from './Components/home/MainContentComponent'
import SideMenu from './Components/SidoMeny/SideMenu'
import './App.css';
import SettingsContext from './Components/SettingsContext'

function App() {
  const [date, setDate] = useState({
    date1 : '2020-05-28'
  })
  const [homeClicked, changeHomeState] = useState(true)
  const [portfolioClicked, changePortfolioState] = useState(false)
  const [settingsClicked, changeSettingsState] = useState(false)
  const [settingOptionsClicked, changeSettingOptionState] = useState(1)

  const settingOptionsProfilClicked = () =>{
        
        changeSettingOptionState(1);
  }
  const settingOptionsPasswordClicked = () =>{
        
    changeSettingOptionState(2);
  }
  const settingOptionsReferenceClicked = () =>{
        
    changeSettingOptionState(3);
  }

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
    fName: 'Lisa',
    lName: 'Nilsson',
    'social security number': '730605-9090',
    mail: 'john@gmail.com',
    adress: 'trätorget',
    zipCode: '456123',
    city: 'Göteborg',
    phone: '07001010101',
    preferences: ['restaurang', 'djurhållning', 'it', 'Hitta nemo']
  }

  
  return (
    <div className="App">
      <SideMenu 
      changeHome={homeButtonClicked}
      changePortfolio={portfolioButtonClicked}
      changeSettings={settingsButtonClicked}/>

      <SettingsContext.Provider value= {{
        myProfilClicked : settingOptionsProfilClicked,
        changePassClicked : settingOptionsPasswordClicked,
        referenceClicked : settingOptionsReferenceClicked,
        currentStateOfSettings : settingOptionsClicked
      }}>

      <Main Date={date.date1}
      homeScreen={homeClicked}
      portfolioScreen={portfolioClicked}
      settingsScreen={settingsClicked}
      person={dummyProfile}/>
      
      </SettingsContext.Provider>
    
    </div>
  );
}

export default App;
