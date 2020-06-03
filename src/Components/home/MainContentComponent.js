import React from 'react';
import Header from './Header';
import InfoBox from './InfoBox';
import HomeDashBoardContainer from '../home/DashBoardContainer';
import SettingsDashBoardContainer from '../settings/DashBoardContainer';
import styled from 'styled-components'

  const MainDivStyle = styled.div`
  background-color: #F6FAFB;
  width: 80%;
  min-height: 100%;
  position: absolute;
  left: 20%;
  `;

const DashBoardContainer = styled.div`
  min-height:90%;
  min-width:90%;
  margin:15px;
`;

const MainComponent = (props) =>{

    const textStart = 'Välkommen Magnus! Ditt innehav blev senast uppdaterad ';
    const textEnd = '. Ta gärna en titt!'
    const fullText = textStart.concat( props.Date, textEnd)

    const ShowContent = () => {
        if(props.homeScreen){ 
          return  (
            <React.Fragment>
              <HomeDashBoardContainer person={props.person}/> 
            </React.Fragment>
          );
        }
        else if(props.portfolioScreen){
          return;
        }
        else if(props.settingsScreen){
          return  (
            <React.Fragment>
              <SettingsDashBoardContainer person={props.person}/>
            </React.Fragment>
          );
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
    
    const displayInfobox = () =>{
      if(props.homeScreen)
        return  <InfoBox text={fullText} ></InfoBox>;
    }
     
    return (
        <MainDivStyle>
          <div>
            <Header head={getTitle()}/>
            {displayInfobox()}
          </div>
          <DashBoardContainer>
            {ShowContent()}
          </DashBoardContainer>
        </MainDivStyle>
        )
}
export default MainComponent;