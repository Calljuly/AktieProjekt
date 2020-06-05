import React from 'react';
import BranchCard from './BranschCard';
import {TitleButtonContainer, Button, Main, Total, LastUpdated, TotalContainer} from './StyleMyPossessions';
import Briefcase from '../../../Data/Briefcase.json';


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