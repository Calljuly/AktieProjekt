import React from 'react'
import LogOutPic from '../../images/logout.svg'

const LogOut = () => {
return (<div id="logout">
        <p><img className="optionImg" src={LogOutPic} alt="Log out "></img>Logga ut</p>
    </div>)
}
export default LogOut;