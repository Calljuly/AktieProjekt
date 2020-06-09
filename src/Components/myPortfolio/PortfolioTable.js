import React, {useState} from 'react';
import NavBar from './NavBar';
import BriefCase from '../../Data/Briefcase.json';
import {Table, Th, Td} from './StylesMyPortfolio';
import {extractBriefCaseInformation} from '../../Util/jsonExtractionScripts';


const PortfolioTable = () => {
    
    const [sharesPerPage, updateSharesPerPage] = useState(10);
    const [shareInformation, updateShareInformation] = useState(extractBriefCaseInformation(BriefCase));
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
            <NavBar shares={shareInformation} sharesPerPage={sharesPerPage} updateSharesPerPage={updateSharesPerPage} updateDisplayRange={updateDisplayRange} />
        </div>

    )
}

export default PortfolioTable;

