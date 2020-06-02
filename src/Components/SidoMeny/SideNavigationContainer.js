import React, {useState} from 'react'
import Options from './SideNavigationOptions'
import Setting from '../../images/cog.svg'
import Home from '../../images/home.svg'
import Portfolio from '../../images/portfolio.png'


const Container = (props) => {
return (
    <div>
        <Options change={props.changeHome} Name="Hem" bild={Home}></Options>
        <Options change={props.changePortfolio} Name="Min portfolio" bild={Portfolio}></Options>
        <Options change={props.changeSettings} Name="Inställningar" bild={Setting}></Options>

    </div>
    );
}
export default Container;