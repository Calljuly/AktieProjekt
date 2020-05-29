import React, {useState} from 'react'
import Options from './SideNavigationOptions'
import Setting from '../Bilder/cog.svg'
import Home from '../Bilder/home.svg'
import Test from '../Bilder/portfolio.png'


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