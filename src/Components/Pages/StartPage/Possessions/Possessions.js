import React, {useEffect, useState} from 'react';
import IndustryCard from './IndustryCard';
import {Main, Button, TitleButtonContainer} from '../CommonStyles';
import {Total, LastUpdated, TotalContainer, IndustryBars} from './Styles';

function Possessions({username}) {

  const [briefcase, setBriefcase] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4001/users/${username}`)
    .then(response => response.json())
    .then(data => {
      
      data.Briefcase && setBriefcase(JSON.parse(data.Briefcase));
      setLoading(false);
    });
    }, []);

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
    
    let total = !loading && getTotal(briefcase);
    
    
    const renderIndustryBars = !loading && briefcase.map((i, index) => {
          let industryAmount = getTotalOfIndustry(i.arrayOfCompanies);
        
          let css = {
            backgroundColor: i.color, 
            width: ((industryAmount / total) * 100) + '%'    
          };
        
          return (<div key ={index} className = 'result' style = {css}></div>);
        
        });
           
    
      
    const industryCardList = () => {

      if (loading){
        return <h1>Loading...</h1>
      }
      else if (briefcase.length > 1){
        return briefcase.map((i, index) => {
          return <IndustryCard key = {'ic' + index} amount = {getTotalOfIndustry(i.arrayOfCompanies)} 
                 boxColor = {i.color}
                 industry = {i.industry}
                 companies = {i.arrayOfCompanies}
                 />
        });
      }
      else{
        return <h1>Inget innehav tillagt ännu</h1>
      }
    }

  return (
    <Main>
        <TitleButtonContainer>
                <p><strong>Mitt innehav</strong></p>
                <Button to="/portfolio">Min Portfölj</Button>
        </TitleButtonContainer>
        <TotalContainer><Total>{!loading && total} SEK</Total><LastUpdated>Uppdaterad: {new Date(document.lastModified).toDateString()}</LastUpdated></TotalContainer>
      <IndustryBars>
          {!loading && renderIndustryBars}
      </IndustryBars>

      <br/><br/>
      {industryCardList()}
      
    </Main>
  );
}

export default Possessions;