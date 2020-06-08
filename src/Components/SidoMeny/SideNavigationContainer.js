import React from 'react'
import Options from './SideNavigationOptions'
import Setting from '../../images/cog.svg'
import Home from '../../images/home.svg'
import Portfolio from '../../images/portfolio.png'
import {NavLink} from 'react-router-dom'

const Container = () => {
return (
    <div id="test">

        <Options Name="Hem" bild={Home} path="/" />
        <Options Name="Min portfolio" bild={Portfolio} path="/portfolio" />
        <Options  Name="Inställningar" bild={Setting} path="/settings" />
        
    </div>
    );
}
export default Container;