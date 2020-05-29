import React from 'react'
import LogOutPic from '../../images/logout.svg'

const LogOut = () => {
return (<div id="logout">
        <p><img className="optionImg" src={LogOutPic}></img>Logga ut</p>
    </div>)
}
export default LogOut;