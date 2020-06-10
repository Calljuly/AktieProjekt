import React from 'react';
import {IndustryName,Companies, SEK, Amount, IndustryCardDiv, LeftSubcontainer, ColorBox } from './Styles';

const IndustryCard = ({industry, amount, boxColor, companies}) =>{
    let colorStyle = {
        backgroundColor: boxColor};
    
        const listSomeCompanies = () =>{
        
            if (companies.length > 1){
                return companies[0].company + ", " + companies[1].company + ((companies.length - 2) === 0 ? "" : (" +" + (companies.length - 2)));
            }
            else{
                return companies[0].company;
            }
            
        }

    return (
        
        <IndustryCardDiv>
            <LeftSubcontainer>
                <ColorBox style = {colorStyle}></ColorBox>
                <p>
                    <IndustryName>{industry}</IndustryName> 
                    <br/> 
                    <Companies>{listSomeCompanies()}</Companies>
                </p>          
            </LeftSubcontainer>
            <p>
                <Amount>{amount}</Amount>
                <SEK> SEK</SEK>
            </p>
        </IndustryCardDiv>
    )
}

export default IndustryCard