import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import BriefCase from '../../../Data/Briefcase.json';
import {Table, Th, Td, Main, TableContainer} from './Styles';
import {HeaderStyle} from '../Styles';
import {extractBriefCaseInformation} from '../../../Util/jsonExtractionScripts';


const BriefcaseTable = ({user}) => {
    
    const [sharesPerPage, updateSharesPerPage] = useState(10);
    const [shareInformation, updateShareInformation] = useState([]);
    const [displayRange, updateDisplayRange] = useState([0,sharesPerPage]);

    async function fetchPortfolioInfo () {
        const response = await fetch(`http://localhost:4001/customer/${user}`);
        const json = await response.json();
        
        const portfolioInformation = JSON.parse(json.Briefcase);

        updateShareInformation(extractBriefCaseInformation(portfolioInformation));
  
    }

    useEffect (() => {
        fetchPortfolioInfo();
    }, []);

    const generateTableContent = () =>{
        return(
        shareInformation.slice(displayRange[0],displayRange[1]).map((shareInfoObj, index) => 
                            <tr key={index}>
                                <Td>{shareInfoObj.company}</Td>
                                <Td>{shareInfoObj.totalWorth}</Td>
                                <Td>{shareInfoObj.shareType}</Td>
                                <Td>{shareInfoObj.shareAmount}</Td>
                                <Td>{shareInfoObj.shareId}</Td>
                                <Td>{shareInfoObj.ownership}%</Td>
                                <Td>{shareInfoObj.votingPower}%</Td>
                            </tr>)
        );
    }

    const displayMessageForEmptyTable = () => <HeaderStyle style={{textAlign: 'center'}}>Du har inget innehav tillagt ännu</HeaderStyle>;
    
    return (
        <Main>
            <TableContainer>
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
                            shareInformation.length > 0 && generateTableContent()
                        }
                    </tbody>
                </Table>
                {
                    shareInformation.length === 0 && displayMessageForEmptyTable()
                }
            </TableContainer>
            {
                shareInformation.length > 0 && <NavBar shares={shareInformation} sharesPerPage={sharesPerPage} updateSharesPerPage={updateSharesPerPage} updateDisplayRange={updateDisplayRange} />
            }
            
        </Main>

    )
}

export default BriefcaseTable;

