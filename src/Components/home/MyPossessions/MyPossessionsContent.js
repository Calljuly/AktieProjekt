import React from 'react';
import BranchCard from './BranschCard';
import styled from 'styled-components';

let total = 412244;

let array = [{amount: 32244, color: '#5B74FF', branch: 'Byggsektorn'}, 
{amount: 60000, color: '#FD397A', branch: 'Medtech'}, 
{amount: 120000, color: '#34BFA3', branch: 'Fintech'}, 
{amount: 140000, color: '#3C4368', branch: 'Industri X'}, 
{amount: 60000, color: '#EBEDF2', branch: 'Övrigt'}];

let items = array.map(element => {
  let css = {
    backgroundColor: element.color, 
    width: ((element.amount / total) * 100) + '%'
  };

  return (<div className = 'result' style = {css}></div>);

});
  
const TitleButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    border-radius: 5px;
    background-color: rgb(70, 67, 67);
    color: white;
    border: none;
    padding: 1em;
    @media (max-width: 768px) {
        padding: 0.2em;
    }
`;

const Main = styled.div`
    margin: 0.5em;
    padding: 2em;
`;

const Total = styled.span`
    font-size: 38px;
    color: #3C4368;
`;

const LastUpdated = styled.span`
    font-size: 13px;
    color: #A1A8C3;
    margin-left: 15px;

`;

const TotalContainer = styled.p`
    margin: 35px 0px;
    /* margin-left: 0px; */

`;

function MyPossessionsContent() {
  return (
    <Main>
        <TitleButtonContainer>
                <p><strong>Mitt innehav</strong></p>
                <Button>Min Portfölj</Button>
        </TitleButtonContainer>
        <TotalContainer><Total>{total} SEK</Total><LastUpdated>Uppdaterad: {new Date(document.lastModified).toDateString()}</LastUpdated></TotalContainer>
      <div className = "container">
          {items}
          
      </div>
      <br/><br/>
      {array.map(i => {
        return <BranchCard amount = {i.amount} 
                boxColor = {i.color}
                branch = {i.branch}/>
      })}
      
    </Main>
  );
}

export default MyPossessionsContent;