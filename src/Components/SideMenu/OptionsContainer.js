import React from 'react'
import Options from './Option'
import Setting from '../../images/cog.svg'
import Home from '../../images/home.svg'
import Portfolio from '../../images/portfolio.png'
import { SideMenuContainer} from './Styles'

const OptionsContainer = () => {
return (
    <SideMenuContainer >

        <Options name="Hem" image={Home} path="/" />
        <Options name="Min portfolio" image={Portfolio} path="/portfolio" />
        <Options name="Inställningar" image={Setting} path="/settings" />
        
    </SideMenuContainer>
    );
}
export default OptionsContainer;