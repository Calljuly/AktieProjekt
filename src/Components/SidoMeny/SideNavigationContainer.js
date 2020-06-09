import React from 'react'
import Options from './SideNavigationOptions'
import Setting from '../../images/cog.svg'
import Home from '../../images/home.svg'
import Portfolio from '../../images/portfolio.png'
import { SideMenuContainer} from './StylesSideMenu'

const Container = () => {
return (
    <SideMenuContainer >

        <Options Name="Hem" bild={Home} path="/" />
        <Options Name="Min portfolio" bild={Portfolio} path="/portfolio" />
        <Options  Name="Inställningar" bild={Setting} path="/settings" />
        
    </SideMenuContainer>
    );
}
export default Container;