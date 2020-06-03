import React from 'react';
import Header from './Header';
import InfoBox from './InfoBox';
import HomeDashBoardContainer from '../home/DashBoardContainer';
import styled from 'styled-components'


const dummyProfile = {
  name: 'John Doe',
  'social security number': '730605-9090',
  mail: 'john@gmail.com',
  adress: 'trätorget',
  zipCode: '456123',
  city: 'Göteborg',
  preferences: ['restaurang', 'djurhållning', 'it', 'Hitta nemo']
}
  const MainDivStyle = styled.div`
  display: inline-block;
  background-color: #F6FAFB;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  position: absolute;
  left: 20%;
 
  `;
  const TopDivStyled = styled.div`
  display:flex-box;
  width: 80%;
  `;

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
        <MainDivStyle>
        <TopDivStyled><Header head={getTitle()}/>
        {ShowContent()}</TopDivStyled>
        <HomeDashBoardContainer person={dummyProfile}/>
        </MainDivStyle>
        )
}
export default MainComponent;