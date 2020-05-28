import React from 'react'

const options = (props) =>{
return (
<button className="navigationOption">
<img className="optionImg" src={props.bild}></img>
{props.Name}
</button>

)
}
export default options;