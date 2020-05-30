import React, {useState} from 'react'
import Header from './Header'
import InfoBox from './InfoBox'

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
        </div>
        )
}
export default MainComponent;