import React from 'react';
import IndustryCard from './IndustryCard';
import {TitleButtonContainer, Button, Main, Total, LastUpdated, TotalContainer, IndustryBars} from './Styles';
import BriefcaseData from '../../../../Data/Briefcase.json';


let briefcase = BriefcaseData;

const getTotal = (briefcase) => {
  let total = 0;
  
  briefcase.map(i =>{
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


let renderIndustryBars = briefcase.map(i => {
  let industryAmount = getTotalOfIndustry(i.arrayOfCompanies);

  let css = {
    backgroundColor: i.color, 
    width: ((industryAmount / total) * 100) + '%'    
  };

  return (<div className = 'result' style = {css}></div>);

});
  
let industryCardList = briefcase.map(i => {
   return <IndustryCard amount = {getTotalOfIndustry(i.arrayOfCompanies)} 
          boxColor = {i.color}
          industry = {i.industry}
          companies = {i.arrayOfCompanies}
          />
 });

function Possessions() {
  return (
    <Main>
        <TitleButtonContainer>
                <p><strong>Mitt innehav</strong></p>
                <Button to="/portfolio">Min Portfölj</Button>
        </TitleButtonContainer>
        <TotalContainer><Total>{total} SEK</Total><LastUpdated>Uppdaterad: {new Date(document.lastModified).toDateString()}</LastUpdated></TotalContainer>
      <IndustryBars>
          {renderIndustryBars}
      </IndustryBars>

      <br/><br/>
      {industryCardList}
      
    </Main>
  );
}

export default Possessions;