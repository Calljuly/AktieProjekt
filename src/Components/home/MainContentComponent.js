import React, {useState} from 'react';
import Header from './Header';
import InfoBox from './InfoBox';
import HomeDashBoardContainer from '../home/DashBoardContainer';


const dummyProfile = {
  name: 'John Doe',
  'social security number': '730605-9090',
  mail: 'john@gmail.com',
  adress: 'trätorget',
  zipCode: '456123',
  city: 'Göteborg',
  preferences: ['restaurang', 'djurhållning', 'it', 'Hitta nemo']
}

const MainComponent = (props) =>{

    const textStart = 'Välkommen Magnus! Ditt innehav blev senast uppdaterad ';
    const textEnd = '. Ta gärna en titt!'
    const fullText = textStart.concat( props.Date, textEnd)

    const ShowContent = () => {
        if(props.homeScreen){
            
          return  <InfoBox text={fullText} ></InfoBox>;
        }
        else if(props.portfolioScreen){
          return  <InfoBox text="Portfolio" ></InfoBox>;
        }
        else if(props.settingsScreen){
          return  <InfoBox text="Settings eller inställningar" ></InfoBox>
        }
      }
    const getTitle = () => {
        if(props.homeScreen){
           
          return  'Hem';
        }
        else if(props.portfolioScreen){
           
          return 'Portfolio';
        }
        else if(props.settingsScreen){
            
          return 'Settings';
        }
      }

    return (
        <div id="mainContent">
        <Header head={getTitle()}/>
        {ShowContent()}
        <HomeDashBoardContainer person={dummyProfile}/>
        </div>
        )
}
export default MainComponent;