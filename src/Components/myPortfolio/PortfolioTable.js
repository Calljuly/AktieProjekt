import React, {useEffect} from 'react';
import styled from 'styled-components';
import BriefCase from '../../Data/Briefcase.json';


const Table = styled.table`
    min-height: 100%;
    min-width: 100%;
    text-align:left;

`;

const Th = styled.th`
    color: #A1A8C3;
    padding: 2%;

`;

const Td = styled.td`
    color: #3C3C3B;
    padding: 2%;
    border-bottom: 1px solid #EEF3FF;
`;


const briefCase = BriefCase;

const PortfolioTable = () => {
    
    const extractBriefCaseInformation = () => {
        let rows = [];
        
        briefCase.map((industry, i) => {
            let rowObj = {
                industry: '',
                company:'',
                innehav: 0,
                numberOfShares: 0

            };
            
            rowObj.industry = industry.industry;
            
            industry.arrayOfCompanies.map(company => {
                rowObj.company = company.company;
                
                company.arrayOfShares.map(shares => {
                    rowObj.innehav += shares.totalWorth;
                    rowObj.numberOfShares += shares.shareAmount;
                })
            })
            
            rows.push(rowObj);
        });
        
        return rows;
    }

    return (
        <Table>
            <thead>
                <tr>
                    <Th>Företag</Th>
                    <Th>Innehav</Th>
                    <Th>Antal aktier</Th>
                    <Th>Industri</Th>
                </tr>
            </thead>
            <tbody>
                {
                    extractBriefCaseInformation().map((businessObj, index) => 
                        <tr key={index}>
                            <Td>{businessObj.company}</Td>
                            <Td>{businessObj.innehav}</Td>
                            <Td>{businessObj.numberOfShares}</Td>
                            <Td>{businessObj.industry}</Td>

                        </tr>)
                }
            </tbody>
        </Table>
    )
}

export default PortfolioTable;