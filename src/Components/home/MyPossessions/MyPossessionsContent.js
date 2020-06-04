import React from 'react';
import BranchCard from './BranschCard';
import styled from 'styled-components';
import Briefcase from '../../../Data/Briefcase.json';

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

let briefcase = Briefcase;

const getTotal = (briefcase2) => {
  let total = 0;
  
  briefcase2.map(i =>{
    total += getTotalOfIndustry(i.arrayOfCompanies);
  })

  return total;
}

const getTotalOfIndustry = (industry) =>{

  let total = 0;

  industry.map(i =>{
    i.arrayOfShares.map(j =>{
      total += j.totalWorth;
    })
  }) 

  return total;
}

let total = getTotal(briefcase);


let items = briefcase.map(i => {
  let industryAmount = getTotalOfIndustry(i.arrayOfCompanies);

  let css = {
    backgroundColor: i.color, 
    width: ((industryAmount / total) * 100) + '%'
  };

  return (<div className = 'result' style = {css}></div>);

});
  
let cards = briefcase.map(i => {
   return <BranchCard amount = {getTotalOfIndustry(i.arrayOfCompanies)} 
          boxColor = {i.color}
          branch = {i.industry}
          companies = {i.arrayOfCompanies}
          />
 });

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
      {cards}
      
    </Main>
  );
}

export default MyPossessionsContent;