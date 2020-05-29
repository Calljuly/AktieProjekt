import React, {useState} from 'react'
import Options from './SideNavigationOptions'
import Setting from '../../images/cog.svg'
import Home from '../../images/home.svg'
import Test from '../../images/portfolio.png'


const container = (props) => {
return (
    <div>
        <Options change={props.changeHome} Name="Hem" bild={Home}></Options>
        <Options change={props.changePortfolio} Name="Min portfolio" bild={Test}></Options>
        <Options change={props.changeSettings} Name="Inställningar" bild={Setting}></Options>

    </div>
    );
}
export default container;