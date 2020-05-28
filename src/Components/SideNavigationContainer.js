import React from 'react'
import Options from './SideNavigationOptions'
import Setting from '../Bilder/cog.svg'
import Home from '../Bilder/home.svg'
import Test from '../Bilder/portfolio.png'


const container = () => {
    const  a = 'q';
return (
    <div>
        <Options Name="Hem" bild={Home}></Options>
        <Options Name="Min portfolio" bild={Test}></Options>
        <Options Name="Inställningar" bild={Setting}></Options>

    </div>
    );
}
export default container;