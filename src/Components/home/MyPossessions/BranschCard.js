import React from 'react';
import styled from 'styled-components';

const BranchName = styled.span`
    font-size: 14px;  
    color: #3D4465;
`;

const Companies = styled.span`
    font-size: 12px;
    color: #A1A8C3;
  `;

const SEK = styled.span`
font-size: 14px;
color: #A1A8C3;
`;

const Amount = styled.span`
font-size: 13px;
color: #646C9A;
`;


const BranchCard = ({branch, amount, boxColor, companies}) =>{
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
        
        <div className = "category">
            <div className = "left">
                <div className = "colorBox" style = {colorStyle}></div>
                <p>
                    <BranchName>{branch}</BranchName> 
                    <br/> 
                    <Companies>{listSomeCompanies()}</Companies>
                </p>          
            </div>
            <p>
                <Amount>{amount}</Amount>
                <SEK> SEK</SEK>
            </p>
        </div>
    )
}

export default BranchCard