import React, {useState} from 'react'

const options = (props) =>{

    return (
        <button onClick={props.change} className="navigationOption">
        <img className="optionImg" src={props.bild}></img>
        {props.Name}
        </button>

)
}
export default options;