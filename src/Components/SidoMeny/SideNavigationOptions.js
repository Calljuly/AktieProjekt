import React, {useState} from 'react'

const Options = (props) =>{

    return (
        <button onClick={props.change} className="navigationOption">
        <img className="optionImg" src={props.bild} alt="meny button"/>
        {props.Name}
        </button>

)
}
export default Options;