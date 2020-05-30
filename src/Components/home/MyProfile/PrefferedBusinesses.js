import React from 'react';

export default function HomeDashBoardMyProfilePrefferedBusinesses(props){
    
    const prefferedBusinesses = props.person.preferences;
    
    const constructTableRows = (array) => {
        let rows = [];
        for(let i = 0; i < prefferedBusinesses.length -1; i+=2){
            rows.push(
                <tr key={i}>
                    <td>{prefferedBusinesses[i]}</td>
                    <td>{prefferedBusinesses[i+1]}</td>
                </tr>
                )
        }
        return rows;
    }
    

    return (
        <div>
            <table>
            <caption>Föredragna industrier</caption>
               <tbody>
                  {constructTableRows(prefferedBusinesses)}
               </tbody>
            </table>
         </div>
    );
     
}