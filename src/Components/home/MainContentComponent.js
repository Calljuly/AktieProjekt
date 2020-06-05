import React from 'react';
import PageTitle from './PageTitle';
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

const HeaderContainer = styled.div`
  margin: 15px;
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
        if(props.StateMain ===1){ 
          return  (
            <React.Fragment>
              <HomeDashBoardContainer person={props.person}/> 
            </React.Fragment>
          );
        }
        else if(props.StateMain === 2){
          return;
        }
        else if(props.StateMain === 3){
          return  (
            <React.Fragment>
              <SettingsDashBoardContainer person={props.person}/>
            </React.Fragment>
          );
        }
      }
    const getTitle = () => {
        if(props.StateMain ===1){
          return  'Hem';
        }
        else if(props.StateMain ===2){
           
          return 'Portfolio';
        }
        else if(props.StateMain ===3){
            
          return 'Settings';
        }
      }
    
    const displayInfobox = () =>{
      if(props.StateMain === 1)
        return  <InfoBox text={fullText} ></InfoBox>;
    }
     
    return (
        <MainDivStyle>
          <HeaderContainer>
            <PageTitle head={getTitle()}/>
            {displayInfobox()}
          </HeaderContainer>
          <DashBoardContainer>
            {ShowContent()}
          </DashBoardContainer>
        </MainDivStyle>
        )
}
export default MainComponent;