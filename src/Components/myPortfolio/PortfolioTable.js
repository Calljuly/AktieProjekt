import React, {useState} from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
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

const PortfolioTable = () => {
    
    const [sharesPerPage, updateSharesPerPage] = useState(5);
    const [shareInformation, updateShareInformation] = useState(extractBriefCaseInformation());
    const [displayRange, updateDisplayRange] = useState([0,sharesPerPage]);
    
    return (
        <div>
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
                        shareInformation.slice(displayRange[0],displayRange[1]).map((shareInfoObj, index) => 
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
            <NavBar sharesPerPage={sharesPerPage} updateSharesPerPage={updateSharesPerPage} updateDisplayRange={updateDisplayRange} shares={shareInformation}/>
        </div>

    )
}

export default PortfolioTable;

