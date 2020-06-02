import React from 'react';

const BranchCard = ({branch, amount, boxColor}) =>{
    let colorStyle = {
        backgroundColor: boxColor};
    
    let test = {
      fontSize: 14 + "px",  
      color: "#3D4465"
    };

    let test2 = {
        fontSize: 12 + "px"  ,
        color: "#A1A8C3"
      };

    let sekStyle = {
        fontSize: 14 + "px"  ,
        color: "#A1A8C3"
    }

    return (
        
        <div className = "category">
            <div className = "left">
                <div className = "colorBox" style = {colorStyle}></div>
                <p>
                    <span style = {test}>{branch}</span> 
                    <br/> 
                    <span style = {test2}>Företag 1, Företag 2 +4</span>
                </p>          
            </div>
            <p>
                <span style = {test}>{amount}</span>
                <span style = {sekStyle}> SEK</span>
            </p>
        </div>
    )
}

export default BranchCard