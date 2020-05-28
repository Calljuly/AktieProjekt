import React from 'react'
import Header from './Header'
import InfoBox from './InfoBox'


const maincomponent = (props) =>{

    const textStart = 'Välkommen Magnus! Ditt innehav blev senast uppdaterad ';
    const textEnd = '. Ta gärna en titt!'
    const fullText = textStart.concat( props.Date, textEnd)

    let title = null;
    const ShowContent = () => {
        if(props.homeScreen){
            title = 'Hem';
          return  <InfoBox text={fullText} ></InfoBox>;
        }
        else if(props.portfolioScreen){
            title = 'Portfolio';
          return  <InfoBox text="Portfolio" ></InfoBox>;
        }
        else if(props.settingsScreen){
            title = 'Settings';
          return  <InfoBox text="Settings eller inställningar" ></InfoBox>
        }
      }
      const getTitle = () => {
        if(props.homeScreen){
           
          return  title = 'Hem';
        }
        else if(props.portfolioScreen){
           
          return   title = 'Portfolio';
        }
        else if(props.settingsScreen){
            
          return  title = 'Settings';
        }
      }

    return (
        <div id="mainContent">
            <Header head={getTitle()}></Header>
            {ShowContent()}
        </div>
        )
}
export default maincomponent;