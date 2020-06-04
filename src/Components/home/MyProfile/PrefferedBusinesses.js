import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width:100%;
    padding: 0.5em;
`;

const Caption = styled.caption`
    width:70%;
    text-align: left;
    color: rgb(170, 167, 167);
    padding: 0.5em;
`;


export default function HomeDashBoardMyProfilePrefferedBusinesses(props){
    
    const prefferedBusinesses = props.person.preferences;
    
    const constructTableRows = () => {
        let rows = [];
        for(let i = 0; i <= prefferedBusinesses.length -1; i+=2){
            rows.push(
                <tr key={i}>
                    <td style={{textAlign:'left'}}>{prefferedBusinesses[i]}</td>
                    <td style={{textAlign:'left'}}>{prefferedBusinesses[i+1]}</td>
                </tr>
                )
        }
        return rows;
    }
    

    return (
        <div>
            <Table>
            <Caption>Föredragna industrier</Caption>
               <tbody>
                  {constructTableRows(prefferedBusinesses)}
               </tbody>
            </Table>
         </div>
    );
     
}