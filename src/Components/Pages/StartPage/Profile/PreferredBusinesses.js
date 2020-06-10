import React from 'react';
import {Table, Caption} from './Styles';

export default function PreferredBusinesses(props){
    
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