import React, {useState} from 'react';
import styled from 'styled-components';
import BriefCase from '../../Data/Briefcase.json';


const Table = styled.table`
    min-height: 100%;
    min-width: 100%;
    text-align:left;
    font-size:1em;

`;

const Th = styled.th`
    color: #A1A8C3;
    padding-bottom: 1.25em;

`;

const Td = styled.td`
    color: #3C3C3B;
    border-bottom: 1px solid #EEF3FF;
`;


const briefCase = BriefCase;

const PortfolioTable = () => {
    const [page, updatePage] = useState(1);
    
    const extractBriefCaseInformation = () => {
        let companyInformation = [];
        let shareInformation = [];

        
        
        
        briefCase.map(industry => {
            companyInformation = companyInformation.concat(industry.arrayOfCompanies);
        });
        companyInformation.map(company =>{
            company.arrayOfShares.map(share =>{
                let tempObj = share;
                tempObj.company = company.company;
                shareInformation.push(tempObj);
            })
        })        
        return shareInformation;
    }

    return (
        <Table>
            <thead>
                <tr>
                    <Th>Företag</Th>
                    <Th>Innehav</Th>
                    <Th>Aktietyp</Th>
                    <Th>Antal aktier</Th>
                    <Th>Aktienummer</Th>
                    <Th>Ägarandel</Th>
                    <Th>Röstvärde</Th>
                </tr>
            </thead>
            <tbody>
                {
                    extractBriefCaseInformation().map((shareInfoObj, index) => 
                        <tr key={index}>
                            <Td>{shareInfoObj.company}</Td>
                            <Td>{shareInfoObj.totalWorth}</Td>
                            <Td>{shareInfoObj.shareType}</Td>
                            <Td>{shareInfoObj.shareAmount}</Td>
                            <Td>{shareInfoObj.shareId}</Td>
                            <Td>{shareInfoObj.ownership}</Td>
                            <Td>{shareInfoObj.votingPower}</Td>
                        </tr>)
                }
            </tbody>
        </Table>

    )
}

export default PortfolioTable;

// briefCase.map((industry, i) => {
//     let rowObj = {
//         industry: '',
//         company:'',
//         innehav: 0,
//         numberOfShares: 0

//     };
    
//     rowObj.industry = industry.industry;
    
//     industry.arrayOfCompanies.map(company => {
//         rowObj.company = company.company;
        
//         company.arrayOfShares.map(shares => {
//             rowObj.innehav += shares.totalWorth;
//             rowObj.numberOfShares += shares.shareAmount;
            
            
//         })
//     })
    
//     rows.push(rowObj);
// });

//THIS CODE WORKS BUT IT AINT PRETTY

// const extractBriefCaseInformation = () => {
//     let shareInformation = [];
//     let what = briefCase.map(object => object.arrayOfCompanies);
//     let nowWhat = what.map(company => {
//         company.map(c =>{
//             let obj = {company: c.company};
//             c.arrayOfShares.map(shares =>{
//                 obj.shareId = shares.shareId;
//                 obj.totalWorth = shares.totalWorth;
//                 obj.shareType = shares.shareType;
//                 obj.ownership = shares.ownership;
//                 obj.votingPower = shares.votingPower
                
//                 console.log(obj);
//                 shareInformation.push(obj);
//             })
//         })
//     });